webpackJsonp([1],[,,,,,,,,,,,function(t,e,a){"use strict";function n(t){a(42)}var s=a(43),i=a(44),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a(25),i=a(27),r=a.n(i),o=a(28),c=a(33),u=a(86);n.a.use(r.a),n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",http:{root:"/"},store:u.a,router:c.a,template:"<App/>",components:{App:o.a}})},,,,function(t,e){},,function(t,e,a){"use strict";function n(t){a(29)}var s=a(31),i=a(32),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,a){"use strict";e.a={name:"app",data:function(){return{about:!1,details:{Frontend:"JS ES6 + Webpack + Vue + Vuex + Vuetify + Axios",Backend:"Node.js + Loopback",Database:"MongoDB",Hosting:"Heroku","Packaging & Deployment":"Docker + Docker Compose"}}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("My News Feed")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(e){t.about=!0}}},[t._v(" About")])],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-dialog",{attrs:{dark:""},model:{value:t.about,callback:function(e){t.about=e},expression:"about"}},[a("v-card",[a("v-card-title",[t._v("Tech Stack")]),t._v(" "),a("v-card-text",[t._l(t.details,function(e,n){return[a("div",{key:n,staticClass:"about-item"},[a("span",{domProps:{textContent:t._s(n)}}),t._v(":\n              "),a("span",{domProps:{textContent:t._s(e)}})])]})],2)],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";var n=a(2),s=a(34),i=a(35),r=a(50);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"NewsFeed",component:i.a},{path:"/sources",name:"SourcesList",component:r.a}]})},,function(t,e,a){"use strict";function n(t){a(36)}var s=a(37),i=a(49),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(38),s=(a(11),a(45));e.a={name:"NewsFeed",data:function(){return{dialog:!1,category:[]}},computed:{lastUpdate:function(){var t=this.$store.state.lastUpdate;return(t.getDay()==(new Date).getDay()?"Today":"Yesterday")+" at "+t.toLocaleTimeString()},items:function(){return this.$store.state.feeds}},methods:{onClickCategory:function(t){var e="";e+="?"+t[0],t.slice(1).forEach(function(t,a){e+="&"+t})},refreshNews:function(){this.$store.dispatch("fetchLatestNews")}},components:{NewsItem:s.a,CategoryFilter:n.a},created:function(){this.$store.dispatch("fetchNews")}}},function(t,e,a){"use strict";function n(t){a(39)}var s=a(40),i=a(41),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"CategoryFilter",data:function(){return{categories:[],allCategories:["Technology","Business","Finance","Politics","Culture","Art"]}},methods:{filter:function(t){this.$store.dispatch("fetchNews",t)},handleChange:function(t){var e=this,a=t.map(function(t){return e.allCategories[t]}).join(",");this.filter({where:{category:a}})}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},on:{change:t.handleChange},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[a("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n      "+t._s(e.item)+"\n    ")],1)]}}]),model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e){},function(t,e,a){"use strict";e.a={name:"AddSourceForm",data:function(){return{valid:!0,formData:{name:"",url:""},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=25||"Name must be less than 25 characters"}],urlRules:[function(t){return!!t||"Url is required"},function(t){return/^(http|https):[\/]{2}([\.-]?\w+)*(\.\w{2,3}).*$/.test(t)||"Url must be valid"}],allCategories:["Technology","Design","Business","Finance","Politics","Culture","Art"]}},methods:{submit:function(t){t&&this.$refs.form.validate()&&this.$store.dispatch("addNewsSource",this.formData)},clearForm:function(){this.formData={}}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",rules:t.nameRules,placeholder:"ycombinator",counter:25,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Url",placeholder:"https://news.ycombinator.com",rules:t.urlRules,required:""},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}),t._v(" "),a("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[a("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n        "+t._s(e.item)+"\n      ")],1)]}}]),model:{value:t.formData.categories,callback:function(e){t.$set(t.formData,"categories",e)},expression:"formData.categories"}})],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";function n(t){a(46)}var s=a(47),i=a(48),r=a(1),o=n,c=r(s.a,i.a,!1,o,"data-v-51cd3ca6",null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"NewsItem",props:["item"],methods:{viewItem:function(t){var e=t.target.offsetParent;e&&(e.setAttribute("href",this.item.url),e.setAttribute("target","_blank"),e.click())}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-tile",{key:t.item.header,staticClass:"news-item",attrs:{avatar:""},on:{click:t.viewItem}},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"no-overflow",domProps:{innerHTML:t._s(t.item.header)}}),t._v(" "),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.site)}})],1)],1),t._v(" "),a("hr",{staticClass:"divider"})],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-toolbar",[a("span",{staticClass:"last-update",domProps:{innerHTML:t._s(t.lastUpdate)}}),t._v(" "),a("v-btn",{attrs:{round:"",flat:"",icon:""},on:{click:t.refreshNews}},[a("v-icon",[t._v("refresh")])],1),t._v(" "),a("v-btn",{attrs:{right:"",round:"",flat:"",absolute:"",to:"/sources"}},[t._v("Configure")])],1),t._v(" "),a("v-card",t._l(t.items,function(t){return a("v-list",{attrs:{"three-lines":""}},[a("news-item",{key:t.header,attrs:{item:t}})],1)}))],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";function n(t){a(51)}var s=a(52),i=a(85),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";var n=a(12),s=a.n(n),i=a(11),r=a(81);e.a={name:"SourcesList",components:{AddSourceForm:i.a,SourcesListItem:r.a},data:function(){return{dialog:!1,category:[]}},computed:{items:function(){return this.$store.state.sources}},methods:{saveConfig:function(t){var e={};this.items.forEach(function(t){e[t.name]=s()({},t)}),this.$store.dispatch("setSourcesConfig",e),this.$router.back()},submitForm:function(t){this.$refs.addSourceForm.$refs.form.validate()&&(this.$refs.addSourceForm.submit(t),this.dialog=!1,this.$refs.addSourceForm.clearForm(t))}},created:function(){this.$store.dispatch("fetchSources")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function n(t){a(82)}var s=a(83),i=a(84),r=a(1),o=n,c=r(s.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,a){"use strict";e.a={name:"SourcesListItem",props:["item"],data:function(){return{selected:!!this.item.selected,category:[]}},methods:{itemTap:function(t){this.item.selected=!this.item.selected,this.selected=this.item.selected}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-tile",{key:t.item.name,on:{"!click":function(e){e.stopPropagation(),t.itemTap(e)}}},[a("v-list-tile-avatar",[a("v-checkbox",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(t.item.name)}}),t._v(" "),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.url)}})],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-toolbar",[a("v-btn",{attrs:{primary:""},on:{click:t.saveConfig}},[t._v("Back")]),t._v(" "),a("v-btn",{attrs:{absolute:"",dark:"",right:"",color:"orange"},nativeOn:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("add")])],1)],1),t._v(" "),a("v-card",[a("v-subheader",{domProps:{textContent:t._s("Filter")}}),t._v(" "),a("v-list",{attrs:{"two-line":""}},[a("v-layout",{attrs:{"child-flex":""}},[t._l(t.items,function(t){return[a("sources-list-item",{key:t.name,attrs:{item:t}})]})],2)],1)],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",dark:"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("Request a News Source")]),t._v(" "),a("v-card-text",[a("add-source-form",{ref:"addSourceForm"})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.submitForm(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},function(t,e,a){"use strict";var n=a(12),s=a.n(n),i=a(87),r=a.n(i),o=a(2),c=a(89),u=a(90),l=a.n(u);o.a.use(c.a);var f=new c.a.Store({state:{feeds:[],sources:[],config:{},lastUpdate:new Date},mutations:{setFeeds:function(t,e){t.feeds=e},setFeedSources:function(t,e){t.sources=e},setSourcesConfig:function(t,e){t.config=e},lastupdate:function(t,e){t.lastUpdate=new Date}},actions:{fetchLatestNews:function(t){var e=this;t.commit;l.a.get("/api/scraper/run").then(function(t){setTimeout(function(){return e.dispatch("fetchNews")},500)},function(t){})},fetchNews:function(t,e){var a=t.commit,n="/api/news";e&&(n+="?filters="+r()(e)),l.a.get(n).then(function(t){a("setFeeds",t.data||[]),a("lastUpdate")},function(t){})},fetchSources:function(t){var e=t.commit;l.a.get("/api/sources").then(function(t){e("setFeedSources",t.data||[])},function(t){})},setSourcesConfig:function(t,e){(0,t.commit)("setSourcesConfig",e)},addNewsSource:function(t,e){t.commit;l.a.post("/api/request",s()({},e)).then(function(t){})}},getters:{getConfig:function(t){return JSON.parse(localStorage.getItem("feeds-config"))}}});e.a=f}],[22]);
//# sourceMappingURL=app.38d73c4d726cc90e5a62.js.map