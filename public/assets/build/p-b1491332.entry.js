import{r as t,h as e,g as a}from"./p-44118c4f.js";const n=class{constructor(e){t(this,e),this.application=null,this.user=null,this.lastOperation=null}render(){return console.log("mm-last-operation - Este componente ha quedado obsoleto."),this.lastOperation?e("div",{class:"last-operation-container"},e("h3",null,"Última operación"),e("div",{class:"operation-container"},e("div",{class:"display-f flex--align-center flex--justify-between"},e("span",{class:"text--grey_800 mm-semi-bold"},this.lastOperation.title),e("span",{class:"text--brand_accent_500 mm-semi-bold link-operation",onClick:()=>window.location.href=this.lastOperation.link},this.lastOperation.textLink)),e("small",{class:"text--grey_600 mt-xs"},"HACE ",this.getHours()," HORAS"))):""}componentWillLoad(){if(!this.application||!this.user)throw new Error("El parámetro application o user estan vacíos.");this.getLastOperation()}getLastOperation(){const t=localStorage.getItem(`last-operation-${this.application}-${this.user}`);t&&(this.lastOperation=JSON.parse(t))}getHours(){return this.lastOperation&&this.lastOperation.dateCreated?(((new Date).getTime()-this.lastOperation.dateCreated)/1e3/60/60).toFixed(0):""}get el(){return a(this)}};n.style=":root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-last-operation{width:100%;height:100%}mm-last-operation .last-operation-container{width:100%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;background-color:transparent}mm-last-operation .last-operation-container .operation-container{background-color:var(--full_white, #fff);border-radius:2px;padding:16px 20px;width:calc(100% - 40px)}mm-last-operation .last-operation-container .operation-container .link-operation{cursor:pointer}";export{n as mm_last_operation}