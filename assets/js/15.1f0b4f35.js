(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{222:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"现象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[a._v("#")]),a._v(" 现象")]),a._v(" "),e("p",[a._v("Kafka消息消费端链路断裂")]),a._v(" "),e("h3",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),e("p",[a._v("Kafka探针只是追踪了对Kafka的拉取动作，而整个后续处理过程不是由kafka consumer发起。故，需要在消费处理的发起点，进行手动埋点。")]),a._v(" "),e("h3",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法")]),a._v(" "),e("p",[a._v("可以通过Application Toolkit中的 "),e("code",[a._v("@Trace")]),a._v(" 标注，或者OpenTracing API进行手动埋点。")])])}],!1,null,null,null);t.default=r.exports}}]);