"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Vue.js"},i="Feedback widget for Vue.js",p={unversionedId:"installation/vue",id:"installation/vue",title:"Feedback widget for Vue.js",description:"Here's a step-by-step guide to help you install PushFeedback in your Vue.js project using NPM.",source:"@site/docs/installation/vue.md",sourceDirName:"installation",slug:"/installation/vue",permalink:"/installation/vue",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Vue.js"},sidebar:"tutorialSidebar",previous:{title:"Sphinx",permalink:"/installation/sphinx"},next:{title:"Wordpress",permalink:"/installation/wordpress"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-vuejs"},"Feedback widget for Vue.js"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your Vue.js project using NPM."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback wiget for docs screenshot",src:a(9212).Z,width:"2847",height:"1410"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Vue.js project and Node.js installed.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the PushFeedback widget into your Vue.js site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your main Vue component or the desired Vue component where you want the feedback widget to appear. Then, incorporate the PushFeedback styles and scripts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script>\n// Incorporate PushFeedback styles\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\n// Initialize the PushFeedback widget\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';\n<\/script>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the template section of your Vue component, add the following snippet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n    \x3c!-- Rest of your component\'s template --\x3e\n\n    <feedback-button \n        project="<YOUR_PROJECT_ID>" \n        button-position="bottom-right" \n        modal-position="bottom-right" \n        button-style="light">\n        Feedback\n    </feedback-button>\n</template>\n')),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After making these changes, navigate back to your Vue.js project root and run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm run serve\n")),(0,r.kt)("p",{parentName:"li"},"Open the website in a web browser to verify that the feedback button appears and works correctly."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,r.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://pushfeedback.com/support"},"PushFeedback Support"),"."))}d.isMDXComponent=!0},9212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/feedback-widget-docs-3e08ad4ca155497973463e6ab9722389.png"}}]);