(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c82022"],{"9ca3":function(t,e,n){"use strict";var o=n("a25f"),i=n.n(o);i.a},a25f:function(t,e,n){},f0b8:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting"},[n("header",[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.go("/Mine")}}}),n("span",[t._v("设置")])],1),n("div",{staticClass:"mine",on:{click:function(e){t.show=!0}}},[t._v(" 个人信息 "),n("van-icon",{attrs:{name:"arrow"}})],1),n("div",{staticClass:"help",on:{click:function(e){t.show1=!0}}},[t._v(" 关于本APP "),n("span",[t._v("已授权")]),n("van-icon",{attrs:{name:"arrow"}})],1),n("div",{staticClass:"look",on:{click:t.out}},[t._v("退出登录")]),n("van-action-sheet",{attrs:{title:"个人信息"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content"},[n("van-cell-group",[n("van-field",{attrs:{label:"修改用户名",placeholder:"请输入用户名"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("div",[t._v("用户头像")]),n("van-uploader",{attrs:{multiple:""},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.btn()}}},[t._v("提交")])],1),n("van-action-sheet",{attrs:{title:"本产品所有权由做程序员的猴子出品"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[n("div",{staticClass:"content"},[t._v(" 本产品所有的最终解释权由做程序员的猴子全权代理，仅供参考观摩，谢谢！ ")])])],1)},i=[],s=n("5f87"),a={data:function(){return{show:!1,show1:!1,fileList:[],value:""}},components:{},methods:{go:function(t){this.$router.push(t)},out:function(){Object(s["b"])(),window.location.reload(),this.$router.push("/Mine")},btn:function(){console.log(this.fileList);var t=localStorage.getItem("photo")||"[]",e=JSON.parse(t);if(console.log(this.fileList),this.fileList.length>=1){e.unshift(this.fileList[0]),localStorage.setItem("photo",JSON.stringify(e));var n=localStorage.getItem("user")||"[]",o=JSON.parse(n);this.value&&(o.unshift(this.value),localStorage.setItem("user",JSON.stringify(o)),this.$router.push({path:"/Mine"}),window.location.reload(),console.log(this.value))}}}},l=a,c=(n("9ca3"),n("2877")),r=Object(c["a"])(l,o,i,!1,null,null,null);e["default"]=r.exports}}]);