import{r as t,c as i,h as e,g as n}from"./p-44118c4f.js";const o=class{constructor(e){t(this,e),this.itemSelected=i(this,"itemSelected",7),this.isSearching=!1,this.selection=[],this.eventClickOnBody=this.eventClickOnBody.bind(this)}render(){return e("div",{class:"taxonomic-search-container"},e("div",{class:"input-container"},e("input",{value:this.searchText,type:"text",onInput:t=>this.search(t),onKeyDown:t=>{this.inputKeyDown(t)},placeholder:this.placeholder}),this.isSearching?e("div",{class:"loading-container"},e("mm-spinner",null)):this.searchText?this.getRemoveButton():e("div",{class:"btn-search",onClick:()=>this.filter()},e("i",{class:"fas fa-search"})),this.treeFiltered&&this.treeFiltered.length?this.renderResults():this.noResults()))}renderResults(){return e("div",{class:"result-container"},this.treeFiltered.map((t=>e("div",{class:"result-item"},e("div",{class:"row"},e("div",{class:"col-12 col-4-md ambito",onClick:i=>this.itemClicked(i,t)},e("h4",{class:"title"},this.remarkText(t.nombre)),e("span",{class:"description"},this.remarkText(t.descripcion))),e("div",{class:"col-12 col-8-md tipos"},t.tiposSolicitud.map((t=>e("div",{class:"request",onClick:i=>this.itemClicked(i,t)},e("h4",{class:"title"},this.remarkText(t.nombre)),e("span",{class:"description"},this.remarkText(t.descripcion)),e("ul",{class:"requests-list"},t.tiposPeticion.map((t=>t.subtiposPeticion.map((i=>e("li",{tabindex:"0",class:"subrequest",onClick:t=>this.itemClicked(t,i)},e("h6",{class:"request-title",onClick:i=>this.itemClicked(i,t)},this.remarkText(t.nombre)),e("span",{class:"subrequest-description"},this.remarkText(i.nombre)),this.getTagsElements(i.tags))))))))))))))))}getTagsElements(t){return t&&t.length?e("section",{class:"display-f flex--wrap mt-xs"},null==t?void 0:t.map((t=>e("small",{class:"mm-semi-bold mr-xs"},this.remarkText(t))))):null}getRemoveButton(){return e("span",{class:"btn-remove"},e("i",{class:"fas fa-times-circle",onClick:()=>this.removeSearch()}))}removeSearch(){this.searchText=null,this.setShowResult(!1),this.taxonomicSearchElement.querySelector("input").focus()}remarkText(t){if(this.cleanString(this.searchText)){const i=this.cleanString(this.searchText).toLowerCase(),n=this.cleanString(t).toLowerCase().indexOf(i);if(n<0)return t;const o=t.substr(0,0+n),a=t.substr(n,i.length),r=t.substr(n+i.length);return e("span",null,o,e("span",{class:"marked"},a),r)}}inputKeyDown(t){13===t.keyCode&&this.filter()}itemClicked(t,i){t.preventDefault(),t.stopPropagation(),this.selection=[],this.dataJson.map((t=>this.findParent(t,i.id,this.selection))),this.selection.reverse(),i.url&&window.open(i.url,"_blank"),this.itemSelected.emit({id:i.id,selection:this.selection}),this.setShowResult(!1)}findParent(t,i,e){if(t.id===i)return e.push(t.id),!0;for(var n in t)if("object"==typeof t[n])for(var o=0;o<t[n].length;o++)if(t.id&&this.findParent(t[n][o],i,e))return e.push(t.id),!0;return!1}copy(t){return Object.assign({},t)}filter(){const t=this.copy,i=this.cleanString,e=this.isArrayOfStrings,n=i(this.searchText).toLowerCase();var o=this.dataJson.map(t).filter((function o(a){for(var r in a){const s=typeof a[r];if(e(a[r])){for(const t in a[r])if(-1!=i(a[r][t]).toLowerCase().indexOf(n))return!0}else if("string"==s){if(-1!=i(a[r]).toLowerCase().indexOf(n))return!0}else if("object"==s){const i=a[r].map(t).filter(o);if(i.length>0)return a[r]=i,!0}}return!1}));this.treeFiltered=o,this.setShowResult(!0)}isArrayOfStrings(t){return Array.isArray(t)&&t.every((t=>"string"==typeof t))}noResults(){return e("div",{class:"result-container empty-result"},e("h6",null,"No se ha encontrado resultados."),e("p",null,"Por favor, modifica tu búsqueda o localiza en la parte inferior un tipo de solicitud a partir del cual crear una nueva."))}cleanString(t){return t&&(t=(t=(t=(t=(t=t.replace(/á/gi,"a")).replace(/é/gi,"e")).replace(/í/gi,"i")).replace(/ó/gi,"o")).replace(/ú/gi,"u")),t}search(t){this.searchText=t.target.value,this.isSearching=!0,setTimeout((()=>{this.filter(),this.isSearching=!1}),750)}setShowResult(t){this.showResults=Boolean(t&&this.searchText),this.toggleShowResult()}toggleShowResult(){const t=this.taxonomicSearchElement.querySelector(".result-container");this.showResults?(document.body.addEventListener("click",this.eventClickOnBody),t&&t.classList.add("show")):(document.body.removeEventListener("click",this.eventClickOnBody),t&&t.classList.remove("show"))}eventClickOnBody(t){let i;(t.path||t.composedPath&&t.composedPath()||this.composedPath(t.target)).some((t=>{if("MM-ADVANCED-SEARCH"===t.tagName)return i=t,!0})),i&&this.taxonomicSearchElement===i||this.setShowResult(!1)}composedPath(t){const i=[];for(;t;){if(i.push(t),"HTML"===t.tagName)return i.push(document),i.push(window),i;t=t.parentElement}}get taxonomicSearchElement(){return n(this)}};o.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-taxonomic-search{display:block;position:relative}mm-taxonomic-search .taxonomic-search-container .input-container{position:relative;border:1px solid #ddd;border-radius:6px}mm-taxonomic-search .taxonomic-search-container .input-container input{background-color:#fdfdfd;border-radius:6px;border:unset;box-sizing:border-box;color:var(--primary_500, #3269b3);font-family:OpenSans;font-size:1rem;font-style:italic;height:40px;line-height:20px;outline:none;padding:10px 2rem 10px 0.5rem;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mm-taxonomic-search .taxonomic-search-container .input-container input:focus{background-color:#fcfcfc}mm-taxonomic-search .taxonomic-search-container .input-container input.placeholder{color:#979797;font-family:OpenSans-light;opacity:1}mm-taxonomic-search .taxonomic-search-container .input-container input:-moz-placeholder{color:#979797;font-family:OpenSans-light;opacity:1}mm-taxonomic-search .taxonomic-search-container .input-container input::-moz-placeholder{color:#979797;font-family:OpenSans-light;opacity:1}mm-taxonomic-search .taxonomic-search-container .input-container input:-ms-input-placeholder{color:#979797;font-family:OpenSans-light;opacity:1}mm-taxonomic-search .taxonomic-search-container .input-container input::-webkit-input-placeholder{color:#979797;font-family:OpenSans-light;opacity:1}mm-taxonomic-search .taxonomic-search-container .input-container .btn-search,mm-taxonomic-search .taxonomic-search-container .input-container .btn-remove{position:absolute;top:0;bottom:0;right:0.5rem;display:flex;align-items:center}mm-taxonomic-search .taxonomic-search-container .input-container .btn-search i,mm-taxonomic-search .taxonomic-search-container .input-container .btn-remove i{color:var(--grey_500, #ccc);font-size:1rem}mm-taxonomic-search .taxonomic-search-container .input-container .btn-remove i{color:var(--grey_750, #73757b);cursor:pointer}mm-taxonomic-search .taxonomic-search-container .input-container .loading-container{position:absolute;top:3px;right:4px}mm-taxonomic-search .taxonomic-search-container .input-container .loading-container mm-spinner{--size:35px}mm-taxonomic-search .taxonomic-search-container .input-container .result-container{visibility:hidden;box-sizing:border-box;padding:15px;width:100%;position:absolute;left:0;right:0;z-index:999;border:1px solid var(--grey_300, #e9ecf0);border-radius:8px;background-color:var(--full_white, #fff);box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.15);max-height:357px;overflow:auto;}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar{width:13px}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar-track{box-shadow:inset 0 0 13px 13px var(--grey_200, #f2f2f2);border:solid 4px transparent}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar-track:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar-thumb{box-shadow:inset 0 0 13px 13px var(--grey_800, #61616a);border:solid 4px transparent;border-radius:13px}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar-thumb:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-taxonomic-search .taxonomic-search-container .input-container .result-container::-webkit-scrollbar-button{display:none}mm-taxonomic-search .taxonomic-search-container .input-container .result-container.show{visibility:visible}mm-taxonomic-search .taxonomic-search-container .input-container .result-container.empty-result h6{font-family:OpenSans-bold;color:var(--grey_800, #61616a);padding-bottom:10px;font-size:14px;font-weight:normal}mm-taxonomic-search .taxonomic-search-container .input-container .result-container.empty-result p{line-height:initial}mm-taxonomic-search .taxonomic-search-container .input-container .result-item{width:100%;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;border-top:2px solid var(--grey_300, #e9ecf0);padding:15px 0}mm-taxonomic-search .taxonomic-search-container .input-container .result-item:first-child{border-top:none;padding-top:0}mm-taxonomic-search .taxonomic-search-container .input-container .result-item .marked{font-family:"OpenSans-semibold";color:var(--primary_500, #3269b3)}mm-taxonomic-search .ambito{display:flex;flex-direction:column;justify-content:flex-start;padding-left:15px}mm-taxonomic-search .ambito .title{color:var(--grey_800, #61616a);font-size:16px;line-height:28px;margin:0;border:none;padding:0}mm-taxonomic-search .ambito .description{color:var(--grey_600, #a0aab5);font-size:12px;padding-top:10px;line-height:16px}mm-taxonomic-search .tipos{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;cursor:pointer;padding-left:15px;padding-top:1rem}mm-taxonomic-search .tipos .request{width:100%;margin-bottom:20px}mm-taxonomic-search .tipos .request .title{border-bottom:1px solid var(--full_black, #000);color:var(--grey_800, #61616a);font-size:12px;line-height:28px;margin-bottom:10px;padding-left:10px;text-transform:uppercase}mm-taxonomic-search .tipos .request .description{color:var(--grey_600, #a0aab5);font-size:12px;line-height:16px}mm-taxonomic-search .tipos .request .requests-list{list-style:none;margin:0;padding:0}mm-taxonomic-search .tipos .request .requests-list .subrequest{padding:8px 12px 12px 0}mm-taxonomic-search .tipos .request .requests-list .subrequest:first-child{margin-top:12px}mm-taxonomic-search .tipos .request .requests-list .subrequest .request-title{color:var(--grey_600, #a0aab5);font-size:12px;border:none;padding:5px 0}mm-taxonomic-search .tipos .request .requests-list .subrequest .subrequest-description{color:var(--grey_800, #61616a);font-size:14px}mm-taxonomic-search .tipos .request .requests-list .subrequest:hover{background:var(--grey_200, #f2f2f2)}@media screen and (min-width: 992px){mm-taxonomic-search{width:100%}mm-taxonomic-search h4{margin:0}mm-taxonomic-search .tipos{margin-top:0}mm-taxonomic-search .request .requests-list .subrequest{padding:8px 12px 12px}mm-taxonomic-search .taxonomic-search-container .input-container input{height:60px;padding:0 74px 0 24px;line-height:27px;font-size:20px}mm-taxonomic-search .taxonomic-search-container .input-container .btn-search,mm-taxonomic-search .taxonomic-search-container .input-container .btn-remove{right:20px}mm-taxonomic-search .taxonomic-search-container .input-container .btn-search i,mm-taxonomic-search .taxonomic-search-container .input-container .btn-remove i{font-size:1.5rem}mm-taxonomic-search .taxonomic-search-container .input-container .loading-container{position:absolute;top:5px;right:4px}mm-taxonomic-search .taxonomic-search-container .input-container .loading-container mm-spinner{--size:50px}}';export{o as mm_taxonomic_search}