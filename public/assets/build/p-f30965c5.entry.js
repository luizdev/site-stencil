import{r as a,h as e}from"./p-44118c4f.js";const t=class{constructor(e){a(this,e),this.items=[],this.label=""}render(){return e("div",{class:"available-container"},e("span",{class:"label"},this.label),e("div",{class:"gaps"},this.renderItems()))}renderItems(){const a=[];return this.items&&this.items.forEach((t=>{a.push(e("div",{class:"gap "+(this.selected===t&&"selected"),onClick:()=>this.selectGap(t)},t))})),a}selectGap(a){this.selected=a}};t.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-available{width:510px}mm-available .available-container .label{font-family:"OpenSans-SemiBold";color:var(--grey_800, #61616a);font-size:12px;text-transform:uppercase;padding-bottom:8px}mm-available .available-container .gaps{margin:20px 0;max-height:341px;overflow-y:auto;}mm-available .available-container .gaps .gap{font-family:"OpenSans";border:1px solid var(--grey_300, #e9ecf0);color:var(--grey_800, #61616a);cursor:pointer;display:inline-block;font-size:12px;height:40px;line-height:40px;margin:4px;text-align:center;width:60px}mm-available .available-container .gaps .gap:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.247059)}mm-available .available-container .gaps .gap.selected{background:var(--primary_500, #3269b3);border:1px solid var(--primary_500, #3269b3);box-shadow:0 3px 6px rgba(0, 0, 0, 0.247059);color:var(--full_white, #fff)}mm-available .available-container .gaps::-webkit-scrollbar{width:13px}mm-available .available-container .gaps::-webkit-scrollbar-track{box-shadow:inset 0 0 13px 13px var(--grey_200, #f2f2f2);border:solid 4px transparent}mm-available .available-container .gaps::-webkit-scrollbar-track:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-available .available-container .gaps::-webkit-scrollbar-thumb{box-shadow:inset 0 0 13px 13px var(--grey_800, #61616a);border:solid 4px transparent;border-radius:13px}mm-available .available-container .gaps::-webkit-scrollbar-thumb:horizontal{border-top:solid 6px transparent;border-bottom:solid 3px transparent}mm-available .available-container .gaps::-webkit-scrollbar-button{display:none}';export{t as mm_available}