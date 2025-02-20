(function(){"use strict";var t={4922:function(t,e,n){var r=n(5130),o=n(6768),a=n(6450),i=n(3367),u=n(8332),c=n(3462),l=n(8874),d=n(7511),f=n(1720),s=n(9669),p=n(4718),m=n(7009),v=n(8477),g=n(373),h=n(8050);function b(t,e,n,b,y,k){const C=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(a.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(g.e,{modelValue:y.drawer,"onUpdate:modelValue":e[1]||(e[1]=t=>y.drawer=t),permanent:"",rail:y.rail,onClick:e[2]||(e[2]=t=>y.rail=!1)},{default:(0,o.k6)((()=>[(0,o.bF)(p.g,{"prepend-avatar":"https://randomuser.me/api/portraits/men/85.jpg",title:"José Abel"},{append:(0,o.k6)((()=>[(0,o.bF)(l.D,{icon:"mdi-chevron-left",variant:"text",onClick:e[0]||(e[0]=(0,r.D$)((t=>y.rail=!y.rail),["stop"]))})])),_:1}),(0,o.bF)(d.G),(0,o.bF)(m.x8,{color:"primary",nav:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.items,((t,e)=>((0,o.uX)(),(0,o.Wv)(p.g,{key:e,to:t.to,"prepend-icon":t.icon,title:t.title},null,8,["to","prepend-icon","title"])))),128))])),_:1})])),_:1},8,["modelValue","rail"]),(0,o.bF)(i.z,{color:"primary",elevation:"0",density:"comfortable"},{default:(0,o.k6)((()=>[(0,o.bF)(u.Z,{variant:"text",onClick:e[3]||(e[3]=(0,r.D$)((t=>y.drawer=!y.drawer),["stop"]))}),(0,o.bF)(h.s,{text:t.$route.name,class:"text-uppercase"},null,8,["text"]),(0,o.bF)(f.h),t.$vuetify.display.mdAndUp?((0,o.uX)(),(0,o.Wv)(l.D,{key:0,icon:"mdi-magnify",variant:"text"})):(0,o.Q3)("",!0),(0,o.bF)(l.D,{stacked:"",to:"/cart"},{default:(0,o.k6)((()=>[y.cart.length?((0,o.uX)(),(0,o.Wv)(c.Q,{key:1,color:"error",content:y.cart.length},{default:(0,o.k6)((()=>[(0,o.bF)(s.w,null,{default:(0,o.k6)((()=>e[4]||(e[4]=[(0,o.eW)("mdi-cart-outline")]))),_:1})])),_:1},8,["content"])):((0,o.uX)(),(0,o.Wv)(l.D,{key:0,icon:"mdi-cart-outline",variant:"text"}))])),_:1})])),_:1}),(0,o.bF)(v.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(C,{onUpdateCart:k.getCart},null,8,["onUpdateCart"])])),_:1})])),_:1})}var y={data(){return{cart:[],drawer:!0,rail:!0,items:[{title:"Inventario",value:"inventario",icon:"mdi-storefront",to:"/"},{title:"Salida",value:"salida",icon:"mdi-go-kart",to:"/salida"},{title:"Modificar",value:"modificar",icon:"mdi-cog",to:"/modificar"}]}},created(){this.getCart()},methods:{getCart(){const t=localStorage.getItem("cart");this.cart=t?JSON.parse(t):[]}}},k=n(1241);const C=(0,k.A)(y,[["render",b]]);var O=C,w=(n(5524),n(5790)),_=(0,w.$N)();async function j(){const t=await n.e(53).then(n.t.bind(n,6493,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var F=n(1387);function x(t,e,n,r,a,i){const u=(0,o.g2)("InventarioConsulta");return(0,o.uX)(),(0,o.Wv)(u,{msg:"Welcome to Your Vue.js App"})}var A=n(5095),S=n(3813);function E(t,e,n,r,a,i){return(0,o.uX)(),(0,o.Wv)(S.I,null,{default:(0,o.k6)((()=>[(0,o.bF)(A.Py,{headers:a.headers,items:a.inventario},{"item.action":(0,o.k6)((({item:t})=>[(0,o.bF)(l.D,{onClick:e=>i.addToCart(t),color:"primary",variant:"text",icon:"mdi-cart-plus"},null,8,["onClick"])])),_:1},8,["headers","items"])])),_:1})}n(4114),n(8111),n(116),n(1701);var I=n(4373),P={data(){return{cart:[],inventario:[],headers:[{title:"Codigo",key:"codigo"},{title:"Nombre",key:"nombre"},{title:"Marca",key:"marca"},{title:"Existencia",align:"right",key:"cantidad"},{title:"Agregar",align:"center",key:"action"}]}},created(){this.getCart(),this.cargarInventario()},methods:{getCart(){const t=localStorage.getItem("cart");return t?JSON.parse(t):[]},cargarInventario(){I.A.get("https://youcodify.github.io/mi-gomera/public//inventario.json").then((t=>{this.inventario=t.data.map((t=>(t.action="",t)))}))},addToCart(t){const e=this.cart.find((e=>e.codigo===t.codigo));e?e.quantity+=t.quantity:this.cart.push(t),localStorage.setItem("cart",JSON.stringify(this.cart)),this.$emit("update-cart",this.product)}}};const N=(0,k.A)(P,[["render",E]]);var T=N,W={name:"HomeView",components:{InventarioConsulta:T}};const X=(0,k.A)(W,[["render",x]]);var D=X;const M=[{path:"/",name:"Inventario",component:D},{path:"/salida",name:"Salida",component:()=>n.e(580).then(n.bind(n,3580))},{path:"/modificar",name:"Modificar",component:()=>n.e(71).then(n.bind(n,3071))},{path:"/cart",name:"Carrito",component:()=>n.e(393).then(n.bind(n,7393))}],$=(0,F.aE)({history:(0,F.LA)(""),routes:M});var V=$;j(),(0,r.Ef)(O).use(V).use(_).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&r;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){i[t]=function(){return r[t]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+(53===t?"webfontloader":t)+"."+{53:"4314a234",71:"aa8180c6",393:"732c54f7",580:"1eb8ffae"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mi-gomera:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var s=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var d=c(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunkmi_gomera"]=self["webpackChunkmi_gomera"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(4922)}));r=n.O(r)})();
//# sourceMappingURL=app.6000f519.js.map