const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

const isDevel = process.argv.join(" ").includes("development");

const names = {main: "./src/scss/main.scss"};
const htmlPlugIn = [];
const scripts = [{index: "src"}];

const HTMLFolder = "./src/pages/";

const walkSync = (dir = HTMLFolder, filelist = []) => {
  const files = fs.readdirSync(dir);

  if (!dir.includes("src/pages/generic")) {
    files.forEach(file => {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        filelist = walkSync(path.join(dir, file), filelist);
        // only add .pug files as entrypoints. With Empty folders git adds .gitkeep files
      } else if (
        !file.startsWith(".") &&
        file.match(/\.[0-9a-z]+$/i)[0] === ".pug" &&
        file === "index.pug"
      ) {
        // transforms \modules\templates to /modules/templates
        const ruta = path.join(dir, file).replace(/\\/g, "/");
        const fileName = file.replace(/\.[^/.]+$/, ""); // index from index.pug
        const basePath = isDevel ? "src/" : "./assets/";

        const formattedFilename = dir.replace("src/pages/", "");

        const pluginObject = new HtmlWebpackPlugin({
          template: `./${ruta}`,
          inject: true,
          chunks: [fileName, "custom"],
          filename: `${formattedFilename}.html`,
          templateParameters: {
            WEB_CONTEXT: basePath,
          },
        });

        if (fs.existsSync(`${dir}/index.js`)) {
          const dirSplit = dir.split("\\");
          const selectPart = dirSplit[dirSplit.length - 2];
          const item = {
            [selectPart + "_" + path.basename(path.resolve(dir))]: dir,
          };
          scripts.push(item);
        }

        htmlPlugIn.push(pluginObject);
        filelist.push(`${dir.replace("src/pages/", "")}/${file}`);
      }
    });
  }
  return filelist;
};

walkSync();

module.exports = {
  names,
  scripts,
  htmlPlugIn,
  isDevel,
};
