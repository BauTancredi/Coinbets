(this["webpackJsonpcrypto-currency"]=this["webpackJsonpcrypto-currency"]||[]).push([[0],{20:function(e,t,n){e.exports=n(40)},25:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),l=n(8),u=n(5);n(25);function i(){function e(e){document.querySelector(".selected").classList.remove("selected");var t=e.target,n=t.parentElement,a=t.parentNode.nodeName;"UL"===a?t.classList.add("selected"):"LI"===a&&n.classList.add("selected")}return Object(a.useEffect)((function(){document.querySelector("nav ul li").classList.add("selected")})),c.a.createElement("nav",null,c.a.createElement(l.b,{to:"/",className:"link"},c.a.createElement("div",{className:"title"},c.a.createElement("img",{src:"../../images/logo.svg",alt:""}),c.a.createElement("h1",null,"Coinbets"))),c.a.createElement("ul",null,["Dashboard","Exchange","Transactions","Settings"].map((function(t,n){return c.a.createElement("li",{key:n,onClick:e},c.a.createElement("img",{src:"".concat("/Coinbets","/images/").concat(t.toLowerCase(),".svg"),alt:""}),c.a.createElement("p",null,t))}))))}n(31);function s(){return c.a.createElement("header",null,c.a.createElement("div",{className:"overview"},c.a.createElement("p",null,"Overview Dashboard"),c.a.createElement("h1",null,"Trading view")),c.a.createElement("ul",null,["Crypto","Currency","Stocks"].map((function(e,t){return c.a.createElement(l.c,{to:"/".concat(e.toLowerCase()),className:"link",activeClassName:"active",style:{color:"white"},key:t},c.a.createElement("li",{key:t},e))}))))}var m=n(6),p=n.n(m),d=n(11),f=n(9);n(33);function h(e){return c.a.createElement("div",{className:"card ".concat(e.card)},c.a.createElement("div",{className:"card--left"},c.a.createElement("h3",{className:"card-title"},e.crypto),c.a.createElement("h3",{className:"card-price"},"$",e.price),c.a.createElement("p",null,e.info)),c.a.createElement("img",{src:e.img,alt:"currency logo"}))}n(34),n(35);function E(e){return c.a.createElement("div",{className:"button"},c.a.createElement("button",{onClick:e.handler},"Refresh"))}n(36);function b(){return c.a.createElement("div",{className:"loader-container"},c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}function g(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(f.a)(o,2),u=l[0],i=l[1],s=["EOS","BCH","DASH","ZEC","ETH","QTUM","BTC","LTC"];function m(){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(u=!0),e.next=4,fetch("https://api.coincap.io/v2/rates").then((function(e){return e.json()})).then((function(e){return v(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,i(u=!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))).apply(this,arguments)}function v(e){r(e.filter((function(e){return"crypto"===e.type&&s.includes(e.symbol)})))}return Object(a.useEffect)((function(){m()}),[]),u?c.a.createElement(b,null):c.a.createElement("div",null,c.a.createElement("div",{className:"container"},n.map((function(e,t){return c.a.createElement(h,{key:e.id,card:"card".concat(t+1),crypto:"".concat(e.symbol,"/USD"),price:parseFloat(e.rateUsd).toFixed(4),info:e.id,img:"../../images/currency/".concat(e.id,".svg")})}))),c.a.createElement(E,{handler:m}))}n(37);function v(e){return c.a.createElement("div",{className:"stock ".concat(e.stock)},c.a.createElement("h6",null,e.name),c.a.createElement("p",null,"$",e.price))}n(38);function k(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(f.a)(o,2),u=l[0],i=l[1];function s(){return(s=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(u=!0),e.next=4,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=BRK.A,SNAP,TWTR,BABA,JPM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r(n.concat(e.data))}));case 4:return e.next=6,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=JNJ,V,WMT,XOM,BAC&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 6:return e.next=8,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=T,DIS,KO,TM,PFE&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 8:return e.next=10,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=BA,HSBC,MCD,NKE,PM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 10:return e.next=12,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=ACN,IBM,SNE,UL,CVX&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 12:return e.next=14,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=VZ,C&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:return e.prev=19,i(u=!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,16,19,22]])})))).apply(this,arguments)}function m(){return(m=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(n=[]),i(u=!0),e.next=5,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=BRK.A,SNAP,TWTR,BABA,JPM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r(n.concat(e.data))}));case 5:return e.next=7,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=JNJ,V,WMT,XOM,BAC&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 7:return e.next=9,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=T,DIS,KO,TM,PFE&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 9:return e.next=11,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=BA,HSBC,MCD,NIKE,PM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 11:return e.next=13,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=ACN,IBM,SNE,UL,CVX&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 13:return e.next=15,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=VZ,C&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM").then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e.data)}))}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:return e.prev=20,i(u=!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),u?c.a.createElement(b,null):c.a.createElement("div",null,c.a.createElement("div",{className:"stock-container"},n.map((function(e,t){return c.a.createElement(v,{key:t,name:e.name,price:e.price,stock:"stock".concat(Math.floor(8*Math.random())+1)})}))),c.a.createElement(E,{handler:function(){return m.apply(this,arguments)}}))}n(39);function w(){return c.a.createElement("div",{className:"maintenance"},c.a.createElement("div",null,c.a.createElement("img",{src:"../../images/maintenance.svg",alt:""}),c.a.createElement("h5",null,"This site is under maintenance")))}var y=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement("div",{id:"page-warp"},c.a.createElement(s,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/crypto",component:g}),c.a.createElement(u.a,{path:"/stocks",component:k}),c.a.createElement(u.a,{path:"/currency",component:w})))))};o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.571e68f9.chunk.js.map