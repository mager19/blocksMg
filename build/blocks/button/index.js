(()=>{"use strict";var e,t={3775:()=>{const e=window.React,t=window.wp.blocks,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components;var r;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},a.apply(this,arguments)}var i=function(t){return e.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},t),r||(r=e.createElement("path",{d:"M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293z"})))};const c=JSON.parse('{"u2":"blocksmg/button"}');(0,t.registerBlockType)(c.u2,{edit:function(t){const{attributes:r,setAttributes:a}=t,{buttonText:c,buttonLink:s,borderRadius:u,buttonSize:g,icon:d,iconPosition:b}=r,m=(0,n.useBlockProps)({className:`relative bMg-button ${u?"bMg-button-rounded":""} ${g?`bMg-button-${g}`:""}`,style:{backgroundColor:"#5D3587"}}),[p,h]=(0,e.useState)(null);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:"Button Settings",initialOpen:!0,className:"panel-body-class"},(0,e.createElement)(o.PanelRow,null,(0,e.createElement)("div",{style:{flex:1}},(0,e.createElement)(o.__experimentalInputControl,{label:(0,l.__)("Url","blocksMg"),labelPosition:"top",value:null!=s?s:"#",onChange:e=>{try{new URL(e),h(null),a({buttonLink:e})}catch(e){h((0,l.__)("Please enter a valid URL. With http:// or https://","blocksMg"))}},help:p,placeholder:(0,l.__)("Enter a URL with http:// or https://","blocksMg")}),(0,e.createElement)(o.__experimentalDimensionControl,{label:"Size",onChange:e=>a({buttonSize:e}),value:g,sizes:[{name:"Xs",slug:"small"},{name:"Md",slug:"medium"},{name:"Lg",slug:"large"}]}),(0,e.createElement)(o.ToggleControl,{label:"Rounded",checked:u,onChange:e=>a({borderRadius:e})}),(0,e.createElement)(o.ToggleControl,{label:"Show Icon",checked:d,onChange:e=>a({icon:e})}),d&&(0,e.createElement)(o.__experimentalToggleGroupControl,{label:"Icon Position",value:b,isBlock:!0,onChange:e=>a({iconPosition:e})},(0,e.createElement)(o.__experimentalToggleGroupControlOption,{value:"left",label:"Left"}),(0,e.createElement)(o.__experimentalToggleGroupControlOption,{value:"right",label:"Right"})))))),(0,e.createElement)("div",{...m},d?"left"==b?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i,{style:{fill:"currentColor"}}),(0,e.createElement)(n.RichText,{placeholder:(0,l.__)("Add text…","blocksMg"),value:null!=c?c:"Add text…",onChange:e=>a({buttonText:e}),rel:"noopener noreferrer",allowedFormats:["core/bold","core/italic"]})):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.RichText,{placeholder:(0,l.__)("Add text…","blocksMg"),value:null!=c?c:"Add text…",onChange:e=>a({buttonText:e}),rel:"noopener noreferrer",allowedFormats:["core/bold","core/italic"]}),(0,e.createElement)(i,{style:{fill:"currentColor"}})):(0,e.createElement)(n.RichText,{placeholder:(0,l.__)("Add text…","blocksMg"),value:null!=c?c:"Add text…",onChange:e=>a({buttonText:e}),rel:"noopener noreferrer",allowedFormats:["core/bold","core/italic"]})))},save:function(){const e=n.useBlockProps.save(),{children:t}=n.useInnerBlocksProps.save(e);return t},icon:(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMiAtMiAyNC4wMCAyNC4wMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjNUQzNTg3IiBzdHJva2U9IiM1RDM1ODciIHN0cm9rZS13aWR0aD0iMC4wMDAyIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHJlY3QgeD0iMCIgZmlsbD0ibm9uZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+IDxnPiA8cGF0aCBkPSJNMTcgNUgzYy0xLjEgMC0yIC45LTIgMnY2YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptMSA3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMVY3YzAtLjYuNC0xIDEtMWgxNGMuNiAwIDEgLjQgMSAxdjV6Ij48L3BhdGg+IDwvZz4gPC9nPjwvc3ZnPgo=",width:24,height:24})})}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,o,r)=>{if(!l){var a=1/0;for(u=0;u<e.length;u++){for(var[l,o,r]=e[u],i=!0,c=0;c<l.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](l[c])))?l.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,o,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={807:0,133:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[a,i,c]=l,s=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(l);s<a.length;s++)r=a[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},l=globalThis.webpackChunkblocksmg=globalThis.webpackChunkblocksmg||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=n.O(void 0,[133],(()=>n(3775)));o=n.O(o)})();