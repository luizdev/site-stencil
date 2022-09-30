import{r as t,c as e,h as a,g as i}from"./p-44118c4f.js";import"./p-acc16ed7.js";import{b as s,g as o}from"./p-54bbcf8c.js";import{M as n}from"./p-1973cea7.js";const l={0:"fa fa-gift pink-icon",1:"fa fa-calendar-alt",2:"fa fa-wrench",3:"icon-mm-wheel",4:"icon-mm-wheel",5:"fa fa-car",6:"fas fa-paper-plane",7:"far fa-address-book",8:"fas fa-percent",9:"fa fa-bath",10:"fa fa-car-tool",11:"icon-mm-brand-mutua",12:"far fa-address-book",13:"fa fa-gift",14:"far fa-address-book",15:"far fa-address-book",16:"fas fa-percent",17:"fa fa-car",18:"far fa-address-book",19:"fas fa-percent",20:"far fa-address-book",21:"far fa-address-book",40:"fas fa-tint"},c=class{constructor(a){t(this,a),this.dragEnd=e(this,"dragEnd",7),this.itemSelected=e(this,"itemSelected",7),this.onTableCompleted=e(this,"onTableCompleted",7),this.position={lat:40.440483799999996,lng:-3.7870695},this.locations=[],this.mapIsReady=!1,this.visible=!1,this.$=window.$,this.markers=[],this.url_assets=`${s()}${o()}/assets/icon/`}async setItemSelected(t){this.dataTable.row([t]).select()}render(){return a("div",{class:"mm-locations-container"},a("div",{class:"table-container"},this.renderTable()),a("div",{class:"map-container"},a("div",{id:"map"})))}componentWillLoad(){this.channel||console.log("mm-locations -> El parametro channel es obligatorio")}componentDidLoad(){this.checkGoogleLibrary(),this.table=this.locationsElement.querySelector("mm-listing")}componentDidUpdate(){this.initMap(),this.addMarkers(),this.createClusters(),this.table&&this.$.fn.DataTable&&this.fillTableBody()}checkGoogleLibrary(){if("object"==typeof google&&"object"==typeof google.maps)this.mapIsReady=!0;else{const t=document.createElement("script");t.src=`https://maps.googleapis.com/maps/api/\n                    js?client=gme-mutuamadrilenaautomovilista&v=3&channel=${this.channel}\n                    &libraries=places,geometry`,t.async=!0,t.defer=!0,t.addEventListener("load",(()=>{this.mapIsReady=!0})),document.body.appendChild(t)}}renderTable(){return a("mm-listing",{"check-column":!0,"single-selection":!0,"map-style":!0,class:"mapStyle","items-page":"6"},a("table",{slot:"table"},a("thead",null,a("tr",null,a("th",{class:"name","data-sortable":!0},"Taller"),a("th",{class:"rating","data-type":"html-num","data-sortable":!0}),a("th",{class:"advantages","data-sortable":!0},"información y Ventajas"))),a("tbody",null)),a("slot",null))}fillTableBody(){this.dataTable=this.$("mm-locations table").DataTable(),this.dataTable.clear(),this.locations.forEach(((t,e)=>{this.dataTable.row.add(this.$(`<tr>\n                  <td>&nbsp;</td>\n                  <td class="name">${t.denominacionComercial}</td>\n                  <td class="rating">${this.getStars(t.valoracionACM)}</td>\n                  <td data-sort="${e}" data-order="${e}" class="advantages">\n                    ${this.getAdvantages(t.ventajas)}\n                  </td>\n                </tr>`))})),this.dataTable.draw(),this.dataTable.on("order.dt",(()=>{this.locationsElement.querySelectorAll("mm-tooltip").forEach((t=>t.updatePosition()))})),this.dataTable.off("select").on("select",((t,e,a,i)=>{google.maps.event.trigger(this.markers[i[0]],"click")})),this.dataTable.off("deselect").on("deselect",((t,e,a,i)=>{google.maps.event.trigger(this.markers[i[0]],"click")})),this.onTableCompleted.emit()}getStars(t){let e=t/2,a=`<span class="display-n">${t}</span>`;for(;0<e;e-=1)e<1&&e>0?a+='<i class="fa fa-star-half"></i>':e>=1&&(a+='<i class="fa fa-star"></i>');return a}getAdvantages(t){let e="",a="",i="";return t.forEach((t=>{"G"===t.tipo?e+=`<i class='${l[t.codigo]} '>\n                </i><mm-tooltip position='left'>${t.valor}</mm-tooltip>`:(a+=t.valor+"<br>",i=`<i class='${l[0]} '></i><mm-tooltip position='left'>${a}</mm-tooltip>`)})),`<span class="display-n">${t.length}</span>${e}${i.length?i:""}`}removeTablePrevItem(){const t=this.dataTable.rows(".map-item-selected");t[0].length&&t.nodes().to$().removeClass("selected").removeClass("map-item-selected")}initMap(){this.map=new google.maps.Map(this.locationsElement.querySelector("#map"),{center:this.position,zoom:14,styles:[{featureType:"administrative",elementType:"labels",stylers:[{color:"#2a9dde"}]},{featureType:"administrative",elementType:"labels.text",stylers:[{color:"#2a9dde"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#d4ecf6"}]}]}),this.infoWindow=new google.maps.InfoWindow,google.maps.event.addListener(this.map,"dragend",(()=>{this.dragEnd.emit({lat:this.map.getCenter().lat(),lng:this.map.getCenter().lng()})}))}showComponents(){const t=this.locationsElement.querySelector("#map"),e=this.locationsElement.querySelector(".info-container");t.classList.remove("hide"),e.classList.remove("hide"),this.table.classList.remove("hide")}hideComponents(){const t=this.locationsElement.querySelector("#map"),e=this.locationsElement.querySelector(".info-container");t.classList.add("hide"),e.classList.add("hide"),this.table.classList.add("hide")}addMarkers(){this.deleteMarkers(),this.locations.length&&this.locations.map(((t,e)=>{const a=new google.maps.LatLng(t.geoPosX,t.geoPosY),i=new google.maps.Marker({position:a,icon:this.url_assets+"mark_white.svg"});let s=!1;google.maps.event.addListener(i,"click",(()=>{const t=this.markers.indexOf(i),a=t>-1?t:e,o=this.locations[a];s===i?(this.infoWindow.close(),s=!1,this.itemSelected.emit()):(this.showInfoMarker(a),s=i),this.updateMarkerIcons(a),this.map.panTo(i.getPosition());const n=this.dataTable.rows(".map-item-selected");if(this.removeTablePrevItem(),n[0][0]!==a){const t=`\n              <div class="tooltip-map">\n                <h5 class="title">${o.denominacionComercial}</h5>\n                <div class='bodyContent'>\n                  <p class="text">${o.domicilio} </p>\n                  <small class="grey">Código Establecimiento: ${o.codigoEstablecimiento.toString()}</small>\n                </div>\n              </div>`;google.maps.event.addListener(this.infoWindow,"closeclick",(()=>{google.maps.event.trigger(s,"click")})),this.infoWindow.setContent(t),this.infoWindow.open(this.map,i),this.dataTable.row(a).nodes().to$().addClass("map-item-selected").addClass("selected"),this.moveToPageWithSelectedItem()}})),this.markers.push(i)}))}createClusters(){this.map&&this.markers.length&&(this.markerCluster=new n(this.map,this.markers,{styles:[{textColor:"white",url:this.url_assets+"mark_cluster.svg",height:32,width:32,lineHeight:32}],maxZoom:12}))}setMapOnAll(t){for(var e=0;e<this.markers.length;e+=1)this.markers[e].setMap(t)}clearMarkers(){this.setMapOnAll(null)}showMarkers(){this.setMapOnAll(this.map)}deleteMarkers(){this.clearMarkers(),this.markerCluster&&this.markerCluster.clearMarkers(),this.markers=[]}showInfoMarker(t){this.itemSelected.emit(this.locations[t])}updateMarkerIcons(t){const e=this.markers[t].getIcon();for(var a=0;a<this.markers.length;a+=1)this.markers[a].setIcon(a!==t||e===this.url_assets+"mark_pink.svg"?this.url_assets+"mark_white.svg":this.url_assets+"mark_pink.svg")}moveToPageWithSelectedItem(){var t=this.dataTable.data().length,e=this.dataTable.page.len();if(e<t){var a=this.dataTable.row(".selected").node(),i=this.dataTable.rows({order:"current"}).nodes().indexOf(a),s=Math.floor(i/e);this.dataTable.page(s).draw(!1),this.locationsElement.querySelector("mm-locations mm-pagination").setAttribute("current-page",(s+1).toString())}}isEmptyObj(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}get locationsElement(){return i(this)}};c.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-locations .mm-locations-container{display:flex;max-width:1357px;padding:20px}mm-locations .mm-locations-container .table-total-rows,mm-locations .mm-locations-container .table-header{display:none}mm-locations .mm-locations-container .table-container{position:relative;padding-right:30px}mm-locations .mm-locations-container .table-container #selectPos{position:absolute;right:0;bottom:0}mm-locations .mm-locations-container .table-container .search-container{display:flex;align-items:flex-end}mm-locations .mm-locations-container .table-container .search-container mm-textfield{width:545px;padding-right:30px}mm-locations .mm-locations-container .table-container mm-listing table thead th.name{width:150px}mm-locations .mm-locations-container .table-container mm-listing table thead th.advantages{width:200px}mm-locations .mm-locations-container .table-container mm-listing table thead th.rating{width:80px}mm-locations .mm-locations-container .table-container mm-listing table thead th.single-selection{width:24px;padding:0;margin:0}mm-locations .mm-locations-container .table-container mm-listing table tbody td.name{width:300px}mm-locations .mm-locations-container .table-container mm-listing table tbody td.advantages{width:200px}mm-locations .mm-locations-container .table-container mm-listing table tbody td.advantages i{color:var(--primary_500, #3269b3);cursor:pointer;display:inline-block;font-size:14px;padding:0 2px;position:relative;vertical-align:middle}mm-locations .mm-locations-container .table-container mm-listing table tbody td.advantages mm-tooltip{width:auto}mm-locations .mm-locations-container .table-container mm-listing table tbody td.select-radiobutton{width:12px;text-align:center;padding:10px}mm-locations .mm-locations-container .table-container mm-listing table tbody td.rating{width:80px}mm-locations .mm-locations-container .table-container mm-listing table tbody td.rating i{color:var(--status_warning_500, #ffae33)}mm-locations .mm-locations-container .table-container mm-listing .page-elements-selector{display:none}mm-locations .mm-locations-container .map-container #map{width:565px;height:400px}mm-locations .hide{height:auto;display:none !important}mm-locations .tooltip-map{font-family:"OpenSans"}mm-locations .tooltip-map .title{font-family:"OpenSans-Bold";padding-bottom:10px}mm-locations .tooltip-map .bodyContent{margin:0;font-size:13px}mm-locations .tooltip-map .bodyContent p{margin:0}mm-locations .gm-ui-hover-effect{top:0 !important;right:0 !important}mm-locations .gm-style-iw{border-radius:4px !important}';export{c as mm_locations}