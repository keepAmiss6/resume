(function(){"use strict";var t={2269:function(t,e,s){var a=s(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("resumePage",{attrs:{id:"printResume"}}),e("el-button",{directives:[{name:"print",rawName:"v-print",value:"#printResume",expression:"'#printResume'"}],attrs:{type:"primary"}},[t._v("打印该简历")])],1)},r=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"top"},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("div",{staticStyle:{padding:"20px",display:"flex"}},[e("img",{staticStyle:{width:"40px",height:"40px","border-radius":"65px",border:"1px solid #E8E8E8"},attrs:{src:s(2474),alt:""}}),e("p",{},[t._v("张燕 | web前端开发工程师")])])]),e("div",{staticClass:"text item"},[e("div",{staticStyle:{"text-align":"left"}},[e("div",[e("i",{staticClass:"el-icon-user left-icon"}),e("span",[t._v("1995年9月")])]),e("div",[e("i",{staticClass:"el-icon-location-information left-icon"}),e("span",[t._v("北京")])]),e("div",[e("i",{staticClass:"el-icon-phone-outline left-icon"}),e("span",[t._v("1510108xxxx")])]),e("div",[e("i",{staticClass:"el-icon-message left-icon"}),e("span",[t._v("keepamiss@163.com")])]),e("div",[e("img",{staticStyle:{width:"16px",height:"16px","border-radius":"50%"},attrs:{src:s(4394)}}),e("span",[t._v("https://github.com/keepAmiss6")])])])])]),e("div",{staticClass:"bottom"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("工作经历")])]),e("el-table",{attrs:{data:t.tableData,"show-header":!1}},[e("el-table-column",{attrs:{prop:"name",label:"公司/学校"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticClass:"litter-img",attrs:{src:s(7739)}}),t._v(t._s(a.row.name)+" ")]}}])}),e("el-table-column",{attrs:{prop:"postion",label:"岗位"}}),e("el-table-column",{attrs:{prop:"date",label:"时间"}})],1)],1),e("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("专业技能")])]),e("el-table",{attrs:{data:t.skill,"show-header":!1}},[e("el-table-column",{attrs:{type:"index",width:"40"}}),e("el-table-column",{attrs:{prop:"item",label:"岗位"}})],1)],1),e("section",[e("h2",[t._v("项目经历")]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"title"},[t._v("项目一：施工算量企业服务")]),e("span",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("2023年02月 - 至今")])]),e("div",{staticClass:"text item"},[e("p",[t._v("施工算量企业服务系统是通过帮助客户建立企业数字化标准和规则，建立全场景数字化工程量计算和管控的能力， 帮助客户进行项目精细化管理，为每个项目创造工程量收益。")]),e("p",[e("strong",{staticClass:"title"},[t._v("技术选型")]),t._v("：Vue、Element UI、Webpack、Scss、Qiankun")]),e("strong",[t._v("项目成果和亮点：")]),e("div",{staticClass:"result"},[e("p",[t._v(" 基于elementUi封装了81个业务组件，其中20个具备较高的复杂性，列如表单套表格组件、表格套表格组件、二开表格等。")]),e("p",[t._v("首屏渲染时间在wifi与4g网速下300ms以内打开，在低速网下1s以内渲染完成，lighthouse评分90。")]),e("p",[t._v("识别系统存在的业务、技术漏洞，并把漏洞点全部补齐，提高了系统的安全性和用户体验。")]),e("p",[t._v(" 持续维护了通俗易懂的开发文档，使用UML加入流程图、用例图等图列，对专业术语简称进行额外说明、重要部分提供伪代码、采用由总到分的表达结构")])])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"title"},[t._v("项目二：项目协同重构")]),e("span",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("2022年01月 - 2022年12月")])]),e("div",{staticClass:"text item"},[e("p",[t._v(" 【云协同】项目是为企业客户提供高效联动的协同建模算量解决方案，对多个项目进行管理，数据分析等工作，为客户缩短周期，提高效率，控制算量成本。该项目是一个历史项目，首页存在严重的效率问题。")]),e("p",[e("strong",[t._v("技术选型")]),t._v("：Vue、Jenkins")]),e("strong",[t._v("项目成果和亮点：")]),e("div",{staticClass:"result"},[e("p",[t._v("屏渲染速度得到极大提升，在4g与wifi网速下首屏展示由4s提升到500ms，3g网速下1s内打开。")]),e("p",[t._v(" 基于webpack重构该项目，解决样式污染问题，实现了模块化管理，打包体积由原来的20M减小到10M，提高了开发体验，减少开发成本。")]),e("p",[t._v(" 为该项目加入自动化部署，部署时间由原来的10分钟减少到3s，避免了手工操作的出错情况，极大地提高了部署效率。")]),e("p",[t._v("解决git效率问题，项目拉取、提交速度由原来的5s减少到1s完成，提高开发体验。")])])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"title"},[t._v("项目三：Relax服务系统（pc端&手机端）")]),e("span",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("2017年07月 - 2021年09月")])]),e("div",{staticClass:"text item"},[e("p",[t._v("Relax是一个面向政府、医疗、教育等不同企业的B端全流程处理系统，可以帮助企业进行事务处理、资产管理、人 员管理、分析决策等")]),e("div",{staticClass:"flex-space"},[e("strong",[t._v("手机端")]),e("strong",[t._v("2020年 - 2021年")])]),e("p",[e("strong",[t._v("技术选型")]),t._v("：react、react-redux、redux-saga、react-hooks")]),e("strong",[t._v("项目成果和亮点：")]),e("div",{staticClass:"result",staticStyle:{"margin-bottom":"20px"}},[e("p",[t._v("使用rem完美解决了不同机型的布局兼容性问题，提高了用户的整体体验。")]),e("p",[t._v("使用断点续传思路重构了大文件上传功能，并添加了安全校验。")]),e("p",[t._v("二次封装weui的page组件，解决苹果手机适配问腿")]),e("p",{},[t._v("不同场景、不同数据下，动态完成复杂表格的渲染，单元格、表头合并，帮助用户更直观地了解资产情况。")])]),e("div",{staticClass:"flex-space"},[e("strong",[t._v("pc端")]),e("strong",[t._v("2017年 - 2021年")])]),e("p",[e("strong",[t._v("技术选型")]),t._v("：Javascript、RequireJs、JQuery")]),e("strong",[t._v("项目成果和亮点：")]),e("div",{staticClass:"result"},[e("p",[t._v("用户有自定义表单的需求，实现了通过灵活的配置和可视化编辑，用户可以自定义表单字段、验证规则和布局。")]),e("p",[t._v("主导了流程引擎的自定义、流程实例管理和流程节点的处理，通过合理的设计和优化，实现了高效的管理功能。")]),e("p",[t._v(" 为了满足不同交付群体对首页大厅的定制需求，设计并开发了首页可配置功能，由之前的交付前硬编码方式变为配置，可灵活搭配需要的功能模块、布局等，使交付时间提高了80%。")]),e("p",[t._v("用户有换肤的需求，设计并主导了换肤功能，提供三种常用的主题，并且为用户提供自定义修改主题的入口。")]),e("p",[t._v("使用selenium进行100%功能覆盖。")])])])])],1),t._m(0),t._m(1)],1)],1)])},l=[function(){var t=this,e=t._self._c;return e("section",[e("h2",[t._v("最近在学")]),e("div",{staticClass:"flex"},[e("img",{staticClass:"litter-img",attrs:{src:s(4183)}}),e("span",[t._v("react hook")])])])},function(){var t=this,e=t._self._c;return e("section",[e("h2",[t._v("简历网页链接")]),e("a",{attrs:{href:"https://keepamiss6.github.io/resume/",target:"_blank"}},[t._v("https://keepamiss6.github.io/resume/")])])}],o={name:"resumePage",data(){return{tableData:[{name:"广联达科技股份有限公司",postion:"高级前端开发工程师",date:"2021.12 ~ 至今"},{name:"北京星网锐捷网络技术有限公司",postion:"前端开发工程师",date:"2017.07 ~ 2021.09"},{name:"天津工业大学",postion:"软件工程专业",date:"2015.09 ~ 2017.07"},{name:"天津大学",postion:"计算机信息管理专业",date:"2012.09 ~ 2015.07"}],skill:[{item:"具备扎实的javascript基础"},{item:"熟练掌握html、css，有丰富的响应式布局经验"},{item:"熟练掌握react，并对其原理有深入研究"},{item:"熟练掌握vue2、vue3，并能完成大型项目开发"},{item:"熟练使用chorme工具、devtool、charles、vConsole等工具对web端、手机端进行调试"},{item:"熟练使用git，有丰富地多人协作项目管理经验"},{item:"熟练使用webpack对大型项目进行打包、优化"},{item:"掌握自动化部署，有接入前端项目流水线部署经验"},{item:"熟练掌握selenium编写自动化用例"},{item:"英语可以做到日常沟通以及阅读英文文档无障碍"}]}},methods(){}},c=o,p=s(1001),u=(0,p.Z)(c,n,l,!1,null,"1765d8ef",null),d=u.exports,v={name:"App",components:{resumePage:d},methods:{}},f=v,m=(0,p.Z)(f,i,r,!1,null,null,null),_=m.exports,g=s(8499),h=s.n(g),x=s(44),b=s.n(x);a["default"].use(b()),a["default"].config.productionTip=!1,a["default"].use(h()),new a["default"]({render:t=>t(_)}).$mount("#app")},4394:function(t,e,s){t.exports=s.p+"img/github.584613f2.jpg"},7739:function(t,e,s){t.exports=s.p+"img/glodon.547d8069.jpg"},2474:function(t,e,s){t.exports=s.p+"img/myself.409adfcc.jpg"},4183:function(t,e,s){t.exports=s.p+"img/react.09d1a67f.jpg"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,a,i,r){if(!a){var n=1/0;for(p=0;p<t.length;p++){a=t[p][0],i=t[p][1],r=t[p][2];for(var l=!0,o=0;o<a.length;o++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[o])}))?a.splice(o--,1):(l=!1,r<n&&(n=r));if(l){t.splice(p--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[a,i,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p=""}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,n=a[0],l=a[1],o=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(o)var p=o(s)}for(e&&e(a);c<n.length;c++)r=n[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(p)},a=self["webpackChunkresume"]=self["webpackChunkresume"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(2269)}));a=s.O(a)})();
//# sourceMappingURL=app.380bde02.js.map