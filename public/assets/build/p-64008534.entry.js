import{r as a,c as r,h as e,g as c}from"./p-44118c4f.js";class n{constructor(){this.branch=t.AUTOS}}var t;!function(a){a.AUTOS="AUTOS",a.VIDA="VIDA",a.ACCIDENTES="ACCIDENTES",a.HOGAR="HOGAR",a.DECESOS="DECESOS",a.SALUD="SALUD"}(t||(t={}));const i=class{constructor(e){a(this,e),this.goToGrid=r(this,"goToGrid",7),this.saveBudget=r(this,"saveBudget",7),this.selectBranchs=r(this,"selectBranchs",7),this.cardClicked=r(this,"cardClicked",7),this.cardBranchs=[],this.cardSelected=new n}render(){return e("div",{class:"row-center"},this.cardBranchs.map((a=>this.renderCard(a))))}renderCard(a){return e("div",{class:"card-wrapper"},e("div",{class:"card-container",onClick:()=>{this.selectCard(a),this.cardClicked.emit(a)}},e("div",{class:"card-icon-container"},e("i",{class:"icon-type icon-mm-"+a.branch.toLowerCase(),"aria-hidden":"true"})),e("div",{class:"card-body-container"},e("div",{class:"card-title-container"},e("span",null,a.branch)),this.renderPrice(a))),e("div",{class:"lightbox--"+a.branch},a.customLightbox?e("slot",{name:"lightbox--"+a.branch}):e("mm-lightbox",{label:"Registrar interés en producto"},e("div",{slot:"lightbox-content"},e("p",{class:"my-s"},"¿Quieres acceder directamente a la parrilla de productos de ",a.branch," o prefieres guardar la cotización para otro momento?")),e("div",{slot:"lightbox-content-button",class:"display-f flex--justify-between flex--align-end"},e("mm-button",{label:"Cancelar",type:"support",class:"button-close",onClick:()=>{var r;null===(r=this.el.querySelector(".lightbox--"+a.branch).querySelector("mm-lightbox"))||void 0===r||r.close()}}),e("div",{class:"display-f flex--justify-end flex--wrap"},e("mm-button",{label:"Guardar",type:"secondary",class:"button-close mt-xs",onClick:()=>{var r;null===(r=this.el.querySelector(".lightbox--"+a.branch).querySelector("mm-lightbox"))||void 0===r||r.close(),this.saveBudget.emit(this.cardSelected.branch)}}),e("mm-button",{class:"ml-s mt-xs",label:"Ir a la parrilla",type:"primary",onClick:()=>{var r;null===(r=this.el.querySelector(".lightbox--"+a.branch).querySelector("mm-lightbox"))||void 0===r||r.close(),this.goToGrid.emit(this.cardSelected.branch)}}))))))}renderPrice(a){switch(a.state){case 0:return e("div",{class:"card-price-container"},e("mm-spinner",{size:"20px",duration:"1"}),e("span",{class:"sufix loading"},"Cargando..."));case 1:return e("div",{class:"card-price-container"},e("span",{class:"price"},a.price),e("span",{class:"sufix"},"€/",a.fee||"Año"));case 2:return e("div",{class:"card-price-container"},e("span",{class:"no-content"},"No disponible"));default:return""}}selectCard(a){var r;this.cardSelected=a,null===(r=this.el.querySelector(".lightbox--"+a.branch).querySelector("mm-lightbox"))||void 0===r||r.open(),this.selectBranchs.emit(a)}get el(){return c(this)}};i.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-card-crosselling{width:100%;height:40px}mm-card-crosselling .row-center{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap}mm-card-crosselling .card-container{align-items:center;background-color:var(--full_white, #fff);border-radius:2px;border:1px solid var(--grey_500, #ccc);box-shadow:0 1px 4px rgba(40, 40, 40, 0.34902);color:var(--grey_750, #73757b);cursor:pointer;display:flex;flex-direction:row;justify-content:center;margin-right:10px;margin-bottom:10px;min-height:40px;min-width:7.5rem;padding:0px 20px;padding:8px}mm-card-crosselling .card-container .card-icon-container i:before{font-size:28px;color:var(--grey_500, #ccc)}mm-card-crosselling .card-container .card-body-container{margin-left:10px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;height:100%}mm-card-crosselling .card-container .card-body-container .card-title-container{margin-top:-3px}mm-card-crosselling .card-container .card-body-container .card-title-container span{color:var(--action_500, #c9337d);font-size:12px;font-family:"OpenSans-Bold", sans-serif}mm-card-crosselling .card-container .card-body-container .card-price-container{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:5px;position:relative}mm-card-crosselling .card-container .card-body-container .card-price-container img{width:60px;height:60px;position:absolute;top:-20px;left:-20px}mm-card-crosselling .card-container .card-body-container .card-price-container .price{color:var(--grey_800, #61616a);font-size:18px;font-family:"OpenSans-Bold"}mm-card-crosselling .card-container .card-body-container .card-price-container .sufix{margin-left:5px;color:var(--grey_800, #61616a);font-size:10px;margin-top:4px;font-family:"OpenSans"}mm-card-crosselling .card-container .card-body-container .card-price-container .no-content{color:var(--grey_800, #61616a);font-size:10px;margin-top:4px;font-family:"OpenSans"}mm-card-crosselling .card-container:hover{background:var(--brand_accent_100, #f2fafd)}mm-card-crosselling .card-container:hover .card-icon-container i:before{color:var(--brand_accent_500, #00a4e3)}mm-card-crosselling .card-container:hover .card-body-container .card-title-container span{color:var(--brand_accent_500, #00a4e3)}@media screen and (min-width: 992px){mm-card-crosselling .card-container{min-width:unset}}';export{i as mm_card_crosselling}