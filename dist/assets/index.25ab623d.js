var e=Object.assign;import{d as a,r as t,u as l,a as s,b as o,w as r,c as n,e as d,f as c,F as u,g as i,h as p,p as m,i as g,o as A,j as f,t as y,k as b,v,T as h,l as x,K as w,m as k,n as C,q as S,s as B,x as I,y as P,z as E,P as U,A as M,B as O,C as K,D as Y,E as F,G as N,H as X}from"./vendor.231f06bd.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,o)=>{const r=new URL(e,l);if(self[a].moduleMap[r])return t(self[a].moduleMap[r]);const n=new Blob([`import * as m from '${r}';`,`${a}.moduleMap['${r}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){o(new Error(`Failed to import: ${e}`)),s(d)},onload(){t(self[a].moduleMap[r]),s(d)}});document.head.appendChild(d)})),self[a].moduleMap={}}}("/assets/");var T=a({setup(){const e=t(!1),a=l(),n=s(),d=o([{name:"Home",path:"/",active:!1},{name:"iOS",path:"/ios-build",active:!1},{name:"Android",path:"/android-build",active:!1},{name:"Params",path:"/param",active:!1}]);return r((()=>{d.map((e=>e.active=!1));const e=d.find((e=>e.path===n.path));e&&(e.active=!0)})),{list:d,menu:e,onClick:function(e){if(e.active)return e.active=!1,void a.push("/");d.map((e=>e.active=!1)),e.active=!0,a.push(e.path)}}}});const R=p("data-v-1fa7b505");m("data-v-1fa7b505");const V={class:"shadow-sm text-center"},G={class:"relative top-2 flex-nowrap justify-center pt-4 overflow-x-auto sm:flex"},j=c("i",{class:"fas fa-bars"},null,-1),W={class:"fixed w-full h-full z-50 top-0 bottom-0 bg-yellow-100 flex flex-col items-center justify-center"};g();const D=R(((e,a,t,l,s,o)=>{const r=n("Button");return A(),d("div",null,[c("div",V,[c("h1",{class:"cursor-pointer pt-3 text-center text-3xl font-bold text-yellow-500",onClick:a[1]||(a[1]=a=>e.$router.push("/"))},"Telegram Bot"),c("div",G,[c(r,{shadow:"bg-yellow-600",bg:"bg-yellow-500",class:"mx-1 inline-block sm:hidden",onClick:a[2]||(a[2]=a=>e.menu=!0)},{default:R((()=>[j])),_:1}),(A(!0),d(u,null,i(e.list,((a,t)=>(A(),d(r,{style:e.$route.path===a.path&&"/"!==a.path?{display:"inline-block"}:{},shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:()=>e.onClick(a),class:["mx-1 hidden sm:inline-block",{active:a.active}],key:t},{default:R((()=>[f(y(a.name),1)])),_:2},1032,["style","onClick","class"])))),128))])]),c(h,{name:"fade"},{default:R((()=>[b(c("div",W,[(A(!0),d(u,null,i(e.list,((a,t)=>(A(),d(r,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:()=>e.onClick(a)&(e.menu=!1),class:["my-4 block",{active:a.active}],key:t},{default:R((()=>[f(y(a.name),1)])),_:2},1032,["onClick","class"])))),128))],512),[[v,e.menu]])])),_:1})])}));T.render=D,T.__scopeId="data-v-1fa7b505";var z=a({name:"App",components:{Header:T}});z.render=function(e,a,t,l,s,o){const r=n("Header"),i=n("router-view");return A(),d(u,null,[c(r,{class:"bg-yellow-100 relative z-50"}),c(i,null,{default:x((({Component:e,route:a})=>[c(h,{name:"fade",mode:"out-in"},{default:x((()=>[(A(),d(w,null,[a.meta.keepAlive?(A(),d(k(e),{key:a.fullPath})):C("",!0)],1024))])),_:2},1024),c(h,{name:"fade",mode:"out-in"},{default:x((()=>[a.meta.keepAlive?C("",!0):(A(),d(k(e),{key:0}))])),_:2},1024)])),_:1})],64)};var L=a({props:{play:Boolean,pause:Boolean,timeScale:Number},setup(e,{slots:a,emit:l}){const s=o([]),n=t(null),d=new S({pause:!0,yoyo:!0,onUpdate:B((()=>{const e=n.value;if(!e)return;const{scrollHeight:a=0,offsetHeight:t=0,scrollTop:l=0}=e,s=a-t;s>0&&l!==s&&(e.scrollTop=s)}),500,{leading:!1,trailing:!0}),onComplete:()=>l("complete"),onStart:()=>l("start")});I((()=>s.value=a.default())),P((()=>d.kill())),r((()=>{const{play:a}=e;d.progress(a?0:1),a?d.play():d.pause()})),r((()=>{const{pause:a}=e;a?d.pause():d.play()})),r((()=>{const{timeScale:a}=e;d.timeScale(a)}));return E((()=>{!function(){const a=n.value,t={},l=[];for(let e=0;e<a.children.length;++e){const s=a.children[e],o=parseInt(s.getAttribute("data-delay")),r="1"===s.getAttribute("data-self");d.fromTo(s,{display:"none",x:r?30:-30,opacity:0},{display:"",opacity:1,duration:.3,x:0,delay:isNaN(o)?.5:.001*o});const n=s.getAttribute("data-remove-key");n&&Array.isArray(t[n])&&(t[n].map((e=>d.to(e,{opacity:0,duration:.3,x:-30,display:"none",delay:.5}))),l.push.apply(l,t[n]));const c=s.getAttribute("data-remove-res");if(c&&(!Array.isArray(t[c])&&(t[c]=[]),t[c].push(s)),"1"===s.getAttribute("data-keyboard-touch")){const e=s.querySelector(".keyboard-touch");e&&(d.fromTo(e,{display:"none",opacity:0},{display:"",opacity:1,duration:.2,delay:.5}),d.fromTo(e,{scale:1},{scale:.85,duration:.1,ease:U.easeOut}),d.to(e,{scale:.85,duration:.1,ease:U.easeOut}),d.to(e,{scale:1,duration:.1,ease:U.easeOut}))}"1"===s.getAttribute("data-keyboard-remove")&&(d.to(s,{opacity:0,duration:.3,x:-30,display:"none",delay:.5}),l.push(s))}d.to(l,{opacity:1,duration:.3,display:"",delay:5,x:0}),e.play?d.play():d.progress(1)}()})),{list:s,parent:n}}});L.render=function(e,a,t,l,s,o){return A(),d("div",{ref:"parent",class:["max-w-2xl w-full bg-white rounded sm:rounded-2xl p-2 sm:p-4 mx-auto box-border shadow-sm",{"h-full overflow-y-auto":e.play}]},[(A(!0),d(u,null,i(e.list.value,((e,a)=>(A(),d(k(e),{key:a})))),128))],2)};const H=o({bot:"H5_Jie_Bot",self:"Haowin"}),q=o({bot:"data:image/png;base64,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",self:"data:image/png;base64,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"}),Z=o({lovezb:{PLATFORM:"lovezb",APP_NAME:"**",APPLICATION_ID:"**",MHUI_KEY:"**",TX_KEY:"**",TX_LICENSE:"**",SCDN_KEY:"**",JPUSH_KEY:"**",UMENG_KEY:"**",GATEWAY:["http://**","http://**","http://**"]},saomaozb:{PLATFORM:"saomaozb",APP_NAME:"**",APPLICATION_ID:"**",MHUI_KEY:"**",TX_KEY:"**",TX_LICENSE:"**",SCDN_KEY:"**",JPUSH_KEY:"**",UMENG_KEY:"**",GATEWAY:["http://**","http://**","http://**"]},skyzhibo:{PLATFORM:"skyzhibo",APP_NAME:"**",APPLICATION_ID:"**",MHUI_KEY:"**",TX_KEY:"**",TX_LICENSE:"**",SCDN_KEY:"**",JPUSH_KEY:"**",UMENG_KEY:"**",GATEWAY:["http://**","http://**","http://**"]}});var Q=a({props:{self:Boolean},setup:()=>({avatar:q,name:H})});const J={class:"w-11 hidden sm:inline-block"},_={class:"font-bold text-sm"},$={class:"text-sm bg-gray-200 inline-block p-2 mt-2 rounded"};Q.render=function(e,a,t,l,s,o){return A(),d("div",{class:[{"flex-row":!e.self,"flex-row-reverse":e.self},"flex mb-5 relative"],"data-self":e.self?1:0},[c("div",J,[c("img",{class:"bg-cover w-11 h-11 rounded-full border-double border-4",src:e.self?e.avatar.self:e.avatar.bot},null,8,["src"])]),c("div",{class:["flex-1 overflow-x-auto box-border",{"text-left pl-0 sm:pl-3 pr-3 sm:pr-14":!e.self,"text-right pr-0 sm:pr-3 pl-3 sm:pl-14":e.self}]},[c("div",_,y(e.self?e.name.self:e.name.bot),1),c("div",$,[M(e.$slots,"default")]),M(e.$slots,"keyboard")],2)],10,["data-self"])};const ee={},ae={class:"keyboard-touch"};ee.render=function(e,a){return A(),d("div",ae)};const te={},le={class:"cursor-pointer text-blue-700 font-bold"};te.render=function(e,a){return A(),d("span",le,[M(e.$slots,"default")])};const se={},oe={class:"cursor-pointer text-blue-700 font-bold"};se.render=function(e,a){return A(),d("span",oe,[M(e.$slots,"default")])};var re=a({components:{UserTag:te},props:{name:String}});const ne={class:"border-l-2 text-left pl-3 border-blue-600 mb-2"},de=c("br",null,null,-1);re.render=function(e,a,t,l,s,o){const r=n("UserTag");return A(),d("div",ne,[c(r,null,{default:x((()=>[f(y(e.name),1)])),_:1}),de,M(e.$slots,"default")])};var ce=a({components:{UserTag:te},props:{filename:String},data:()=>({DownloadImage:"data:image/png;base64,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"})});const ue={class:"flex justify-center items-center pr-2 mt-2 box-border"},ie={class:"w-14 p-2 box-border"},pe={class:"flex-1"},me=c("div",null,[c("span",{class:"text-gray-500"},"987B"),f(" - "),c("span",{class:"cursor-pointer text-blue-700 font-bold"},"Download")],-1);ce.render=function(e,a,t,l,s,o){return A(),d("div",ue,[c("div",ie,[c("img",{class:"w-full h-full",src:e.DownloadImage,alt:"download"},null,8,["src"])]),c("div",pe,[c("div",null,y(e.filename),1),me])])};const ge=["------------------------","总代 ID:  lovezb","APP 名称:  **","Bundle ID:  **","美颜 Key:  **","腾讯云 Key:  **","腾讯云 LICENSE URL:  **","鉴权 Key:  **","极光 Key:  **","友盟 Key:  **","强制邀请码:  123456","------------------------"].join("\n");var Ae=a({components:{MessageBox:L,MessageItem:Q,KeyboardTouch:ee,UserTag:te,ScriptTag:se,MessageReply:re,MessageFile:ce},setup(){const a=o({play:!1,pause:!1,timeScale:1});return O((()=>{a.play&&(a.pause=!0)})),e(e({},K(a)),{onComplete:function(){a.play=!1},name:H,merchant:Z,CheckResultMessage:ge})}});const fe=p("data-v-76d7ce5a");m("data-v-76d7ce5a");const ye={class:"flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border"},be=f("/build"),ve=f(" 打包的商戶 "),he={class:"grid grid-cols-3 text-sm"},xe=f(" 請選擇邀請碼類型 "),we={class:"grid grid-cols-3 text-sm"},ke={class:"text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},Ce=f(" 固定邀請碼 "),Se=c("div",{class:"ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},"ShareInstall",-1),Be=c("div",{class:"ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},"ShareTrace",-1),Ie=f(" 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 "),Pe=f(" 123456 "),Ee=f(" 請確認資訊 "),Ue=f(" 若確認無誤請選擇平台 "),Me={class:"grid grid-cols-2 text-sm"},Oe=c("div",{class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"Android",-1),Ke={class:"cursor-pointer hover:bg-gray-300 transition-all mr-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},Ye=f("iOS "),Fe=c("div",{class:"cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"AppStore",-1),Ne=c("div",{class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"Android+iOS",-1),Xe=c("div",{class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"Cancel",-1),Te=f(" 🟢 操作成功，查看狀態請執行："),Re=c("br",null,null,-1),Ve=f("/queue_1000"),Ge=f(" iOS 打包狀態 "),je=c("br",null,null,-1);g();const We=fe(((e,a)=>{const t=n("PlayBar"),l=n("ScriptTag"),s=n("MessageItem"),o=n("UserTag"),r=n("KeyboardTouch"),p=n("MessageReply"),m=n("MessageFile"),g=n("MessageBox");return A(),d("div",ye,[c(t,{class:"h-16",play:e.play,"onUpdate:play":a[1]||(a[1]=a=>e.play=a),"time-scale":e.timeScale,"onUpdate:time-scale":a[2]||(a[2]=a=>e.timeScale=a),pause:e.pause,"onUpdate:pause":a[3]||(a[3]=a=>e.pause=a)},null,8,["play","time-scale","pause"]),c(g,{"time-scale":e.timeScale,play:e.play,pause:e.pause,onComplete:e.onComplete,class:e.play?"full-height":"auto-height"},{default:fe((()=>[c(s,{self:!0},{default:fe((()=>[c(l,null,{default:fe((()=>[be])),_:1})])),_:1}),c(s,{"data-keyboard-remove":"1","data-keyboard-touch":"1"},{keyboard:fe((()=>[c("div",he,[(A(!0),d(u,null,i(Object.keys(e.merchant),((e,a)=>(A(),d("div",{class:[{"ml-1":0!==a},"text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"]},[f(y(e)+" ",1),0===a?(A(),d(r,{key:0})):C("",!0)],2)))),256))])])),default:fe((()=>[c(o,null,{default:fe((()=>[f(y(e.name.self),1)])),_:1}),ve])),_:1}),c(s,{"data-keyboard-remove":"1","data-keyboard-touch":"1"},{keyboard:fe((()=>[c("div",we,[c("div",ke,[Ce,c(r)]),Se,Be])])),default:fe((()=>[c(o,null,{default:fe((()=>[f(y(e.name.self),1)])),_:1}),xe])),_:1}),c(s,{"data-remove-res":"code"},{default:fe((()=>[c(o,null,{default:fe((()=>[f(y(e.name.self),1)])),_:1}),Ie])),_:1}),c(s,{self:!0,"data-remove-key":"code"},{default:fe((()=>[c(p,{name:e.name.bot},{default:fe((()=>[f(y(e.name.self)+" 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 ",1)])),_:1},8,["name"]),Pe])),_:1}),c(s,{"data-remove-res":"finish"},{default:fe((()=>[c(o,null,{default:fe((()=>[f(y(e.name.self),1)])),_:1}),Ee,c("pre",null,y(e.CheckResultMessage),1)])),_:1}),c(s,{"data-remove-res":"finish","data-keyboard-touch":"1"},{keyboard:fe((()=>[c("div",Me,[Oe,c("div",Ke,[Ye,c(r)]),Fe,Ne,Xe])])),default:fe((()=>[c(o,null,{default:fe((()=>[f(y(e.name.self),1)])),_:1}),Ue])),_:1}),c(s,{"data-remove-key":"finish"},{default:fe((()=>[Te,Re,c(l,null,{default:fe((()=>[Ve])),_:1}),Ge,je,c(m,{filename:"*******.txt"},null,8,["filename"])])),_:1})])),_:1},8,["time-scale","play","pause","onComplete","class"])])}));Ae.render=We,Ae.__scopeId="data-v-76d7ce5a";const De=["------------------------","总代 ID:  saomaozb","APP 名称:  **","Bundle ID:  **","美颜 Key:  **","腾讯云 Key:  **","腾讯云 LICENSE URL:  **","鉴权 Key:  **","极光 Key:  **","友盟 Key:  **","强制邀请码:  123456","------------------------"].join("\n");var ze=a({components:{MessageBox:L,MessageItem:Q,KeyboardTouch:ee,UserTag:te,ScriptTag:se,MessageReply:re,MessageFile:ce},setup(){const a=o({play:!1,pause:!1,timeScale:1});return O((()=>{a.play&&(a.pause=!0)})),e(e({},K(a)),{onComplete:function(){a.play=!1},name:H,merchant:Z,CheckResultMessage:De})}});const Le=p("data-v-82e97ae2");m("data-v-82e97ae2");const He={class:"flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border"},qe=f("/build"),Ze=f(" 打包的商戶 "),Qe={class:"grid grid-cols-3 text-sm"},Je=f(" 請選擇邀請碼類型 "),_e={class:"grid grid-cols-3 text-sm"},$e={class:"text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},ea=f("固定邀請碼"),aa=c("div",{class:"ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},"ShareInstall",-1),ta=c("div",{class:"ml-1 text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"},"ShareTrace",-1),la=f(" 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 "),sa=f(" 123456 "),oa=f(" 請確認資訊 "),ra=f(" 若確認無誤請選擇平台 "),na={class:"grid grid-cols-2 text-sm"},da={class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},ca=f("Android"),ua=c("div",{class:"cursor-pointer hover:bg-gray-300 transition-all mr-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"iOS",-1),ia=c("div",{class:"cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"AppStore",-1),pa=c("div",{class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"Android+iOS",-1),ma=c("div",{class:"col-span-2 cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"Cancel",-1),ga=f(" 🟢 操作成功，查看狀態請執行："),Aa=c("br",null,null,-1),fa=f("/queue_1000"),ya=f(" Android 打包狀態 "),ba=c("br",null,null,-1);g();const va=Le(((e,a,t,l,s,o)=>{const r=n("PlayBar"),p=n("ScriptTag"),m=n("MessageItem"),g=n("UserTag"),b=n("KeyboardTouch"),v=n("MessageReply"),h=n("MessageFile"),x=n("MessageBox");return A(),d("div",He,[c(r,{class:"h-16",play:e.play,"onUpdate:play":a[1]||(a[1]=a=>e.play=a),"time-scale":e.timeScale,"onUpdate:time-scale":a[2]||(a[2]=a=>e.timeScale=a),pause:e.pause,"onUpdate:pause":a[3]||(a[3]=a=>e.pause=a)},null,8,["play","time-scale","pause"]),c(x,{"time-scale":e.timeScale,play:e.play,pause:e.pause,onComplete:e.onComplete,class:e.play?"full-height":"auto-height"},{default:Le((()=>[c(m,{self:!0},{default:Le((()=>[c(p,null,{default:Le((()=>[qe])),_:1})])),_:1}),c(m,{"data-keyboard-remove":"1","data-keyboard-touch":"1"},{keyboard:Le((()=>[c("div",Qe,[(A(!0),d(u,null,i(Object.keys(e.merchant),((e,a)=>(A(),d("div",{class:[{"ml-1":0!==a},"text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2 box-border"]},[f(y(e)+" ",1),1===a?(A(),d(b,{key:0})):C("",!0)],2)))),256))])])),default:Le((()=>[c(g,null,{default:Le((()=>[f(y(e.name.self),1)])),_:1}),Ze])),_:1}),c(m,{"data-keyboard-remove":"1","data-keyboard-touch":"1"},{keyboard:Le((()=>[c("div",_e,[c("div",$e,[ea,c(b)]),aa,ta])])),default:Le((()=>[c(g,null,{default:Le((()=>[f(y(e.name.self),1)])),_:1}),Je])),_:1}),c(m,{"data-remove-res":"code"},{default:Le((()=>[c(g,null,{default:Le((()=>[f(y(e.name.self),1)])),_:1}),la])),_:1}),c(m,{self:!0,"data-remove-key":"code"},{default:Le((()=>[c(v,{name:e.name.bot},{default:Le((()=>[f(y(e.name.self)+" 請使用回覆此訊息的方式輸入邀請碼，逗號分隔 ",1)])),_:1},8,["name"]),sa])),_:1}),c(m,{"data-scroll":"1","data-remove-res":"finish"},{default:Le((()=>[c(g,null,{default:Le((()=>[f(y(e.name.self),1)])),_:1}),oa,c("pre",null,y(e.CheckResultMessage),1)])),_:1}),c(m,{"data-scroll":"1","data-remove-res":"finish","data-keyboard-touch":"1"},{keyboard:Le((()=>[c("div",na,[c("div",da,[ca,c(b)]),ua,ia,pa,ma])])),default:Le((()=>[c(g,null,{default:Le((()=>[f(y(e.name.self),1)])),_:1}),ra])),_:1}),c(m,{"data-scroll":"1","data-remove-key":"finish"},{default:Le((()=>[ga,Aa,c(p,null,{default:Le((()=>[fa])),_:1}),ya,ba,c(h,{filename:"*******.txt"},null,8,["filename"])])),_:1})])),_:1},8,["time-scale","play","pause","onComplete","class"])])}));ze.render=va,ze.__scopeId="data-v-82e97ae2";const ha=["{",'  "APP_NAME": "這是 APP 名稱",','  "APPLICATION_ID": "這是 Bundle ID",','  "TX_KEY": "這是騰訊密鑰",','  "TX_LICENSE": "這是騰訊憑證地址"',"}"].join("\n"),xa=["{",'  "PLATFORM": "skyzhibo",','  "APP_NAME": "這是 APP 名稱",','  "APPLICATION_ID": "這是 Bundle ID",','  "MHUI_KEY": "**",','  "TX_KEY": "這是騰訊密鑰",','  "TX_LICENSE": "這是騰訊憑證地址",','  "SCDN_KEY": "**",','  "JPUSH_KEY": "**",','  "UMENG_KEY": "**",','  "GATEWAY": [','    "**",','    "**",','    "**"',"  ]","}"].join("\n");var wa=a({components:{MessageBox:L,MessageItem:Q,KeyboardTouch:ee,UserTag:te,ScriptTag:se,MessageReply:re,MessageFile:ce},setup(){const a=o({play:!1,pause:!1,timeScale:1});return O((()=>{a.play&&(a.pause=!0)})),e(e({},K(a)),{onComplete:function(){a.play=!1},name:H,merchant:Z,InputJSON:ha,OutputJSON:xa})}});const ka=p("data-v-39bde15e");m("data-v-39bde15e");const Ca={class:"flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border"},Sa=f("/set"),Ba=f(" 設定的商戶 "),Ia={class:"grid grid-cols-3 text-sm"},Pa=f(" 请使用回覆此訊息的方式输入 JSON 格式參考 "),Ea=f("/get"),Ua=f(),Ma=f("/params"),Oa={class:"text-left"},Ka={class:"text-left"},Ya=f(" 請確認設定資訊 "),Fa={class:"grid grid-cols-2 text-sm"},Na={class:"cursor-pointer hover:bg-gray-300 transition-all truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},Xa=f("確認"),Ta=c("div",{class:"cursor-pointer hover:bg-gray-300 transition-all ml-1 truncate flex-1 p-2 rounded bg-gray-200 mt-2 text-center"},"取消",-1),Ra=f(" 🟢 商戶 skyzhibo 資訊修改成功 ");g();const Va=ka(((e,a,t,l,s,o)=>{const r=n("PlayBar"),p=n("ScriptTag"),m=n("MessageItem"),g=n("UserTag"),b=n("KeyboardTouch"),v=n("MessageReply"),h=n("MessageFile"),x=n("MessageBox");return A(),d("div",Ca,[c(r,{class:"h-16",play:e.play,"onUpdate:play":a[1]||(a[1]=a=>e.play=a),"time-scale":e.timeScale,"onUpdate:time-scale":a[2]||(a[2]=a=>e.timeScale=a),pause:e.pause,"onUpdate:pause":a[3]||(a[3]=a=>e.pause=a)},null,8,["play","time-scale","pause"]),c(x,{"time-scale":e.timeScale,play:e.play,pause:e.pause,onComplete:e.onComplete,class:e.play?"full-height":"auto-height"},{default:ka((()=>[c(m,{self:!0},{default:ka((()=>[c(p,null,{default:ka((()=>[Sa])),_:1})])),_:1}),c(m,{"data-keyboard-remove":"1","data-keyboard-touch":"1"},{keyboard:ka((()=>[c("div",Ia,[(A(!0),d(u,null,i(Object.keys(e.merchant),((e,a)=>(A(),d("div",{class:[{"ml-1":0!==a},"text-center cursor-pointer hover:bg-gray-300 truncate p-2 rounded bg-gray-200 mt-2"]},[f(y(e)+" ",1),2===a?(A(),d(b,{key:0})):C("",!0)],2)))),256))])])),default:ka((()=>[c(g,null,{default:ka((()=>[f(y(e.name.self),1)])),_:1}),Ba])),_:1}),c(m,{"data-remove-res":"code"},{default:ka((()=>[c(g,null,{default:ka((()=>[f(y(e.name.self),1)])),_:1}),Pa,c(p,null,{default:ka((()=>[Ea])),_:1}),Ua,c(p,null,{default:ka((()=>[Ma])),_:1})])),_:1}),c(m,{self:!0,"data-remove-key":"code","data-delay":"1000"},{default:ka((()=>[c(v,{name:e.name.bot},{default:ka((()=>[f(y(e.name.self)+" 请使用回覆此訊息的方式输入 JSON 格式參考 /get /params ",1)])),_:1},8,["name"]),c("pre",Oa,[c("code",null,y(e.InputJSON),1)])])),_:1}),c(m,{"data-remove-res":"finish"},{default:ka((()=>[c("pre",Ka,[c("code",null,y(e.OutputJSON),1)])])),_:1}),c(m,{"data-remove-res":"finish","data-keyboard-touch":"1"},{keyboard:ka((()=>[c("div",Fa,[c("div",Na,[Xa,c(b)]),Ta])])),default:ka((()=>[c(g,null,{default:ka((()=>[f(y(e.name.self),1)])),_:1}),Ya])),_:1}),c(m,{"data-remove-key":"finish","data-delay":"1000"},{default:ka((()=>[Ra,c(h,{filename:"*******.txt"},null,8,["filename"])])),_:1})])),_:1},8,["time-scale","play","pause","onComplete","class"])])}));wa.render=Va,wa.__scopeId="data-v-39bde15e";const Ga={},ja={class:"flex-1 p-2 sm:p-5 text-center overflow-y-auto box-border"},Wa={class:"max-w-2xl w-full mx-auto bg-white shadow-sm rounded p-2 sm:p-5 mt-3"},Da=c("h1",{class:"text-center font-bold py-3"},"打包機器人簡易說明及範例",-1),za=c("h3",{class:"text-center text-red-500 mb-3"},"＊ 請使用主流瀏覽器瀏覽此網頁 ＊",-1),La={class:"grid grid-cols-2"},Ha={class:"pt-3 text-right px-2"},qa=f("iOS"),Za=c("div",{class:"pt-3 text-left px-2"},"蘋果打包範例",-1),Qa={class:"pt-3 text-right px-2"},Ja=f("Android"),_a=c("div",{class:"pt-3 text-left px-2"},"安卓打包範例",-1),$a={class:"pt-3 text-right px-2"},et=f("Param"),at=c("div",{class:"pt-3 text-left px-2"},"參數修改範例",-1),tt={class:"pt-3 text-right px-2"},lt=c("i",{class:"fas fa-stop"},null,-1),st=c("div",{class:"pt-3 text-left px-2"},"取消播放",-1),ot={class:"pt-3 text-right px-2"},rt=c("i",{class:"fas fa-play"},null,-1),nt=c("div",{class:"pt-3 text-left px-2"},"播放模擬訊息",-1),dt={class:"pt-3 text-right px-2"},ct=c("i",{class:"fas fa-forward"},null,-1),ut=c("div",{class:"pt-3 text-left px-2"},"加速",-1);Ga.render=function(e,a){const t=n("Button");return A(),d("div",ja,[c("div",Wa,[Da,za,c("div",La,[c("div",Ha,[c(t,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:a[1]||(a[1]=a=>e.$router.push("/ios-build"))},{default:x((()=>[qa])),_:1})]),Za,c("div",Qa,[c(t,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:a[2]||(a[2]=a=>e.$router.push("/android-build"))},{default:x((()=>[Ja])),_:1})]),_a,c("div",$a,[c(t,{shadow:"bg-yellow-600",bg:"bg-yellow-500",onClick:a[3]||(a[3]=a=>e.$router.push("/param"))},{default:x((()=>[et])),_:1})]),at,c("div",tt,[c(t,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[lt])),_:1})]),st,c("div",ot,[c(t,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[rt])),_:1})]),nt,c("div",dt,[c(t,{shadow:"bg-red-600",bg:"bg-red-500"},{default:x((()=>[ct])),_:1})]),ut])])])};const it=Y({history:F(),routes:[{path:"/",name:"HOME",meta:{keepAlive:!0},component:Ga},{path:"/ios-build",name:"IOS_BUILD",meta:{keepAlive:!0},component:Ae},{path:"/android-build",name:"ANDROID_BUILD",meta:{keepAlive:!0},component:ze},{path:"/param",name:"QA",meta:{keepAlive:!0},component:wa}]});var pt=a({props:{shadow:String,bg:String}});const mt=p("data-v-9199938e");m("data-v-9199938e");const gt={class:"opacity-0"};g();const At=mt(((e,a,t,l,s,o)=>(A(),d("div",{class:[e.shadow,"transition duration-300 text-sm select-none button select-none cursor-pointer rounded btn inline-block text-white relative px-4 shadow-md h-7"]},[c("span",gt,[M(e.$slots,"default")]),c("div",{class:[e.bg,"transition duration-300 top absolute rounded px-4 left-0 right-0 flex justify-center items-center h-7"]},[M(e.$slots,"default")],2)],2))));pt.render=At,pt.__scopeId="data-v-9199938e";const ft=a({props:{play:Boolean,pause:Boolean,timeScale:Number},setup(a,{emit:t}){const{play:l=!1,timeScale:s=1,pause:r=!1}=a,n=o({play:l,pause:r,timeScale:s});N((()=>n.play),(e=>t("update:play",e))),N((()=>n.pause),(e=>t("update:pause",e))),N((()=>n.timeScale),(e=>t("update:timeScale",e))),N((()=>a.play),(e=>{n.play=e})),N((()=>a.pause),(e=>{n.pause=e})),N((()=>a.timeScale),(e=>{n.timeScale=e}));return e(e({},K(n)),{onTimeScaleClick:function(){1===n.timeScale?n.timeScale=2:2===n.timeScale?n.timeScale=3:n.timeScale=1},onPlayClick:function(){if(!n.play)return n.play=!0,void(n.pause=!1);n.pause=!n.pause}})}}),yt={class:"flex justify-center items-center"},bt=c("i",{class:"fas fa-stop"},null,-1),vt={key:0,class:"fas fa-forward"},ht={key:1,class:"fas fa-fast-forward"};ft.render=function(e,a,t,l,s,o){const r=n("Button");return A(),d("div",yt,[c(r,{shadow:e.play?"bg-red-600":"bg-gray-600",bg:e.play?"bg-red-500":"bg-gray-500",onClick:a[1]||(a[1]=a=>e.play=!1),class:"mr-1"},{default:x((()=>[bt])),_:1},8,["shadow","bg"]),c(r,{shadow:"bg-red-600",bg:"bg-red-500",class:["mr-1",{active:e.play}],onClick:e.onPlayClick},{default:x((()=>[c("i",{class:[{"fa-play":!e.play||e.pause,"fa-pause":e.play&&!e.pause},"fas"]},null,2)])),_:1},8,["class","onClick"]),c(r,{shadow:e.play?"bg-red-600":"bg-gray-600",bg:e.play?"bg-red-500":"bg-gray-500",class:{active:e.play&&1!==e.timeScale},onClick:e.onTimeScaleClick},{default:x((()=>[3!==e.timeScale?(A(),d("i",vt)):C("",!0),3===e.timeScale?(A(),d("i",ht)):C("",!0)])),_:1},8,["shadow","bg","class","onClick"])])},X(z).component("PlayBar",ft).component("Button",pt).use(it).mount("#app");
