(function(){"use strict";var t={4296:function(t,e,n){var r=n(5130),o=n(6768),a=n(4232),i=n(6450),c=n(3367),u=n(3462),l=n(4903),f=n(203),s=n(1720),d=n(9669),m=n(8477),p=n(8050);function v(t,e,n,r,v,h){const g=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(i.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(c.z,{color:"primary",elevation:"0",density:"comfortable"},{default:(0,o.k6)((()=>[(0,o.bF)(p.s,{text:t.$route.name,class:"text-uppercase"},null,8,["text"]),(0,o.bF)(s.h)])),_:1}),(0,o.bF)(m.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,{onUpdateCart:h.getCart},null,8,["onUpdateCart"])])),_:1}),(0,o.bF)(l.i,{color:"primary",height:"65",grow:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(v.items,((t,n)=>((0,o.uX)(),(0,o.Wv)(f.D,{key:n,to:t.to},{default:(0,o.k6)((()=>[1!=n?((0,o.uX)(),(0,o.Wv)(d.w,{key:0},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.icon),1)])),_:2},1024)):v.cart.length?((0,o.uX)(),(0,o.Wv)(u.Q,{key:2,color:"error","offset-y":"-5","offset-x":"-5",content:v.cart.length},{default:(0,o.k6)((()=>[(0,o.bF)(d.w,null,{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)("mdi-cart-outline")]))),_:1})])),_:1},8,["content"])):((0,o.uX)(),(0,o.Wv)(d.w,{key:1},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(t.icon),1)])),_:2},1024)),(0,o.Lk)("span",null,(0,a.v_)(t.title),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})}var h={data(){return{cart:[],drawer:!0,rail:!0,items:[{title:"Inventario",value:"inventario",icon:"mdi-storefront",to:"/"},{title:"Carrito",value:"cart",icon:"mdi-cart",to:"/cart"},{title:"Modificar",value:"modificar",icon:"mdi-cog",to:"/modificar"}]}},created(){this.getCart()},methods:{getCart(){const t=localStorage.getItem("cart");this.cart=t?JSON.parse(t):[]}}},g=n(1241);const b=(0,g.A)(h,[["render",v]]);var y=b,k=(n(5524),n(5790)),_=(0,k.$N)();async function O(){const t=await n.e(53).then(n.t.bind(n,8874,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var C=n(1387);function w(t,e,n,r,a,i){const c=(0,o.g2)("InventarioConsulta");return(0,o.uX)(),(0,o.Wv)(c,{msg:"Welcome to Your Vue.js App"})}var j=n(1540),F=n(6756),E=n(5526),x=n(4750);function S(t,e,n,r,a,i){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(F.L,{class:"mt-5"},{default:(0,o.k6)((()=>[(0,o.bF)(E.B,{md:"6","offset-md":"3"},{default:(0,o.k6)((()=>[(0,o.bF)(x.W,{modelValue:a.search,"onUpdate:modelValue":e[0]||(e[0]=t=>a.search=t),"prepend-inner-icon":"mdi-magnify",placeholder:"Buscar..."},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.bF)(j.Py,{search:a.search,headers:a.headers,items:a.inventario,hover:"",color:"primary"},{"item.action":(0,o.k6)((({item:t})=>[(0,o.bF)(f.D,{onClick:e=>i.addToCart(t),color:"primary",variant:"text",icon:"mdi-cart-plus"},null,8,["onClick"])])),_:1},8,["search","headers","items"])],64)}n(4114),n(8111),n(116),n(1701);var A=n(4373),W={data(){return{search:"",cart:[],inventario:[],headers:[{title:"Codigo",key:"codigo"},{title:"Nombre",key:"name"},{title:"Marca",key:"marca"},{title:"Existencia",align:"right",key:"cantidad"},{title:"Agregar",align:"center",key:"action"}]}},created(){this.getCart(),this.cargarInventario()},methods:{getCart(){const t=localStorage.getItem("cart");return t?JSON.parse(t):[]},cargarInventario(){A.A.get("https://youcodify.github.io/mi-gomera/public//inventario.json").then((t=>{this.inventario=t.data.map((t=>(t.action="",t)))}))},addToCart(t){const e=this.cart.find((e=>e.codigo===t.codigo));e?e.quantity+=t.quantity:this.cart.push(t),localStorage.setItem("cart",JSON.stringify(this.cart)),this.$emit("update-cart",this.product)}}};const I=(0,g.A)(W,[["render",S]]);var P=I,N={name:"HomeView",components:{InventarioConsulta:P}};const T=(0,g.A)(N,[["render",w]]);var X=T;const M=[{path:"/",name:"Inventario",component:X},{path:"/salida",name:"Salida",component:()=>n.e(580).then(n.bind(n,3580))},{path:"/modificar",name:"Modificar",component:()=>n.e(726).then(n.bind(n,2726))},{path:"/cart",name:"Carrito",component:()=>n.e(624).then(n.bind(n,7624))}],L=(0,C.aE)({history:(0,C.LA)("/mi-gomera/dist/"),routes:M});var V=L;O(),(0,r.Ef)(y).use(V).use(_).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],a=t[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return r[t]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+(53===t?"webfontloader":t)+"."+{53:"abb4ffd2",580:"082c7ea9",624:"fe56811b",726:"9737a3d6"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mi-gomera:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+a){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/mi-gomera/dist/"}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},r=self["webpackChunkmi_gomera"]=self["webpackChunkmi_gomera"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(4296)}));r=n.O(r)})();
//# sourceMappingURL=app.eefedb00.js.map