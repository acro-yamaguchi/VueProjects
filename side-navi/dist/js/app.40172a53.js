(function(t){function e(e){for(var a,n,l=e[0],i=e[1],c=e[2],u=0,f=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);v&&v(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var l=r[n];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5380cf78"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"07ff601c"}[t]+".css",o=i.p+a,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],v.parentNode.removeChild(v),r(s)},v.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(v)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var v=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{staticClass:"pt-6",attrs:{app:"",color:"grey lighten-3",permanent:"",width:"65px"}},[r("v-btn",{staticClass:"ml-1 mb-9",attrs:{fab:"",dark:"",color:"blue-grey darken-3",to:"/"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v(" mdi-home-circle-outline ")])],1),r("v-btn",{staticClass:"ml-1 mb-9",attrs:{fab:"",dark:"",color:"blue-grey darken-3",to:"/about"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v(" mdi-information ")])],1),r("v-btn",{staticClass:"ml-1 mb-9",attrs:{fab:"",dark:"",color:"blue-grey darken-3",to:"/time"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v(" mdi-clock-time-three-outline ")])],1),r("v-btn",{staticClass:"ml-1 mb-9",attrs:{fab:"",dark:"",color:"blue-grey darken-3",to:"/menu"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v(" mdi-menu-open ")])],1)],1),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1)],1)},o=[],s={name:"App",data:function(){return{}}},l=s,i=r("2877"),c=r("6544"),u=r.n(c),f=r("7496"),v=r("8336"),h=r("a523"),m=r("132d"),p=r("f6c4"),d=r("f774"),b=Object(i["a"])(l,n,o,!1,null,null,null),g=b.exports;u()(b,{VApp:f["a"],VBtn:v["a"],VContainer:h["a"],VIcon:m["a"],VMain:p["a"],VNavigationDrawer:d["a"]});r("d3b7"),r("3ca3"),r("ddb0");var y=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("hello-world")},w=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},C=[],k={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},j=k,V=r("62ad"),z=r("adda"),M=r("0fd9"),E=Object(i["a"])(j,x,C,!1,null,null,null),O=E.exports;u()(E,{VCol:V["a"],VContainer:h["a"],VImg:z["a"],VRow:M["a"]});var A={name:"Home",components:{HelloWorld:O}},L=A,F=Object(i["a"])(L,_,w,!1,null,null,null),P=F.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("svg",{staticClass:"h-8 w-auto text-gray-700 sm:h-20",attrs:{viewBox:"0 0 651 192",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{"clip-path":"url(#clip0)",fill:"#EF3B2D"}},[r("path",{attrs:{d:"M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z"}})])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/mypage",color:"#651FFF"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-account-circle")]),r("p",{staticClass:"menu_text"},[t._v("マイページ")])],1)],1),r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/login",color:"#1A237E"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-login")]),r("p",{staticClass:"menu_text"},[t._v("ログイン")])],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/exercisepage",color:"#37474F"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-book-open-outline")]),r("p",{staticClass:"menu_text"},[t._v("演習")])],1)],1),r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/testpage",color:"#37474F"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-book-open-outline")]),r("p",{staticClass:"menu_text"},[t._v("模擬試験")])],1)],1)],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/exerciseendpage",color:"#F50057"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-file-document")]),r("p",{staticClass:"menu_text"},[t._v("演習終了")])],1)],1),r("v-col",{attrs:{cols:"5"}},[r("v-btn",{staticClass:"btn",attrs:{height:"100",elevation:"5",large:"",block:"",href:"/pretestend",color:"#F50057"}},[r("v-icon",{attrs:{"x-large":"",color:"#fff"}},[t._v("mdi-file-document")]),r("p",{staticClass:"menu_text"},[t._v("模擬試験終了")])],1)],1)],1)],1)},T=[],N=(r("f2d1"),{}),B=Object(i["a"])(N,S,T,!1,null,null,null),D=B.exports;u()(B,{VBtn:v["a"],VCol:V["a"],VContainer:h["a"],VIcon:m["a"],VRow:M["a"]}),a["a"].use(y["a"]);var q=[{path:"/",name:"Home",component:P},{path:"/menu",name:"Menu",component:D},{path:"/time",name:"Time",component:function(){return r.e("about").then(r.bind(null,"3e51"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],H=new y["a"]({routes:q}),I=H,$=r("f309");a["a"].use($["a"]);var W=new $["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:I,vuetify:W,render:function(t){return t(g)}}).$mount("#app")},7726:function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"},f2d1:function(t,e,r){"use strict";r("7726")}});
//# sourceMappingURL=app.40172a53.js.map