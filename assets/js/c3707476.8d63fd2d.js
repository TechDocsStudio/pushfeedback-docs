"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[9531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"NPM"},i="NPM",p={unversionedId:"installation/npm",id:"installation/npm",title:"NPM",description:"Integrate the PushFeedback tool into your Node.js project by installing it through the Node Package Manager (npm). Here's a step-by-step guide to help you set it up.",source:"@site/docs/installation/npm.md",sourceDirName:"installation",slug:"/installation/npm",permalink:"/installation/npm",draft:!1,tags:[],version:"current",frontMatter:{title:"NPM"},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/installation/nextjs"},next:{title:"React",permalink:"/installation/react"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npm"},"NPM"),(0,a.kt)("p",null,"Integrate the PushFeedback tool into your Node.js project by installing it through the Node Package Manager (npm). Here's a step-by-step guide to help you set it up."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,a.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/signup"},"sign up for free"),"."),(0,a.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,a.kt)("li",{parentName:"ul"},"Node.js installed.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("p",null,"To integrate the PushFeedback widget into your site:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path."))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback\n")),(0,a.kt)("p",{parentName:"li"},"This will download and install the PushFeedback package into your project."))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure you embed the styles and scripts in your primary JS or entry file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Incorporate PushFeedback styles\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\n// Initialize the PushFeedback widget\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Just before the closing ",(0,a.kt)("inlineCode",{parentName:"p"},"</body>")," tag of your website's HTML, add the following snippet:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="light">Share feedback</feedback-button>\n')),(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,a.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the website in a web browser to verify the feedback button appears and works correctly."))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Dive deeper into customization and explore additional features in our ",(0,a.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section of the documentation."))}d.isMDXComponent=!0}}]);