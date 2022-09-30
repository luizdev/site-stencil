const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {BaseHrefWebpackPlugin} = require("base-href-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const configGenerator = require("./ConfigGenerator.js");

const names = configGenerator.names;
const scripts = configGenerator.scripts;
const htmlPlugIn = configGenerator.htmlPlugIn;
const isDevel = configGenerator.isDevel;

const basePath = isDevel ? JSON.stringify("") : JSON.stringify("assets");

const assetsPath = isDevel ? JSON.stringify("/src/") : JSON.stringify("./assets/");

const myPath = JSON.parse(basePath); // Converts parsed %22%22 to ''
const cssPath = isDevel ? "./src/css/[name].css" : `./${myPath}/css/[name].css`;

const config = {
  entry: {
    ...names,
  },
  devServer: {
    port: 8082,
    watchContentBase: true,
    contentBase: path.join(__dirname, "public"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  devtool: "eval-cheap-source-map",
  plugins: [...htmlPlugIn],
  module: {
    rules: [
      {
        test: /\.js$/, // compile javascript files
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  safari: 10,
                  ie: 11,
                  chrome: 64,
                  firefox: 58,
                },
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
          ],
        },
      },
      {
        test: /\.pug$/,
        include: [path.resolve(__dirname, "src/pages")],
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
        exclude: [path.resolve(__dirname, "src/pages/utils")],
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "src/scss")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: cssPath,
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isDevel,
              url: url => {
                return !(url.includes("png") || url.includes("svg"));
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name() {
                const start = isDevel
                  ? JSON.parse(assetsPath)
                  : JSON.parse(assetsPath).substring(2);

                return `${start}images/[name].[ext]`;
              },

              esModule: false,
              publicPath: "",
              postTransformPublicPath: p => {
                return `'.' + ${p}`;
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = () => {
  config.plugins.push(
    new ScriptExtHtmlWebpackPlugin({defaultAttribute: "defer"}),
    new webpack.DefinePlugin({
      WEB_CONTEXT: basePath,
      WEB_ASSETS: assetsPath,
    })
  );

  if (!isDevel) {
    const pagesScripts = () => {
      return scripts.map(item => {
        return {
          from: `${Object.values(item)[0]}/index.js`,
          to: `${__dirname}/public/${myPath}/js/pages/${Object.keys(item)[0]}.js`,
        };
      });
    };

    const addedPlugins = [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {from: "src/assets/img", to: `${__dirname}/public/${myPath}/img`},
          {from: "src/assets/docs", to: `${__dirname}/public/${myPath}/docs`},
          {from: "src/assets/build", to: `${__dirname}/public/${myPath}/build`},
          {from: "src/assets/fontawesome", to: `${__dirname}/public/${myPath}/fontawesome`},
          {from: "src/assets/plugins", to: `${__dirname}/public/${myPath}/plugins`},
          {from: "src/assets/webfonts", to: `${__dirname}/public/${myPath}/webfonts`},
          ...pagesScripts(),
        ],
      }),
      new BaseHrefWebpackPlugin({baseHref: "./"}),
    ];

    // Removes .map files in the build
    config.devtool = undefined;
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "all",
            minSize: 4500000,
          },
        },
      },
    };

    config.plugins = config.plugins.concat(addedPlugins);

    config.output.publicPath = "/recursos/maquetas-peritos/";
  }

  return config;
};
