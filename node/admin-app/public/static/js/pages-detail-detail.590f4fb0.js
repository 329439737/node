(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{2960:function(t,n,e){"use strict";var i=e("870b"),s=e.n(i);s.a},"546e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-11ba75df]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .swiper-container[data-v-11ba75df]{width:100%}.content .textcont .title[data-v-11ba75df]{font-weight:400;font-size:19px}.content .textcont .price[data-v-11ba75df]{font-size:16px;color:#c69c6d}.content .textcont .desc[data-v-11ba75df]{text-align:left}',""]),t.exports=n},5899:function(t,n,e){"use strict";e.r(n);var i=e("9799"),s=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=s.a},8578:function(t,n,e){"use strict";e.r(n);var i=e("d309"),s=e("5899");for(var a in s)"default"!==a&&function(t){e.d(n,t,(function(){return s[t]}))}(a);e("2960");var r,c=e("f0c5"),o=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"11ba75df",null,!1,i["a"],r);n["default"]=o.exports},"870b":function(t,n,e){var i=e("546e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("7ae6941d",i,!0,{sourceMap:!1,shadowMode:!1})},9799:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{goods:{},details:{}}},onLoad:function(t){this.goods=this.$store.state.goods[t.index],this.details=this.goods.details[0]}};n.default=i},d309:function(t,n,e){"use strict";var i,s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"swiper-container"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:1e3}},t._l(t.details.swipers,(function(t,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[e("v-uni-image",{attrs:{src:t}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"textcont"},[e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.details.Ename))]),e("v-uni-view",[e("v-uni-text",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.goods.Name))])],1),e("v-uni-text",{staticClass:"price"},[t._v(t._s(t.goods.Price))]),e("v-uni-view",{staticClass:"desc"},t._l(t.details.Describe,(function(n,i){return e("v-uni-view",{key:i},[t._v(t._s(n))])})),1)],1),e("v-uni-view",{staticClass:"imgs"},t._l(t.details.ImgUrls,(function(t,n){return e("v-uni-image",{key:n,attrs:{src:t}})})),1)],1)},a=[];e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))}}]);