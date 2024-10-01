"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[7689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Slack"},i="Slack integration",s={unversionedId:"integrations/slack",id:"integrations/slack",title:"Slack integration",description:"Using PushFeedback, you can forward user feedback directly to your preferred Slack channel using incoming webhooks.",source:"@site/docs/integrations/slack.md",sourceDirName:"integrations",slug:"/integrations/slack",permalink:"/es/integrations/slack",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Slack"},sidebar:"tutorialSidebar",previous:{title:"Make",permalink:"/es/integrations/make"},next:{title:"Teams",permalink:"/es/integrations/teams"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],p={toc:l},u="wrapper";function k(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slack-integration"},"Slack integration"),(0,a.kt)("p",null,"Using PushFeedback, you can forward user feedback directly to your preferred Slack channel using ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"incoming webhooks"),".\nThis ensures that the right team members are immediately informed, leading to faster responses and a better user experience."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Slack integration",src:n(4450).Z,width:"2880",height:"1576"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,a.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,a.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide."),(0,a.kt)("li",{parentName:"ul"},"A Slack workspace.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("p",null,"To activate the Slack integration in PushFeedback, follow the steps outlined below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("a",{parentName:"p",href:"https://app.pushfeedback.com"},"app.pushfeedback.com"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in using your account credentials.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once inside the dashboard, go to the ",(0,a.kt)("strong",{parentName:"p"},"Projects")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the project you wish to configure.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the top-right corner of the page, click on the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("strong",{parentName:"p"},"Integrations"),", select ",(0,a.kt)("strong",{parentName:"p"},"Slack"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the incoming webhook URL provided by Slack. For detailed instructions on setting up incoming webhooks in Slack, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Slack's documentation"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save your changes by clicking ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To ensure the changes are in place, go to any webpage where you've implemented the PushFeedback widget and send a feedback entry. You should receive a notification in the Slack channel associated with the webhook."))))}k.isMDXComponent=!0},4450:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/slack-integration-5504b56c9ee7296b9077011f88f78be2.png"}}]);