import{r as e,h as a,H as t}from"./p-44118c4f.js";const n=class{constructor(a){e(this,a),this.name="",this.logo="",this.href="/"}render(){return a(t,{class:"mm-app-launcher-item"},a("a",{href:this.href,target:"_blank",rel:"nofollow noopener noreferrer",title:this.name},this.logo&&this.app&&a("mm-icon",{name:this.logo,size:"24"}),this.app?a("span",null,this.name):this.name))}};n.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-app-launcher-item{display:block}mm-app-launcher-item[app]{cursor:pointer;min-width:50%;box-sizing:border-box}mm-app-launcher-item[app]:hover{background:var(--grey_300, #e9ecf0)}mm-app-launcher-item[app] a{min-height:40px;padding:10px;display:flex;flex-direction:column;align-items:center;box-sizing:border-box}@media screen and (max-width: 992px){mm-app-launcher-item[app] a{text-decoration:none;color:var(--grey_800, #61616a);flex-direction:row;padding:1rem;height:3.125rem;min-height:auto}mm-app-launcher-item[app] a mm-icon{margin-right:10px}}mm-app-launcher-item:not([app]){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}mm-app-launcher-item:not([app]) a{display:block;cursor:pointer;color:var(--grey_800, #61616a);padding:9px 5px;font-family:"OpenSans-Semibold";font-size:12px;width:100%;min-height:1.875rem;text-decoration:none;box-sizing:border-box}mm-app-launcher-item:not([app]) a:hover{background:var(--grey_300, #e9ecf0)}';export{n as mm_app_launcher_item}