import{r as t,h as e}from"./p-44118c4f.js";const i=class{constructor(e){t(this,e),this.srcAssets="assets/img/logos/"}renderIconOrImage(){return this.logo||this.favicon?this.renderImage():this.renderIcon()}renderImage(){return e("img",{class:this.type?this.type:"mr-xs mb-xxs",src:this.getSrcImage(),title:this.getTitleImage(),alt:this.getAltImage(),width:this.favicon?"32":"",height:this.favicon?"32":""})}renderIcon(){return e("mm-icon",{name:this.name})}renderCopyLayer(){return e("div",{class:"copy-layer withOptions"},e("i",{class:"fas fa-copy"}),e("i",{class:"fas fa-download"}))}renderName(){return this.logo?null:e("span",{class:"name"},this.name)}renderBlockImage(){return e("article",{class:"icon-container fa-icon-container "+this.getWhiteClass()},this.renderName(),this.renderIconOrImage(),this.renderCopyLayer())}renderImageOrBlock(){return this.onlyImage?this.renderImage():this.renderBlockImage()}render(){return this.renderImageOrBlock()}getWhiteClass(){return this.white?"bg--brand_accent_500":""}getSrcImage(){return this.favicon?this.getSrcImageFavicon():this.getSrcImageLogo()}getSrcImageLogo(){return this.logo&&this.mutua?this.getSrcLogoMutua():this.getSrcLogoAplications()}getSrcImageFavicon(){const t=this.name.toLowerCase().replace(/\s+/g,""),e="mutuactivos"===t?"mutuactivosoffice":t;return this.onlyImage&&this.enviroment?`assets/favicons/${e}/favicon-${e}-${this.enviroment}.svg`:`assets/favicons/favicon_${e}.svg`}getSrcLogoMutua(){return this.mutua&&this.white?`${this.srcAssets}logo_MM_white${this.name?"_"+this.name:""}.svg`:`${this.srcAssets}logo_MM${this.name?"_"+this.name:""}.svg`}getSrcLogoAplications(){return this.white?`${this.srcAssets}logo${this.name?"_"+this.name:""}_white.svg`:`${this.srcAssets}logo${this.name?"_"+this.name:""}.svg`}getTitleImage(){return`${this.type?this.type:"favicon"} MM ${this.title?this.title:this.name}`}getAltImage(){return this.white?`${this.type?this.type:"favicon"}-${this.name}-white`:`${this.type?this.type:"favicon"}-${this.name}`}};i.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}.iconos-container{display:grid;width:100%;border:1px solid var(--grey_300, #e9ecf0);border-bottom:0;border-right:0}.iconos-container:not(.triple-box){grid-template-columns:repeat(auto-fit, minmax(150px, 1fr))}.iconos-container .icon-container{border-bottom:1px solid var(--grey_300, #e9ecf0);border-right:1px solid var(--grey_300, #e9ecf0);align-content:center;align-items:center;background-color:var(--grey_100, #f9f9f9);box-sizing:border-box;display:flex;flex-direction:column;height:140px;justify-content:center;padding:10px 20px 10px;position:relative}.iconos-container .icon-container .name{color:var(--grey_800, #61616a);font-family:"OpenSans";font-size:12px;padding-bottom:0.75rem;background:none;border:none;text-align:center}.iconos-container .icon-container i{color:var(--grey_800, #61616a);font-size:24px}.iconos-container .icon-container .copy-layer{display:none;background-color:rgba(0, 0, 0, 0.05);cursor:pointer;display:none;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.iconos-container .icon-container .copy-layer i{position:absolute;bottom:10px;color:var(--grey_800, #61616a);pointer-events:none;font-size:1rem;pointer-events:all}.iconos-container .icon-container .copy-layer i:first-child{left:10px}.iconos-container .icon-container .copy-layer i:last-child{right:10px}.iconos-container .icon-container .copy-layer i:hover{color:var(--grey_900, #55494c)}.iconos-container .icon-container .copy-layer.withOptions{padding:10px;align-items:flex-start}.iconos-container .icon-container .copy-layer.withOptions .copy-layer-option:last-child{align-self:flex-start}.iconos-container .icon-container:hover .copy-layer{display:flex}.iconos-container .icon-container:hover .name,.iconos-container .icon-container:hover span{display:none}@media screen and (min-width: 992px){.iconos-container.triple-box{grid-template-columns:repeat(3, minmax(150px, 1fr))}}';export{i as mm_site_icons}