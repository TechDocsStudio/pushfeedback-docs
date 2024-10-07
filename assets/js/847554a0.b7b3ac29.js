"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[4939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Jekyll"},l="Feedback widget for Jekyll",i={unversionedId:"installation/jekyll",id:"installation/jekyll",title:"Feedback widget for Jekyll",description:"Here's a step-by-step guide to help you install PushFeedback in your Jekyll project.",source:"@site/docs/installation/jekyll.md",sourceDirName:"installation",slug:"/installation/jekyll",permalink:"/installation/jekyll",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Jekyll"},sidebar:"tutorialSidebar",previous:{title:"Hugo",permalink:"/installation/hugo"},next:{title:"LearnDash",permalink:"/installation/learndash"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-jekyll"},"Feedback widget for Jekyll"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your Jekyll project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback widget for docs screenshot",src:a(2431).Z,width:"2880",height:"1576"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Jekyll project.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the PushFeedback widget into your Jekyll site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"_includes/head.html")," file (or the equivalent file that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," section in your Jekyll theme). Append the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Initialize the PushFeedback widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"_includes/footer.html")," or the specific file where you'd like the feedback button to appear. Add the following snippet just before its closing tags:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>\n')),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After making these changes, navigate back to your Jekyll project root and run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"jekyll build\n")),(0,r.kt)("p",{parentName:"li"},"Once it builds successfully, verify that the feedback button appears and functions correctly on your site."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/category/customization"},"Customization")," section."),(0,r.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://pushfeedback.com/contact"},"PushFeedback Support"),"."))}d.isMDXComponent=!0},2431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/feedback-widget-starlight-9a1578378a6a0b51139c1ac41a5a6124.png"}}]);