(function(t){function a(a){for(var i,r,l=a[0],c=a[1],o=a[2],v=0,u=[];v<l.length;v++)r=l[v],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(a);while(u.length)u.shift()();return e.push.apply(e,o||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],i=!0,l=1;l<s.length;l++){var c=s[l];0!==n[c]&&(i=!1)}i&&(e.splice(a--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},e=[];function r(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(s,i,function(a){return t[a]}.bind(null,i));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var d=c;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("header",[s("div",{staticClass:"container py-5"},[s("nav",{staticClass:"navbar navbar-expand-sm"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"33","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[s("path",{attrs:{fill:"#34313D",d:"M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34 3.74 3.74 0 001.24-.952 4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204a7.7 7.7 0 001.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748a12.41 12.41 0 01-2.482.272c-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506a7.95 7.95 0 001.275.34 6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"}})])]),t._m(0),t._m(1)])])]),t._m(2),s("section",{staticClass:"urls-section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row d-flex justify-content-center shorten-it"},[s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toShorten,expression:"toShorten"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Shorten a link here..."},domProps:{value:t.toShorten},on:{input:function(a){a.target.composing||(t.toShorten=a.target.value)}}})]),s("div",{staticClass:"col-2"},[s("a",{staticClass:"btn btn-block bold",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.shortenUrl(t.toShorten)}}},[t._v("Shorten It!")])])]),t._l(t.links,(function(a){return s("div",{key:a.hashid,staticClass:"row shortened"},[s("div",{staticClass:"col-7 d-flex align-items-center"},[t._v(" "+t._s(a.originalUrl)+" ")]),s("div",{staticClass:"col-3 d-flex align-items-center"},[t._v(" "+t._s(a.shortenedUrl)+" ")]),s("div",{staticClass:"col-2 "},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.shortenedUrl,expression:"link.shortenedUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.handleCopyStatus(!0),expression:"handleCopyStatus(true)",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.handleCopyStatus(!1),expression:"handleCopyStatus(false)",arg:"error"}],staticClass:"btn btn-block"},[t._v(" Copy ")])])])}))],2)]),t._m(3),t._m(4),s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"33","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[s("path",{attrs:{fill:"#34313D",d:"M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34 3.74 3.74 0 001.24-.952 4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204a7.7 7.7 0 001.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748a12.41 12.41 0 01-2.482.272c-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506a7.95 7.95 0 001.275.34 6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"}})])]),t._m(5)])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-links","aria-controls":"navigation-links","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navigation-links"}},[s("ul",{staticClass:"navbar-nav mr-auto pl-5"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Features "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Pricing")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Resources")])])]),s("ul",{staticClass:"login-signup navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Login")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link btn rounded bold",attrs:{href:"javascript:void(0)"}},[t._v("Sign Up")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"landing-section"},[s("div",{staticClass:"container d-flex align-items-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("h1",{staticClass:"bold "},[t._v("More than just "),s("br"),t._v("shorter links")]),s("p",[t._v(" Build your brand’s recognition and get detailed insights on how your links are performing. ")]),s("a",{staticClass:"btn bold rounded",attrs:{href:"#"}},[t._v(" Get Started")])]),s("div",{staticClass:"col-4"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"statistics-section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title-area"},[s("h2",[t._v("Advanced Statistics")]),s("p",[t._v(" Track how your links are performing across the web with our advanced statistics dashboard. ")])]),s("div",{staticClass:"stat-cards-wrapper"},[s("hr"),s("div",{staticClass:"row stat-cards"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{alt:"brand recognition"}}),s("div",{staticClass:"card-body"},[s("h4",[t._v("Brand Recognition")]),s("p",{staticClass:"card-text"},[t._v(" Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. ")])])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{alt:"brand recognition"}}),s("div",{staticClass:"card-body"},[s("h4",[t._v("Brand Recognition")]),s("p",{staticClass:"card-text"},[t._v(" Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. ")])])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{alt:"brand recognition"}}),s("div",{staticClass:"card-body"},[s("h4",[t._v("Brand Recognition")]),s("p",{staticClass:"card-text"},[t._v(" Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. ")])])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"footer-banner"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h4",[t._v("Boost your links today")]),s("a",{staticClass:"btn rounded bold",attrs:{href:""}},[t._v("Get Started")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h6",[t._v("Features")]),s("ul",{staticClass:"list-unstyled"},[s("li",[t._v("Link Sharing")]),s("li",[t._v("Branded Links")]),s("li",[t._v("Analytics")])])]),s("div",{staticClass:"col"},[s("h6",[t._v("Resources")]),s("ul",{staticClass:"list-unstyled"},[s("li",[t._v("Blog")]),s("li",[t._v("Developers")]),s("li",[t._v("Support")])])]),s("div",{staticClass:"col"},[s("h6",[t._v("Company")]),s("ul",{staticClass:"list-unstyled"},[s("li",[t._v("About")]),s("li",[t._v("Our Team")]),s("li",[t._v("Careers")]),s("li",[t._v("Contact")])])])])]),s("div",{staticClass:"col-4"},[s("ul",{staticClass:"list-inline"},[s("li",[t._v("facebook")]),s("li",[t._v("twitter")]),s("li",[t._v("pinterest")]),s("li",[t._v("instagram")])])])])])}],r=(s("4de4"),s("bc3a")),l=s.n(r),c={name:"app",components:{},data:function(){return{$_relinkUrl:"https://rel.ink/api/links/",$_relinkBase:"https://rel.ink/",toShorten:"",links:[]}},methods:{shortenUrl:function(t){var a=this;this.isUrl(t)&&l()({url:"https://rel.ink/api/links/",method:"post",headers:{"Content-Type":"application/json"},data:{url:t}}).then((function(t){var s=t.data.hashid,i=t.data.url,n="https://rel.ink/"+s;a.addLink({hashid:s,originalUrl:i,shortenedUrl:n})}))},addLink:function(t){var a=this.links.filter((function(a){return a.hashid==t.hashid}));0==a.length?(this.links.push(t),localStorage.appLinks=JSON.stringify(this.links),window.console.log(localStorage.appLinks),this.toShorten=""):(window.console.log("link already existsts. Please enter new link"),this.toShorten="")},isUrl:function(t){var a=/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;return!!a.test(t)},handleCopyStatus:function(t){window.console.log(t)}},mounted:function(){localStorage.appLinks&&(this.links=JSON.parse(localStorage.appLinks))}},o=c,d=(s("5c0b"),s("2877")),v=Object(d["a"])(o,n,e,!1,null,null,null),u=v.exports,h=s("4eb5"),p=s.n(h),f=(s("4989"),s("21b6"),s("77ed"),s("6570"),s("ecee")),C=s("c074");f["a"].add(C["b"],C["a"]),i["a"].config.productionTip=!1,i["a"].use(p.a),new i["a"]({render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var i=s("f431"),n=s.n(i);n.a},6570:function(t,a,s){},f431:function(t,a,s){}});
//# sourceMappingURL=app.da5cf9eb.js.map