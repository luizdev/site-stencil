import{r as e,h as t,H as s,g as i}from"./p-44118c4f.js";const r=["25","33","50"],o=["left","right","top","bottom"],a=["azul","gris","blanco"],d=class{constructor(t){e(this,t),this.type="azul",this.position="right",this.size="25"}async close(){this.sidesheetEl.classList.remove("show"),this.sidesheetEl.classList.add("hidden")}async open(){this.sidesheetEl.classList.remove("hidden"),this.sidesheetEl.classList.add("show")}async toggle(){this.sidesheetEl.classList.contains("show")?this.close():this.open()}getSize(){return"size_"+(-1!==r.indexOf(this.size)?this.size:"25")}getPosition(){return-1!==o.indexOf(this.position)?this.position:"right"}getType(){return-1!==a.indexOf(this.type)?this.type:"azul"}render(){return t(s,{class:`${this.type} ${this.getPosition()} ${this.getSize()}`},t("div",{class:"close-btn"},t("i",{class:"fas fa-times blue",onClick:()=>this.close()})),t("div",{class:"sidesheet-content"},t("slot",null)))}get sidesheetEl(){return i(this)}};d.style=":root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-sidesheet{box-sizing:border-box;display:flex;flex-flow:column;height:100vh;width:100%;overflow:hidden;position:fixed;top:0;z-index:1000}mm-sidesheet.azul{background:var(--brand_accent_100, #f2fafd)}mm-sidesheet.azul.left{border-right:1px solid var(--brand_accent_300, #c1e3fc)}mm-sidesheet.azul.right{border-left:1px solid var(--brand_accent_300, #c1e3fc)}mm-sidesheet.azul.top{border-bottom:1px solid var(--brand_accent_300, #c1e3fc)}mm-sidesheet.azul.bottom{border-top:1px solid var(--brand_accent_300, #c1e3fc)}mm-sidesheet.gris{background:var(--grey_100, #f9f9f9)}mm-sidesheet.gris.left{border-right:1px solid var(--grey_500, #ccc)}mm-sidesheet.gris.right{border-left:1px solid var(--grey_500, #ccc)}mm-sidesheet.gris.top{border-bottom:1px solid var(--grey_500, #ccc)}mm-sidesheet.gris.bottom{border-top:1px solid var(--grey_500, #ccc)}mm-sidesheet.blanco{background:var(--full_white, #fff)}mm-sidesheet.blanco.left{border-right:1px solid var(--grey_400, #dfe1e2)}mm-sidesheet.blanco.right{border-left:1px solid var(--grey_400, #dfe1e2)}mm-sidesheet.blanco.top{border-bottom:1px solid var(--grey_400, #dfe1e2)}mm-sidesheet.blanco.bottom{border-top:1px solid var(--grey_400, #dfe1e2)}mm-sidesheet.top{left:0;width:100%;transform:translateY(-100%)}mm-sidesheet.bottom{left:0;top:auto;bottom:0;width:100%;transform:translateY(100%)}mm-sidesheet.left{left:0;transform:translateX(-100%)}mm-sidesheet.right{right:0;transform:translateX(100%)}mm-sidesheet.show{transform:translateX(0);transition:transform 0.8s ease}mm-sidesheet.hidden{transition:transform 0.8s ease}mm-sidesheet .close-btn{align-self:flex-end;cursor:pointer;width:10px;margin:10px}mm-sidesheet .sidesheet-content{overflow-y:scroll;padding:0 20px;box-sizing:border-box;margin-right:8px;margin-bottom:20px}mm-sidesheet .sidesheet-content::-webkit-scrollbar{width:13px}mm-sidesheet .sidesheet-content::-webkit-scrollbar-track{box-shadow:inset 0 0 13px 13px var(--grey_200, #f2f2f2);border:solid 4px transparent}mm-sidesheet .sidesheet-content::-webkit-scrollbar-track:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-sidesheet .sidesheet-content::-webkit-scrollbar-thumb{box-shadow:inset 0 0 13px 13px var(--grey_800, #61616a);border:solid 4px transparent;border-radius:13px}mm-sidesheet .sidesheet-content::-webkit-scrollbar-thumb:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-sidesheet .sidesheet-content::-webkit-scrollbar-button{display:none}mm-sidesheet .sidesheet-content::-webkit-scrollbar{background-color:initial}@media screen and (min-width: 992px){mm-sidesheet.right.size_25,mm-sidesheet.left.size_25{width:25vw;height:100vh}mm-sidesheet.right.size_33,mm-sidesheet.left.size_33{width:33vw;height:100vh}mm-sidesheet.right.size_50,mm-sidesheet.left.size_50{width:50vw;height:100vh}mm-sidesheet.top.size_25,mm-sidesheet.bottom.size_25{height:25vh}mm-sidesheet.top.size_33,mm-sidesheet.bottom.size_33{height:33vh}mm-sidesheet.top.size_50,mm-sidesheet.bottom.size_50{height:50vh}}";export{d as mm_sidesheet}