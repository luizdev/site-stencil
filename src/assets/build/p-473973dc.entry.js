import{r as e,h as t,g as a}from"./p-44118c4f.js";import"./p-acc16ed7.js";import{b as i,g as s}from"./p-54bbcf8c.js";const n=class{constructor(t){e(this,t),this.mapIsReady=!1,this.url_assets=`${i()}${s()}/assets/icon/`}watchHandler(){this.checkPosition(),this.initMap()}render(){return t("div",{class:"mm-map-container"},t("div",{id:"map"}))}componentWillLoad(){if(this.channel)if("object"==typeof google&&"object"==typeof google.maps)this.mapIsReady=!0;else{const e=document.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?client=gme-mutuamadrilenaautomovilista&v=3&channel=${this.channel}&libraries=places,geometry`,e.async=!0,e.defer=!0,e.addEventListener("load",(()=>{this.mapIsReady=!0})),document.body.appendChild(e)}else console.log("mm-map -> El parametro channel es obligatorio")}componentDidLoad(){this.checkPosition(),this.mapIsReady&&this.initMap()}componentDidUpdate(){this.checkPosition(),this.mapIsReady&&this.initMap()}checkPosition(){this.isEmptyObj(this.position)||(this.formatPosition={lat:parseFloat(""+this.position.lat),lng:parseFloat(""+this.position.lng)})}initMap(){this.isEmptyObj(this.formatPosition)||(this.mapIsReady=!1),this.map=new google.maps.Map(this.mapElement.querySelector("#map"),{center:this.formatPosition,zoom:16,styles:[{featureType:"administrative",elementType:"labels",stylers:[{color:"#2a9dde"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{color:"#2a9dde"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#d4ecf6"}]}]}),new google.maps.Marker({position:this.formatPosition,map:this.map,icon:this.url_assets+"ico_house.svg"})}isEmptyObj(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}get mapElement(){return a(this)}static get watchers(){return{position:["watchHandler"]}}};n.style=":root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-map{min-width:calc(100vw - 1rem) !important;min-height:60vh;width:100%;height:inherit;width:inherit;display:block}mm-map .mm-map-container{height:inherit;width:inherit}mm-map .mm-map-container>div{height:inherit;width:inherit}@media screen and (min-width: 992px){mm-map{width:800px;min-width:auto !important;min-height:auto}}";export{n as mm_map}