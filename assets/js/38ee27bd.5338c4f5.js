"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[6042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"MkDocs"},i="Feedback widget for MkDocs",s={unversionedId:"installation/mkdocs",id:"installation/mkdocs",title:"Feedback widget for MkDocs",description:"Here's a step-by-step guide to help you install PushFeedback in your MkDocs project.",source:"@site/docs/installation/mkdocs.md",sourceDirName:"installation",slug:"/installation/mkdocs",permalink:"/installation/mkdocs",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"MkDocs"},sidebar:"tutorialSidebar",previous:{title:"LearnDash",permalink:"/installation/learndash"},next:{title:"Next.js",permalink:"/installation/nextjs"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-mkdocs"},"Feedback widget for MkDocs"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your MkDocs project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(9212).Z,width:"1725",height:"937"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A MkDocs project.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the PushFeedback widget into your MkDocs site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to your docs folder and locate the ",(0,r.kt)("inlineCode",{parentName:"p"},"overrides")," directory (create one if it doesn't exist).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the overrides directory, create or edit the file named ",(0,r.kt)("inlineCode",{parentName:"p"},"base.html"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The file names of the templates to override and the block names you need to override might be different, depending on your theme. This example is specifically for the Material for MkDocs theme. Always refer to your theme's documentation or source templates to ensure accurate customization."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In this ",(0,r.kt)("inlineCode",{parentName:"p"},"base.html"),", extend the base template and override the necessary sections. Here's what you should add:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "base.html" %}\n\n{% block extrahead %}\n\x3c!-- PushFeedback styles --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">\n\n\x3c!-- PushFeedback script as ES6 module --\x3e\n<script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"><\/script>\n{% endblock %}\n\n{% block content %}\n{{ super() }}\n\n\x3c!-- Feedback button --\x3e\n<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>\n{% endblock %}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure your ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdocs.yml")," points to the overrides directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"theme:\n    name: 'material'\n    custom_dir: 'docs/overrides'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build your MkDocs project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mkdocs build\n")),(0,r.kt)("p",{parentName:"li"},"Once it builds successfully, verify that the feedback button appears and functions correctly on your site."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/category/customization"},"Customization")," section."),(0,r.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://pushfeedback.com/contact"},"PushFeedback Support"),"."))}u.isMDXComponent=!0},9212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);