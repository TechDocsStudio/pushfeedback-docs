"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_label:"NPM"},i="Feedback widget for NPM projects",l={unversionedId:"installation/npm",id:"installation/npm",title:"Feedback widget for NPM projects",description:"Here's a step-by-step guide to help you install PushFeedback in your project using NPM.",source:"@site/docs/installation/npm.md",sourceDirName:"installation",slug:"/installation/npm",permalink:"/installation/npm",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"NPM"},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/installation/nextjs"},next:{title:"React",permalink:"/installation/react"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"feedback-widget-for-npm-projects"},"Feedback widget for NPM projects"),(0,n.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your project using NPM."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feedback wiget for docs screenshot",src:a(9212).Z,width:"1725",height:"937"})),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,n.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,n.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,n.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,n.kt)("li",{parentName:"ul"},"Node.js installed.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To integrate the PushFeedback widget into your site:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure you embed the styles and scripts in your primary JS or entry file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Incorporate PushFeedback styles\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.css';\n\n// Initialize the PushFeedback widget\nimport 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Just before the closing ",(0,n.kt)("inlineCode",{parentName:"p"},"</body>")," tag of your website's HTML, add the following snippet:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="light">Feedback</feedback-button>\n')),(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,n.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the website in a web browser to verify the feedback button appears and works correctly."))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,n.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,n.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,n.kt)("a",{parentName:"p",href:"https://pushfeedback.com/support"},"PushFeedback Support"),"."))}d.isMDXComponent=!0},9212:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);