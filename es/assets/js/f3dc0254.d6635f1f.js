"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[2874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"HTML"},i="Feedback widget for HTML sites",s={unversionedId:"installation/cdn",id:"installation/cdn",title:"Feedback widget for HTML sites",description:"Here's a step-by-step guide to help you install PushFeedback in your HTML site.",source:"@site/docs/installation/cdn.md",sourceDirName:"installation",slug:"/installation/cdn",permalink:"/es/installation/cdn",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTML"},sidebar:"tutorialSidebar",previous:{title:"Astro",permalink:"/es/installation/astro"},next:{title:"Docusaurus",permalink:"/es/installation/docusaurus"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feedback-widget-for-html-sites"},"Feedback widget for HTML sites"),(0,a.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your HTML site."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Feedback widget for docs screenshot",src:n(2431).Z,width:"2880",height:"1576"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,a.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,a.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To integrate the PushFeedback widget into your website:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert the following code within the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," section of your site's HTML:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Initialize the PushFeedback widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"><\/script>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Just before the closing ",(0,a.kt)("inlineCode",{parentName:"p"},"</body>")," tag of your website's HTML, add the following snippet:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>\n')),(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,a.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the website in a web browser to verify the feedback button appears and works correctly."))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,a.kt)("a",{parentName:"p",href:"/category/customization"},"Customization")," section."),(0,a.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,a.kt)("a",{parentName:"p",href:"https://pushfeedback.com/contact"},"PushFeedback Support"),"."))}d.isMDXComponent=!0},2431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/feedback-widget-starlight-9a1578378a6a0b51139c1ac41a5a6124.png"}}]);