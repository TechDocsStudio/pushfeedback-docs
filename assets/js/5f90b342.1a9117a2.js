"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Next.js"},i="Feedback widget for Next.js",p={unversionedId:"installation/nextjs",id:"installation/nextjs",title:"Feedback widget for Next.js",description:"Here's a step-by-step guide to help you install PushFeedback in your Next.js project using NPM.",source:"@site/docs/installation/nextjs.md",sourceDirName:"installation",slug:"/installation/nextjs",permalink:"/installation/nextjs",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Next.js"},sidebar:"tutorialSidebar",previous:{title:"MkDocs",permalink:"/installation/mkdocs"},next:{title:"NPM",permalink:"/installation/npm"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-nextjs"},"Feedback widget for Next.js"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your Next.js project using NPM."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(9212).Z,width:"1725",height:"937"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Next.js application and Node.js installed.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the PushFeedback widget into your Next.js site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback-react\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're using yarn as your package manager, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add pushfeedback-react")," instead of the npm command above.")),(0,r.kt)("p",{parentName:"li"},"This will download and install the PushFeedback package into your project."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a wrapper for the feedback button by creating a file under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"components/pushfeedback.tsx")," and paste the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React, { useEffect } from 'react';\nimport { FeedbackButton } from 'pushfeedback-react';\nimport { JSX, defineCustomElements } from 'pushfeedback/loader';\nimport { StyleReactProps } from 'pushfeedback-react/dist/types/react-component-lib/interfaces';\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\nconst DynamicFeedbackButtonComponent = (props: React.JSX.IntrinsicAttributes & JSX.FeedbackButton & Omit<React.HTMLAttributes<HTMLFeedbackButtonElement>, \"style\"> & StyleReactProps & React.RefAttributes<HTMLFeedbackButtonElement>) => {\nuseEffect(() => {\n    defineCustomElements(window);\n}, []);\n\nreturn <FeedbackButton {...props} />;\n};\n\nexport default DynamicFeedbackButtonComponent;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the component where you wish to display the feedback button (often ",(0,r.kt)("inlineCode",{parentName:"p"},"_pages/app.tsx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app/layout.tsx"),"), include it shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\'use client\'\nimport dynamic from \'next/dynamic\';\n\nexport default function Banner() {\n\nconst DynamicFeedbackButton = dynamic(() => import(\'@/components/utils/pushfeedback\'), {\n    ssr: false,\n});  \n\nreturn (\n<div className="App">\n{/* Other components and content */}\n<DynamicFeedbackButton project="c2syqqm916" button-position="bottom-right" modal-position="bottom-right" button-style="light" custom-font="true">Feedback</DynamicFeedbackButton>\n</div>\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your Next.js app by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,r.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://pushfeedback.com/support"},"PushFeedback Support"),"."))}d.isMDXComponent=!0},9212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);