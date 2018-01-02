webpackJsonp([1],[,,,,,,,,,,,function(t,e,a){"use strict";function s(t){a(44)}var n=a(45),r=a(46),i=a(1),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(4),n=a(27),r=a(29),i=a.n(r),o=a(30),c=a(35),l=a(86);s.a.use(i.a),s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",http:{root:"/"},store:l.a,router:c.a,template:"<App/>",components:{App:o.a}})},,,,function(t,e){},,function(t,e,a){"use strict";function s(t){a(31)}var n=a(33),r=a(34),i=a(1),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";e.a={name:"app"}},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("My News Feed")]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-content",[a("router-view")],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=a(4),n=a(36),r=a(37),i=a(52);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"NewsFeed",component:r.a},{path:"/sources",name:"SourcesList",component:i.a}]})},,function(t,e,a){"use strict";function s(t){a(38)}var n=a(39),r=a(51),i=a(1),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=a(40),n=(a(11),a(47));e.a={name:"NewsFeed",data:function(){return{dialog:!1,category:[]}},computed:{lastUpdate:function(){var t=this.$store.state.lastUpdate;return(t.getDay()==(new Date).getDay()?"Today":"Yesterday")+" at "+t.toLocaleTimeString()},items:function(){return this.$store.state.feeds}},methods:{viewItem:function(t){var e=t.target.getElementsByTagName("a")[0];e&&(e.setAttribute("href",this.item.url),e.setAttribute("target","_blank"),e.click())},onClickCategory:function(t){var e="";e+="?"+t[0],t.slice(1).forEach(function(t,a){e+="&"+t})},refreshNews:function(){this.$store.dispatch("fetchNews")}},components:{NewsItem:n.a,CategoryFilter:s.a},created:function(){this.$store.dispatch("fetchNews")}}},function(t,e,a){"use strict";function s(t){a(41)}var n=a(42),r=a(43),i=a(1),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"CategoryFilter",data:function(){return{categories:[],allCategories:["Technology","Business","Finance","Politics","Culture","Art"]}},methods:{filter:function(t){this.$store.dispatch("fetchNews",t)},handleChange:function(t){var e=this,a=t.map(function(t){return e.allCategories[t]}).join(",");this.filter({where:{category:a}})}}}},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},on:{change:t.handleChange},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[a("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n      "+t._s(e.item)+"\n    ")],1)]}}]),model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";e.a={name:"AddSourceForm",data:function(){return{valid:!0,formData:{name:"",url:""},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=25||"Name must be less than 25 characters"}],urlRules:[function(t){return!!t||"Url is required"},function(t){return/^(http|https):[\/]{2}([\.-]?\w+)*(\.\w{2,3}).*$/.test(t)||"Url must be valid"}],allCategories:["Technology","Design","Business","Finance","Politics","Culture","Art"]}},methods:{submit:function(t){t&&this.$refs.form.validate()&&this.$store.dispatch("addNewsSource",this.formData)},clearForm:function(){this.formData={}}}}},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",rules:t.nameRules,placeholder:"ycombinator",counter:25,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Url",placeholder:"https://news.ycombinator.com",rules:t.urlRules,required:""},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}),t._v(" "),a("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[a("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n        "+t._s(e.item)+"\n      ")],1)]}}]),model:{value:t.formData.categories,callback:function(e){t.$set(t.formData,"categories",e)},expression:"formData.categories"}})],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(48)}var n=a(49),r=a(50),i=a(1),o=s,c=i(n.a,r.a,!1,o,"data-v-b3c07298",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"NewsItem",props:["item"],methods:{viewItem:function(t){var e=t.target.getElementsByTagName("a")[0];console.info(e,t),e&&(e.setAttribute("href",this.item.url),e.setAttribute("target","_blank"),e.click())}}}},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{key:t.item.header,staticClass:"list__tile list__tile--link",attrs:{target:"_blank",href:t.item.url}},[a("li",[a("div",{staticClass:"list__tile__title",domProps:{innerHTML:t._s(t.item.header.slice(0,100)+"...")}}),t._v(" "),a("span",{staticClass:"site",domProps:{innerHTML:t._s(t.item.site)}})])]),t._v(" "),a("hr",{staticClass:"divider"})])},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-toolbar",[a("span",{staticClass:"last-update",domProps:{innerHTML:t._s(t.lastUpdate)}}),t._v(" "),a("v-btn",{attrs:{round:"",flat:"",icon:""},on:{click:t.refreshNews}},[a("v-icon",[t._v("refresh")])],1),t._v(" "),a("v-btn",{attrs:{right:"",absolute:"",to:"/sources"}},[t._v("Configure")])],1),t._v(" "),a("v-card",[a("v-list",{attrs:{"three-lines":""}},[t._l(t.items,function(e){return[e.header?a("news-item",{key:e.header,attrs:{item:e}}):t._e()]})],2)],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function s(t){a(53)}var n=a(54),r=a(85),i=a(1),o=s,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var s=a(55),n=a.n(s),r=a(14),i=a.n(r),o=a(11);e.a=n()({name:"SourcesList",components:{AddSourceForm:o.a},data:function(){return{dialog:!1,category:[]}},created:function(){window.sl=this},computed:{items:function(){return this.$store.state.sources}},methods:{itemTap:function(t){var e={};this.$store.state.sources.forEach(function(t){e[t.name]=i()({},t)}),this.$store.dispatch("setSourcesConfig",e)},submitForm:function(t){this.$refs.addSourceForm.$refs.form.validate()&&(this.$refs.addSourceForm.submit(t),this.dialog=!1,this.$refs.addSourceForm.clearForm(t))}}},"created",function(){this.$store.dispatch("fetchSources")})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-toolbar",[a("v-btn",{attrs:{to:"/",primary:""}},[t._v("Back")]),t._v(" "),a("v-btn",{attrs:{absolute:"",dark:"",right:"",color:"orange"},nativeOn:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("add")])],1)],1),t._v(" "),a("v-card",[a("v-list",{attrs:{"two-line":""}},[t._l(t.items,function(e){return[a("v-list-tile",{key:e.name},[a("v-list-tile-avatar",[a("v-checkbox",{attrs:{"hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),a("v-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("v-tile-sub-title",{domProps:{innerHTML:t._s(e.url)}})],1)],1)]})],2)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",dark:"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("Add News source request")]),t._v(" "),a("v-card-text",[a("add-source-form",{ref:"addSourceForm"})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.submitForm(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var s=a(87),n=a.n(s),r=a(14),i=a.n(r),o=a(4),c=a(89),l=a(90),u=a.n(l);o.a.use(c.a);var f=new c.a.Store({state:{feeds:[],sources:[],config:{},lastUpdate:new Date},mutations:{setFeeds:function(t,e){var a=i()({},e);t.feeds=a},setFeedSources:function(t,e){var a=i()({},e);t.sources=a},setSourceConfig:function(t,e){t.config=e},lastupdate:function(t,e){t.lastUpdate=new Date}},actions:{fetchNews:function(t,e){var a=t.commit,s="/api/news";e&&(s+="?filters="+n()(e)),u.a.get(s).then(function(t){200==t.status&&(a("setFeeds",t.feed||[]),a("lastUpdate"))},function(t){})},fetchSources:function(t){var e=t.commit;u.a.get("/api/sources").then(function(t){200==t.status&&e("setFeedSources",t.data||[])},function(t){})},setSourcesConfig:function(t,e){(0,t.commit)("setSourcesConfig",e)},addNewsSource:function(t,e){t.commit;u.a.post("/api/request",i()({},e)).then(function(t){})}},getters:{getConfig:function(t){return JSON.parse(localStorage.getItem("feeds-config"))}}});e.a=f}],[24]);
//# sourceMappingURL=app.10f5e1ce7a3fa891eff1.js.map