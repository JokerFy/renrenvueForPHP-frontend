webpackJsonp([19],{aqW9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("34v0"),a=r.n(l),n=r("EcfS"),s={computed:{type:{get:function(){return this.$store.state.navbarLayoutType},set:function(e){this.SET_NAVBAR_LAYOUT_TYPE({type:e})}},skin:{get:function(){return this.$store.state.sidebarLayoutSkin},set:function(e){this.SET_SIDEBAR_LAYOUT_SKIN({skin:e})}}},methods:a()({},Object(n.b)(["SET_NAVBAR_LAYOUT_TYPE","SET_SIDEBAR_LAYOUT_SKIN"]))},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",[r("h2",[e._v("布局设置")]),e._v(" "),r("el-form-item",{attrs:{label:"导航条类型"}},[r("el-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("el-radio",{attrs:{label:"default",border:""}},[e._v("default")]),e._v(" "),r("el-radio",{attrs:{label:"inverse",border:""}},[e._v("inverse")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"侧边栏皮肤"}},[r("el-radio-group",{model:{value:e.skin,callback:function(t){e.skin=t},expression:"skin"}},[r("el-radio",{attrs:{label:"light",border:""}},[e._v("light")]),e._v(" "),r("el-radio",{attrs:{label:"dark",border:""}},[e._v("dark")])],1)],1)],1)},staticRenderFns:[]},o=r("mPyB")(s,i,!1,null,null,null);t.default=o.exports}});