var e=Object.assign;import{d as t,r as a,a as s,w as l,u as o,b as n,c as i,e as r,F as c,f as d,g as p,p as u,h as m,i as f,o as b,j as h,t as v,k as g,v as y,T as w,l as x,K as k,m as _,n as C,q as S,s as $,x as A,y as B,z as E,A as P,V as j}from"./vendor.be89e6a3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return a(self[t].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),l(r)},onload(){a(self[t].moduleMap[n]),l(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/Haowin-ZB-Telegram-Bot-Desc/assets/");var L=t({setup(){const e=a(!1),t=o(),i=n(),r=s([{name:"Home",path:"/",active:!1},{name:"iOS",path:"/ios-build",active:!1},{name:"Android",path:"/android-build",active:!1},{name:"Params",path:"/param",active:!1}]);return l((()=>{r.map((e=>e.active=!1));const e=r.find((e=>e.path===i.path));e&&(e.active=!0)})),{list:r,menu:e,onClick:function(e){if(e.active)return e.active=!1,void t.push("/");r.map((e=>e.active=!1)),e.active=!0,t.push(e.path)}}}});const O=p("data-v-1fa7b505");u("data-v-1fa7b505");const R={class:"shadow-sm text-center"},I={class:"relative top-2 flex-nowrap justify-center pt-4 overflow-x-auto sm:flex"},D=r("i",{class:"fas fa-bars"},null,-1),T={class:"fixed w-full h-full z-50 top-0 bottom-0 bg-yellow-100 flex flex-col items-center justify-center"};m();const U=O(((e,t,a,s,l,o)=>{const n=f("Button");return b(),i("div",null,[r("div",R,[r("h1",{class:"cursor-pointer pt-3 text-center text-3xl font-bold text-yellow-500",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},"Telegram Bot"),r("div",I,[r(n,{shadow:"bg-yellow-600",bg:"bg-yellow-500",class:"mx-1 inline-block sm:hidden",onClick:t[2]||(t[2]=t=>e.menu=!0)},{default:O((()=>[D])),_:1}),(b(!0),i(c,null,d(e.list,((t,a)=>(b(),i(n,{style:e.$route.path===t.path&&"/"!==t.path?{display:"inline-block"}:{},shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:()=>e.onClick(t),class:["mx-1 hidden sm:inline-block",{active:t.active}],key:a},{default:O((()=>[h(v(t.name),1)])),_:2},1032,["style","onClick","class"])))),128))])]),r(w,{name:"fade"},{default:O((()=>[g(r("div",T,[(b(!0),i(c,null,d(e.list,((t,a)=>(b(),i(n,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:()=>e.onClick(t)&(e.menu=!1),class:["my-4 block",{active:t.active}],key:a},{default:O((()=>[h(v(t.name),1)])),_:2},1032,["onClick","class"])))),128))],512),[[y,e.menu]])])),_:1})])}));L.render=U,L.__scopeId="data-v-1fa7b505";var M=t({name:"App",components:{Header:L},mounted(){const e={};this.$router.beforeEach((t=>{e[t.path]||this.$Progress.start()})),this.$router.afterEach((t=>{e[t.path]||(e[t.path]=1,this.$Progress.finish())}))}});let H;M.render=function(e,t,a,s,l,o){const n=f("Header"),d=f("router-view"),p=f("vue-progress-bar");return b(),i(c,null,[r(n,{class:"bg-yellow-100 relative z-50"}),r(d,null,{default:x((({Component:e,route:t})=>[r(w,{name:"fade",mode:"out-in"},{default:x((()=>[(b(),i(k,null,[t.meta.keepAlive?(b(),i(_(e),{key:t.fullPath})):C("",!0)],1024))])),_:2},1024),r(w,{name:"fade",mode:"out-in"},{default:x((()=>[t.meta.keepAlive?C("",!0):(b(),i(_(e),{key:0}))])),_:2},1024)])),_:1}),r(p)],64)};const V={},z=function(e,t){if(!t)return e();if(void 0===H){const e=document.createElement("link").relList;H=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in V)return;V[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":H,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},F={},q={class:"flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border"},N={class:"max-w-2xl w-full mx-auto bg-white shadow-sm rounded p-2 sm:p-5 mt-3"},K=r("h1",{class:"text-center font-bold py-3"},"打包機器人簡易說明及範例",-1),Q=r("h3",{class:"text-center text-red-500 mb-3"},"＊ 請使用主流瀏覽器瀏覽此網頁 ＊",-1),W={class:"grid grid-cols-2"},Z={class:"pt-3 text-right px-2"},G=h("iOS"),J=r("div",{class:"pt-3 text-left px-2"},"蘋果打包範例",-1),X={class:"pt-3 text-right px-2"},Y=h("Android"),ee=r("div",{class:"pt-3 text-left px-2"},"安卓打包範例",-1),te={class:"pt-3 text-right px-2"},ae=h("Param"),se=r("div",{class:"pt-3 text-left px-2"},"參數修改範例",-1),le={class:"pt-3 text-right px-2"},oe=r("i",{class:"fas fa-stop"},null,-1),ne=r("div",{class:"pt-3 text-left px-2"},"取消播放",-1),ie={class:"pt-3 text-right px-2"},re=r("i",{class:"fas fa-play"},null,-1),ce=r("div",{class:"pt-3 text-left px-2"},"播放模擬訊息",-1),de={class:"pt-3 text-right px-2"},pe=r("i",{class:"fas fa-forward"},null,-1),ue=r("div",{class:"pt-3 text-left px-2"},"加速",-1);F.render=function(e,t){const a=f("Button");return b(),i("div",q,[r("div",N,[K,Q,r("div",W,[r("div",Z,[r(a,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:t[1]||(t[1]=t=>e.$router.push("/ios-build"))},{default:x((()=>[G])),_:1})]),J,r("div",X,[r(a,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:t[2]||(t[2]=t=>e.$router.push("/android-build"))},{default:x((()=>[Y])),_:1})]),ee,r("div",te,[r(a,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:t[3]||(t[3]=t=>e.$router.push("/param"))},{default:x((()=>[ae])),_:1})]),se,r("div",le,[r(a,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[oe])),_:1})]),ne,r("div",ie,[r(a,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[re])),_:1})]),ce,r("div",de,[r(a,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[pe])),_:1})]),ue])])])};const me=[{path:"/",name:"HOME",meta:{keepAlive:!0},component:F},{path:"/ios-build",name:"IOS_BUILD",meta:{keepAlive:!0},component:()=>z((()=>__import__("./iOSBuild.378eed88.js")),["/Haowin-ZB-Telegram-Bot-Desc/assets/iOSBuild.378eed88.js","/Haowin-ZB-Telegram-Bot-Desc/assets/iOSBuild.053deb9b.css","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.95067a84.js","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.830f707c.css","/Haowin-ZB-Telegram-Bot-Desc/assets/vendor.be89e6a3.js"])},{path:"/android-build",name:"ANDROID_BUILD",meta:{keepAlive:!0},component:()=>z((()=>__import__("./AndroidBuild.8df9178d.js")),["/Haowin-ZB-Telegram-Bot-Desc/assets/AndroidBuild.8df9178d.js","/Haowin-ZB-Telegram-Bot-Desc/assets/AndroidBuild.c06c4779.css","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.95067a84.js","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.830f707c.css","/Haowin-ZB-Telegram-Bot-Desc/assets/vendor.be89e6a3.js"])},{path:"/param",name:"QA",meta:{keepAlive:!0},component:()=>z((()=>__import__("./Param.dda3f353.js")),["/Haowin-ZB-Telegram-Bot-Desc/assets/Param.dda3f353.js","/Haowin-ZB-Telegram-Bot-Desc/assets/Param.e9f53bed.css","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.95067a84.js","/Haowin-ZB-Telegram-Bot-Desc/assets/MessageFile.830f707c.css","/Haowin-ZB-Telegram-Bot-Desc/assets/vendor.be89e6a3.js"])}],fe=S({history:$(),routes:me});var be=t({props:{shadow:String,bg:String}});const he=p("data-v-9199938e");u("data-v-9199938e");const ve={class:"opacity-0"};m();const ge=he(((e,t,a,s,l,o)=>(b(),i("div",{class:[e.shadow,"transition duration-300 text-sm select-none button select-none cursor-pointer rounded btn inline-block text-white relative px-4 shadow-md h-7"]},[r("span",ve,[A(e.$slots,"default")]),r("div",{class:[e.bg,"transition duration-300 top absolute rounded px-4 left-0 right-0 flex justify-center items-center h-7"]},[A(e.$slots,"default")],2)],2))));be.render=ge,be.__scopeId="data-v-9199938e";const ye=t({props:{play:Boolean,pause:Boolean,timeScale:Number},setup(t,{emit:a}){const{play:l=!1,timeScale:o=1,pause:n=!1}=t,i=s({play:l,pause:n,timeScale:o});B((()=>i.play),(e=>a("update:play",e))),B((()=>i.pause),(e=>a("update:pause",e))),B((()=>i.timeScale),(e=>a("update:timeScale",e))),B((()=>t.play),(e=>{i.play=e})),B((()=>t.pause),(e=>{i.pause=e})),B((()=>t.timeScale),(e=>{i.timeScale=e}));return e(e({},E(i)),{onTimeScaleClick:function(){1===i.timeScale?i.timeScale=2:2===i.timeScale?i.timeScale=3:i.timeScale=1},onPlayClick:function(){if(!i.play)return i.play=!0,void(i.pause=!1);i.pause=!i.pause}})}}),we={class:"flex justify-center items-center"},xe=r("i",{class:"fas fa-stop"},null,-1),ke={key:0,class:"fas fa-forward"},_e={key:1,class:"fas fa-fast-forward"};ye.render=function(e,t,a,s,l,o){const n=f("Button");return b(),i("div",we,[r(n,{shadow:e.play?"bg-red-600":"bg-gray-600",bg:e.play?"bg-red-500":"bg-gray-500",onClick:t[1]||(t[1]=t=>e.play=!1),class:"mr-1"},{default:x((()=>[xe])),_:1},8,["shadow","bg"]),r(n,{shadow:"bg-red-600",bg:"bg-red-500",class:["mr-1",{active:e.play}],onClick:e.onPlayClick},{default:x((()=>[r("i",{class:[{"fa-play":!e.play||e.pause,"fa-pause":e.play&&!e.pause},"fas"]},null,2)])),_:1},8,["class","onClick"]),r(n,{shadow:e.play?"bg-red-600":"bg-gray-600",bg:e.play?"bg-red-500":"bg-gray-500",class:{active:e.play&&1!==e.timeScale},onClick:e.onTimeScaleClick},{default:x((()=>[3!==e.timeScale?(b(),i("i",ke)):C("",!0),3===e.timeScale?(b(),i("i",_e)):C("",!0)])),_:1},8,["shadow","bg","class","onClick"])])},P(M).component("PlayBar",ye).component("Button",be).use(j,{color:"#ffb000",thickness:"3px",transition:{speed:"0.6s",opacity:"0.6s",termination:300}}).use(fe).mount("#app");
