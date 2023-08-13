"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[7143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docusaurus"},i="Feedback widget for Docusaurus",s={unversionedId:"installation/docusaurus",id:"installation/docusaurus",title:"Docusaurus",description:"Integrate the PushFeedback tool into your Docusaurus project using the Node Package Manager (npm). Here's a step-by-step guide to help you set it up.",source:"@site/docs/installation/docusaurus.md",sourceDirName:"installation",slug:"/installation/docusaurus",permalink:"/installation/docusaurus",draft:!1,tags:[],version:"current",frontMatter:{title:"Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"CDN",permalink:"/installation/cdn"},next:{title:"Next.js",permalink:"/installation/nextjs"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Next steps",id:"next-steps",level:2}],l={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feedback-widget-for-docusaurus"},"Feedback widget for Docusaurus"),(0,o.kt)("p",null,"Integrate the PushFeedback tool into your Docusaurus project using the Node Package Manager (npm). Here's a step-by-step guide to help you set it up."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,o.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/signup"},"sign up for free"),"."),(0,o.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,o.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,o.kt)("li",{parentName:"ul"},"A Docusaurus site and Node.js installed.")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"To integrate the PushFeedback widget into your Docusaurus site:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback-react\n")),(0,o.kt)("p",{parentName:"li"},"This will download and install the PushFeedback package into your project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For Docusaurus, the best approach is to swizzle the original footer component to embed the PushFeedback button. This ensures the feedback button is loaded just before the closing body tag for optimal performance. Begin by using the npm run swizzle command to start the swizzle process:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm run swizzle @docusaurus/theme-classic Footer\n")),(0,o.kt)("p",{parentName:"li"},"When prompted with the question: ",(0,o.kt)("inlineCode",{parentName:"p"},"Do you want to --wrap the component instead? (Y/N)"),", choose ",(0,o.kt)("strong",{parentName:"p"},"Y"),' for "Yes".'),(0,o.kt)("p",{parentName:"li"},"By choosing to wrap, Docusaurus will create a wrapper component for the Footer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme")," directory. This allows you to extend the original footer component without modifying its intrinsic content.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After swizzling, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/Footer/index.js")," in your project directory. Now, integrate the PushFeedback button:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  import React, {useEffect} from 'react';\n  import Footer from '@theme-original/Footer';\n\n  import { FeedbackButton } from 'pushfeedback-react';\n  import { defineCustomElements } from 'pushfeedback/loader';\n  import 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\n  export default function FooterWrapper(props) {\n\n  useEffect(() => {\n      if (typeof window !== 'undefined') {\n      defineCustomElements(window);\n      }\n  }, []);\n\n  return (\n      <>\n      <FeedbackButton project=\"<YOUR_PROJECT_ID>\" button-position=\"bottom-right\" modal-position=\"bottom-right\" button-style=\"light\">Share feedback</FeedbackButton>\n      <Footer {...props} />\n      </>\n  )\n  }  \n")),(0,o.kt)("p",{parentName:"li"},"  Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,o.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your Docusaurus project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Dive deeper into customization and explore additional features in our ",(0,o.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section of the documentation."))}d.isMDXComponent=!0}}]);