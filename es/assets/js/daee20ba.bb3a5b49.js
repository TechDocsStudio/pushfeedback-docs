"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[9191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Wordpress"},i="Feedback widget for Wordpress",s={unversionedId:"installation/wordpress",id:"installation/wordpress",title:"Feedback widget for Wordpress",description:"Here's a step-by-step guide to help you install PushFeedback in your Wordpress site.",source:"@site/docs/installation/wordpress.md",sourceDirName:"installation",slug:"/installation/wordpress",permalink:"/es/installation/wordpress",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Wordpress"},sidebar:"tutorialSidebar",previous:{title:"Vue.js",permalink:"/es/installation/vue"},next:{title:"Customization",permalink:"/es/category/customization"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"feedback-widget-for-wordpress"},"Feedback widget for Wordpress"),(0,n.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your Wordpress site."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feedback wiget for docs screenshot",src:r(9212).Z,width:"1725",height:"937"})),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,n.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,n.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,n.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide."),(0,n.kt)("li",{parentName:"ul"},"A Wordpress website.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To embed the PushFeedback widget into your WordPress site:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access the admin dashboard of your WordPress website by navigating to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://yourwebsite.com/wp-admin/"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the PushFeedback styles and scripts:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("strong",{parentName:"p"},"Appearance > Theme Editor"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the right sidebar, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"header.php")," file to edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," section.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert the following code within the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," section:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Initialize the PushFeedback widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"><\/script>\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To insert the feedback button just before the ",(0,n.kt)("inlineCode",{parentName:"p"},"</body>")," tag:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"While still in the ",(0,n.kt)("strong",{parentName:"p"},"Theme Editor"),", locate and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"footer.php")," file from the right sidebar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Just before the ",(0,n.kt)("inlineCode",{parentName:"p"},"</body>")," tag, paste the following snippet:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>\n')),(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,n.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"PushFeedback dashboard"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you've saved your changes, visit your WordPress website in a web browser. Confirm that the feedback button is visible and operational."))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,n.kt)("a",{parentName:"p",href:"/category/customization"},"Customization")," section."),(0,n.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,n.kt)("a",{parentName:"p",href:"https://pushfeedback.com/contact"},"PushFeedback Support"),"."))}u.isMDXComponent=!0},9212:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);