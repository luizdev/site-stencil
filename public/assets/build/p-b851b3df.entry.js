import{r as e,c as r,h as t,g as i}from"./p-44118c4f.js";import{i as a,a as m}from"./p-38a3c8cd.js";const s=class{constructor(t){e(this,t),this.breadcrumbLoaded=r(this,"breadcrumbLoaded",7),this.overflow=!1}handleResize(){this.assignOffsetWidthProperty(),this.removeBreadcrumbListIfIsDesktop(),this.insertBreadcrumbListIfNotIsDesktop(),this.showOrHiddenElements()}render(){return t("slot",null)}componentWillLoad(){this.assignBreadcrumbList()}componentDidLoad(){this.emitHeightEvent(),this.assignResponsiveBreadcrumbs()}assignResponsiveBreadcrumbs(){this.isUlWidthMoreThanWindowWidthAndIsLessThanDesktop()&&(this.insertBreadcrumbListAfterFirstLiOnMainUl(),this.assignOffsetWidthProperty(),this.showOrHiddenElements())}assignBreadcrumbList(){this.breadcrumbList=this.getBreadcrumbList()}assignOffsetWidthProperty(){this.element.style.setProperty("--offset-width",this.getWidthAvailable()+"px"),this.element.style.setProperty("--elements-available",""+this.getElementsAvailableOnAvailableWidth())}emitHeightEvent(){this.breadcrumbLoaded.emit({height:this.element.clientHeight})}insertBreadcrumbListAfterFirstLiOnMainUl(){const e=this.getFirstLiOnMainUl();this.breadcrumbList&&e.insertAdjacentHTML("afterend",this.breadcrumbList)}insertBreadcrumbListIfNotIsDesktop(){this.isMobileAndNotHaveBreadcrumbList()&&this.insertBreadcrumbListAfterFirstLiOnMainUl()}removeBreadcrumbListIfIsDesktop(){this.isDesktopAndHaveBreadcrumbList()&&this.getBreadcrumbListElement().remove()}showOrHiddenElements(){const e=Array.from(this.getBreadcrumbsMainUlLiAfterBreadcrumList()).reverse(),r=this.getElementsAvailableOnAvailableWidth();e.forEach((e=>{e.removeAttribute("style")}));for(let t=0;t<r;t++)e[t].style.display="flex"}getBreadcrumbList(){return`\n      <li breadcrumb-list>\n        <mm-breadcrumb-list>\n          ${this.getBreadcrumbUl()}\n        </mm-breadcrumb-list>\n      </li>`}getBreadcrumbListElement(){return this.element.querySelector("[breadcrumb-list]")}getBreadcrumbMainUl(){return this.element.firstElementChild}getBreadcrumbsMainUlLiAfterBreadcrumList(){return this.element.querySelectorAll("li[breadcrumb-list] ~ li")}getBreadcrumbMainUlWidth(){return this.getBreadcrumbMainUl().clientWidth}getBreadcrumbUl(){return this.getBreadcrumbMainUl().outerHTML}getElementsAvailableOnAvailableWidth(){return this.isElementsAvailableMoreThanLiItemsAfterList()?this.getBreadcrumbsMainUlLiAfterBreadcrumList().length:Math.round(this.getWidthAvailable()/100)}getFirstLiOnMainUl(){return this.getBreadcrumbMainUl().firstElementChild}getFirstLiOnMainUlTotalWidth(){return this.getFirstLiOnMainUl().offsetWidth+this.getFirstLiOnMainUl().offsetLeft}getListWidthProperty(){return 16*parseFloat(getComputedStyle(this.element).getPropertyValue("--list-width").split("rem")[0])}getWidthAvailable(){return window.innerWidth-(this.getFirstLiOnMainUlTotalWidth()+this.getListWidthProperty())}isElementsAvailableMoreThanLiItemsAfterList(){return Math.round(this.getWidthAvailable()/100)>this.getBreadcrumbsMainUlLiAfterBreadcrumList().length}isMobileAndNotHaveBreadcrumbList(){return a()&&null===this.getBreadcrumbListElement()}isDesktopAndHaveBreadcrumbList(){return m()&&null!==this.getBreadcrumbListElement()}isUlWidthMoreThanWindowWidth(){return this.getBreadcrumbMainUlWidth()>window.innerWidth}isUlWidthMoreThanWindowWidthAndIsLessThanDesktop(){return this.isUlWidthMoreThanWindowWidth()&&a()}get element(){return i(this)}};s.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-breadcrumb{--list-width:3.5625rem;--list-height:1.875rem;--list-height--lg:2.5rem;display:flex;align-items:center;justify-content:space-between;flex-direction:row;background-color:var(--full_white, #fff);box-shadow:1px 1px 0 0 rgba(0, 0, 0, 0.2);box-sizing:border-box;overflow:hidden;width:100%}mm-breadcrumb>ul>li[breadcrumb-list]~li{display:none;max-width:calc(var(--offset-width) / var(--elements-available));width:calc(var(--offset-width) / var(--elements-available))}mm-breadcrumb>ul{display:flex;align-content:center;border:0;font-size:100%;list-style:none;margin:0;padding:0.625rem;vertical-align:baseline}mm-breadcrumb>ul>li{font-family:"OpenSans-SemiBold";display:flex;align-items:center;color:var(--grey_750, #73757b);font-size:0.75rem;line-height:0.9rem;list-style:none;border:0;margin:0;padding:0 5px;vertical-align:baseline;box-sizing:border-box}mm-breadcrumb>ul>li a:visited:hover{color:initial}mm-breadcrumb>ul>li a,mm-breadcrumb>ul>li>span{font-family:"OpenSans-SemiBold";color:inherit;font-size:0.75rem;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mm-breadcrumb>ul>li a:hover,mm-breadcrumb>ul>li>span:hover{color:var(--full_black, #000)}mm-breadcrumb>ul>li:not(:first-child):before{font-family:"fontawesome-solid";content:"\\f054";display:block;position:relative;color:var(--grey_750, #73757b);font-size:10px;padding-right:9px}mm-breadcrumb>ul>li:last-child{color:var(--full_black, #000) !important}mm-breadcrumb,mm-breadcrumb>ul{max-height:var(--list-height);height:var(--list-height);padding:0}mm-breadcrumb .indicator{margin-right:10px !important}@media screen and (min-width: 992px){mm-breadcrumb{overflow:inherit;max-height:none;padding-left:1rem}mm-breadcrumb ul{flex-wrap:wrap}mm-breadcrumb ul.wrapped{height:60px}mm-breadcrumb,mm-breadcrumb>ul{max-height:var(--list-height--lg);height:var(--list-height--lg)}}@media screen and (min-width: 1950px){mm-breadcrumb{padding-left:0}mm-breadcrumb ul{width:100%;max-width:1920px;margin:auto}}mm-breadcrumb mm-button-dropdown mm-button button.support{background-color:var(--full_white, #fff);border-bottom:0;border-radius:0;border-top:0;box-shadow:none;text-align:left}mm-breadcrumb.dev>ul>li:not(last-child),mm-breadcrumb.acp>ul>li:not(last-child),mm-breadcrumb.prf>ul>li:not(last-child){color:var(--grey_200, #f2f2f2)}mm-breadcrumb.dev>ul>li:before,mm-breadcrumb.acp>ul>li:before,mm-breadcrumb.prf>ul>li:before{color:var(--grey_200, #f2f2f2)}mm-breadcrumb.dev>ul>li a:hover,mm-breadcrumb.acp>ul>li a:hover,mm-breadcrumb.prf>ul>li a:hover{color:var(--full_white, #fff)}mm-breadcrumb.dev{background-color:var(--enviroment_dev, #f118a7)}mm-breadcrumb.dev a:visited,mm-breadcrumb.dev a:hover{color:inherit}mm-breadcrumb.acp{background-color:var(--enviroment_acp, #68d568)}mm-breadcrumb.acp a:visited,mm-breadcrumb.acp a:hover{color:inherit}mm-breadcrumb.prf{background-color:var(--enviroment_prf, #7cc3f4)}mm-breadcrumb.prf a:visited,mm-breadcrumb.prf a:hover{color:inherit}mm-breadcrumb.uat{background-color:var(--enviroment_uat, #ffd400)}mm-breadcrumb.uat a:visited,mm-breadcrumb.uat a:hover{color:inherit}';export{s as mm_breadcrumb}