import{r as e,g as t}from"./p-44118c4f.js";const a=class{constructor(t){e(this,t)}render(){return null}componentDidLoad(){this.addEventClickOnCheckbox(),this.addIconOnLabel()}componentDidRender(){this.assignDataSearchItems()}assignDataSearchItems(){this.treeItemElement.getAttribute("data-search")||this.treeItemElement.setAttribute("data-search",this.treeItemElement.innerText.trim())}addIconOnLabel(){const e=this.treeItemElement.querySelector("label"),t=document.createElement("I");t.classList.add("fas"),t.classList.add("far"),t.classList.add(this.getMapIcon()),e&&e.insertAdjacentElement("afterbegin",t)}addEventClickOnCheckbox(){const e=this.treeItemElement.querySelector("mm-checkbox");e&&e.addEventListener("click",this.onClickCheckBox.bind(this))}getMapIcon(){let e="fa-file";switch(this.extension){case"pdf":e="fa-file-pdf";break;case"xls":case"xlsx":e="fa-file-excel";break;case"zip":case"rar":case"7z":e="fa-file-archive";break;case"doc":case"docx":e="fa-file-word";break;case"jpg":case"png":case"gif":e="fa-file-image";break;case"ppt":case"pptx":e="fa-file-powerpoint"}return e}onClickCheckBox(){const e=this.treeItemElement.parentElement;e.checkTree(e)}get treeItemElement(){return t(this)}};a.style=':root{--grey_050:#fcfcfa;--grey_100:#f9f9f9;--grey_200:#f2f2f2;--grey_300:#e9ecf0;--grey_400:#dfe1e2;--grey_500:#ccc;--grey_600:#a0aab5;--grey_700:#89858e;--grey_750:#73757b;--grey_800:#61616a;--grey_900:#55494c;--grey_950:#2a2425;--brand_accent_100:#f2fafd;--brand_accent_200:#e3f2fd;--brand_accent_300:#c1e3fc;--brand_accent_500:#00a4e3;--brand_accent_750:#0068a3;--brand_accent_800:#004a93;--primary_500:#3269b3;--primary_900:#283c57;--full_white:#fff;--full_black:#000;--action_300:#e56aa8;--action_500:#c9337d;--action_800:#750e70;--action_900:#440d7f;--status_critical_100:#fcded4;--status_critical_500:#d62c42;--status_critical_800:#660837;--status_warning_100:#fff2d6;--status_warning_500:#ffae33;--status_warning_800:#66380f;--status_success_100:#e6f8e0;--status_success_500:#42804a;--status_success_800:#0c3d25;--status_info_100:#e5fafe;--status_info_500:#7cc3f4;--status_info_800:#004a93;--client_platinium:#625951;--client_gold_500:#e0af31;--client_gold_800:#66380f;--client_basic:#3269b3;--client_hogar:#ffffff;--enviroment_dev:#f118a7;--enviroment_acp:#68d568;--enviroment_prf:#7cc3f4;--enviroment_uat:#ffd400;--segmentoa_500:#7aebb7;--segmentoa_800:#006060;--segmentob_500:#9ad7ff;--segmentob_800:#3a539b;--segmentoc_500:#e38b63;--segmentoc_800:#600000;--segmentod_500:#d999f2;--segmentod_800:#561b8d;--cca_500:#f2bf2e;--cca_800:#ff6e33}mm-tree-item{clear:both;line-height:40px;list-style:none;margin:0;padding:0;position:relative}mm-tree-item:before{content:"";display:block;position:absolute;margin:0;padding:0}mm-tree-item:not(:first-child){border-left:1px solid var(--grey_950, #2a2425);display:none;margin-left:5px;padding-left:30px}mm-tree-item:not(:first-child):before{content:"";display:block;position:absolute;border-bottom:1px solid var(--grey_950, #2a2425);height:40px;left:0;margin-top:-5px;width:30px}mm-tree-item:not([style=display]){border-left:unset}mm-tree-item:not([style=display]):before{border-left:1px solid #2a2425}mm-tree-item i{margin-right:10px;cursor:pointer}mm-tree-item i.fa-minus-square,mm-tree-item i.fa-plus-square{color:var(--primary_500, #3269b3);position:relative;top:13px}mm-tree-item i.simple-tree{position:relative;top:13px}mm-tree-item mm-checkbox{position:relative;top:13px}mm-tree-item mm-checkbox label{width:100%}mm-tree-item>label{position:relative;font-size:14px;top:13px}';export{a as mm_tree_item}