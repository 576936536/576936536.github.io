(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498ae0a9"],{"06ef":function(t,a,e){t.exports=e.p+"img/8.d54cf367.gif"},"0768":function(t,a,e){t.exports=e.p+"img/9.41bbc331.png"},"11eb":function(t,a,e){t.exports=e.p+"img/1.eac4fc3c.gif"},"33b2":function(t,a,e){t.exports=e.p+"img/4.10f0e831.png"},"3fb0":function(t,a,e){"use strict";e("cea4")},4482:function(t,a,e){t.exports=e.p+"img/5.b2bee364.gif"},"5da1":function(t,a,e){t.exports=e.p+"img/3.f4f66719.gif"},"5f7f":function(t,a,e){t.exports=e.p+"img/10.00cc03ce.png"},"63a1":function(t,a,e){"use strict";var n=e("b775");function i(){return n["a"].get("http://47.115.17.245:3333/user/goodlist",{})}a["a"]={aaa:i}},8973:function(t,a,e){t.exports=e.p+"img/banner4.b06ccbb6.jpg"},"8efd":function(t,a,e){t.exports=e.p+"img/7.ae093b50.png"},"97ca":function(t,a,e){t.exports=e.p+"img/6.4d6f163f.png"},a434:function(t,a,e){"use strict";var n=e("23e7"),i=e("23cb"),s=e("a691"),r=e("50c4"),c=e("7b0b"),o=e("65f0"),p=e("8418"),f=e("1dde"),d=e("ae40"),l=f("splice"),u=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l||!u},{splice:function(t,a){var e,n,f,d,l,u,_=c(this),b=r(_.length),w=i(t,b),C=arguments.length;if(0===C?e=n=0:1===C?(e=0,n=b-w):(e=C-2,n=m(h(s(a),0),b-w)),b+e-n>v)throw TypeError(g);for(f=o(_,n),d=0;d<n;d++)l=w+d,l in _&&p(f,d,_[l]);if(f.length=n,e<n){for(d=w;d<b-n;d++)l=d+n,u=d+e,l in _?_[u]=_[l]:delete _[u];for(d=b;d>b-n+e;d--)delete _[d-1]}else if(e>n)for(d=b-n;d>w;d--)l=d+n-1,u=d+e-1,l in _?_[u]=_[l]:delete _[u];for(d=0;d<e;d++)_[d+w]=arguments[d+2];return _.length=b-n+e,f}})},bb51:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("header",[n("div",{staticClass:"search",on:{click:function(a){return t.go("/search")}}},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("输入商品名或粘贴宝贝标题搜索 ")]),t._m(0)]),n("nav",[t._m(1),n("div",{staticClass:"navmin"},t._l(t.Topname,(function(a){return n("li",{key:a.id},[n("a",{attrs:{href:a.href}},[t._v(t._s(a.name))])])})),0),t._m(2)]),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",[n("img",{attrs:{src:e("d15f"),alt:""}})]),n("van-swipe-item",[n("img",{attrs:{src:e("db49"),alt:""}})]),n("van-swipe-item",[n("img",{attrs:{src:e("e5d4"),alt:""}})]),n("van-swipe-item",[n("img",{attrs:{src:e("8973"),alt:""}})])],1),t._m(3),n("div",{staticClass:"min1"},t._l(t.min,(function(a){return n("div",{key:a.id,on:{click:function(e){return t.go(a.path)}}},[n("img",{attrs:{src:a.photo,alt:""}}),t._v(t._s(a.name)+" ")])})),0),n("div",{staticClass:"top_lin"},[n("van-notice-bar",{attrs:{"left-icon":"volume-o",scrollable:!1}},[n("van-swipe",{staticClass:"notice-swipe",attrs:{vertical:"",autoplay:3e3,"show-indicators":!1}},[n("van-swipe-item",[n("van-tag",{attrs:{type:"warning"}},[t._v("品牌特惠")]),t._v("晨光多用途全木浆A4纸100张8.9元 ")],1),n("van-swipe-item",[n("van-tag",{attrs:{type:"warning"}},[t._v("折上折")]),t._v("伊利金典纯牛奶24盒仅需74.8元！ ")],1),n("van-swipe-item",[n("van-tag",{attrs:{type:"warning"}},[t._v("限时特卖")]),t._v("正宗柳州螺蛳粉330g*2包9.9元 ")],1)],1)],1)],1),n("div",{staticClass:"cardbanner"},[n("van-swipe",{staticStyle:{height:"200px"},attrs:{autoplay:3e3,vertical:""}},t._l(t.cardbanner,(function(a,e){return n("van-swipe-item",{key:a._id,on:{click:function(a){return t.goto(e)}}},[n("img",{attrs:{src:a.url,alt:""}}),n("div",{staticClass:"desc"},[t._v("￥"+t._s(a.price))])])})),1)],1),n("div",{staticClass:"ddq"},[n("van-cell",{attrs:{value:"正在抢","is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v("咚咚抢")]),n("van-tag",{attrs:{type:"danger"}},[t._v("整点特惠开抢")])]},proxy:!0}])}),n("div",{staticClass:"card"},t._l(t.cards,(function(a,e){return n("div",{key:a._id,staticClass:"shop",on:{click:function(a){return t.goto(e)}}},[n("img",{attrs:{src:a.url,alt:""}}),n("div",{staticClass:"title"},[t._v(t._s(a.title))]),n("div",{staticClass:"desc"},[t._v("￥"+t._s(a.price))]),n("van-tag",{attrs:{type:"danger"}},[t._v("天猫")]),t._v(" "),n("van-tag",{attrs:{type:"warning"}},[t._v("券后10元")])],1)})),0)],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"look"},[e("i",{staticClass:"iconfont"},[t._v("")]),e("span",[t._v("消息")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav_1"},[e("a",{attrs:{href:"#"}},[t._v("精选")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav_2"},[e("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"disc"},[n("img",{attrs:{src:e("d4c0"),alt:""}})])}],s=(e("a434"),e("63a1")),r={data:function(){return{page:1,pagesize:20,Topname:[{id:1,name:"中秋团圆季",href:"#"},{id:2,name:"美食",href:"#"},{id:3,name:"居家日用",href:"#"},{id:4,name:"女装",href:"#"},{id:5,name:"美妆",href:"#"},{id:6,name:"数码家电",href:"#"},{id:7,name:"鞋品",href:"#"},{id:8,name:"男装",href:"#"},{id:9,name:"内衣",href:"#"},{id:10,name:"母婴",href:"#"},{id:11,name:"家装家纺",href:"#"},{id:12,name:"文娱车品",href:"#"},{id:13,name:"配饰",href:"#"},{id:14,name:"精包",href:"#"},{id:15,name:"户外运动",href:"#"}],min:[{id:1,name:"疯抢排行",photo:e("11eb"),path:"#"},{id:2,name:"9.9包邮",photo:e("ffe1"),path:"/nine"},{id:3,name:"品牌特卖",photo:e("5da1"),path:"#"},{id:4,name:"每日半价",photo:e("33b2"),path:"#"},{id:5,name:"折上折",photo:e("4482"),path:"#"},{id:6,name:"今日秒杀",photo:e("97ca"),path:"#"},{id:7,name:"辣妈特区",photo:e("8efd"),path:"#"},{id:8,name:"饿了么",photo:e("06ef"),path:"#"},{id:9,name:"大额神券",photo:e("0768"),path:"#"},{id:10,name:"限时爆品",photo:e("5f7f"),path:"#"}],cards:[],cardbanner:[]}},components:{},created:function(){var t=this;s["a"].aaa(this.page,this.pagesize).then((function(a){var e=a.data.data;console.log(e),t.cards=e})),s["a"].aaa(this.page,this.pagesize).then((function(a){var e=a.data.data;t.cardbanner=e.splice(1,3)}))},methods:{change:function(t){this.currentPath=t},go:function(t){this.$router.push(t)},goto:function(t){console.log(t),this.$router.push("card"+t)}},watch:{$route:{deep:!0,handler:function(t){console.log(t,1111),this.currentPath=t.path}}}},c=r,o=(e("3fb0"),e("2877")),p=Object(o["a"])(c,n,i,!1,null,"15ae1795",null);a["default"]=p.exports},cea4:function(t,a,e){},d15f:function(t,a,e){t.exports=e.p+"img/banner1.12740b71.jpg"},d4c0:function(t,a,e){t.exports=e.p+"img/disc.3f6e7a3a.gif"},db49:function(t,a,e){t.exports=e.p+"img/banner2.d3aec3d9.jpg"},e5d4:function(t,a,e){t.exports=e.p+"img/banner3.8f3ab3e4.png"},ffe1:function(t,a,e){t.exports=e.p+"img/2.afa22714.gif"}}]);