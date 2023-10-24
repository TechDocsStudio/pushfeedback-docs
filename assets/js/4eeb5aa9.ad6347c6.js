"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(u,".").concat(m)]||s[m]||k[m]||l;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},o="Text",i={unversionedId:"configuration/text",id:"configuration/text",title:"Text",description:"PushFeedback provides comprehensive text customization options, allowing you to align the feedback button's textual content with your company's tone or support various languages. By customizing these properties, you can ensure a consistent user experience that reflects your brand's voice or caters to your diverse user base.",source:"@site/docs/configuration/text.mdx",sourceDirName:"configuration",slug:"/configuration/text",permalink:"/configuration/text",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styles",permalink:"/configuration/styles"},next:{title:"Whitelabel",permalink:"/configuration/whitelabel"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2}],p={toc:d},s="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"Text"),(0,a.kt)("p",null,"PushFeedback provides comprehensive text customization options, allowing you to align the feedback button's textual content with your company's tone or support various languages. By customizing these properties, you can ensure a consistent user experience that reflects your brand's voice or caters to your diverse user base."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To customize the textual properties, set the respective attributes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<feedback-button>")," element in your HTML. Here's an illustrative example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<feedback-button \n  project="YOUR_PROJECT_ID"\n  email-placeholder="Enter your email"\n  modal-title="Give us your thoughts">\n  Button text\n</feedback-button>\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"The table below lists all the available properties you can override:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"email-placeholder")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Email address (optional)"),(0,a.kt)("br",null),"Placeholder text for the email input field.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"error-message")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'Please try again later."'),(0,a.kt)("br",null),"Message displayed when there's an error submitting feedback.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"modal-title-error-4-0-3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'The request URL does not match the one defined in PushFeedback for this project."'),(0,a.kt)("br",null),"Message displayed when there's a 403 error submitting feedback.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"modal-title-error-4-0-4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"We could not find the provided project id in PushFeedback."),(0,a.kt)("br",null),"Message displayed when there's a 404 error submitting feedback.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"message-placeholder")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"How could this page be more helpful?"),(0,a.kt)("br",null),"Placeholder for the feedback message input.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"modal-title")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Share your feedback"),(0,a.kt)("br",null),"Title of the feedback modal.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"modal-title-error")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Oops!"),(0,a.kt)("br",null),"Title displayed when there's an error submitting feedback.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"modal-title-success")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Thanks for your feedback!"),(0,a.kt)("br",null),"Title displayed upon successful feedback submission.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"screenshot-button-tooltip-text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Take a Screenshot"),(0,a.kt)("br",null),"Tooltip text for the screenshot button.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"screenshot-topbar-text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"SELECT AN ELEMENT ON THE PAGE"),(0,a.kt)("br",null),"Instructional text when taking a screenshot.",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"send-button-text")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default value"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Send"),(0,a.kt)("br",null),"Text for the button that submits feedback.",(0,a.kt)("br",null),(0,a.kt)("br",null))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("iframe",{height:"500",style:{width:"100%"},scrolling:"no",title:"Untitled",src:"https://codepen.io/David-Garcia-the-bashful/embed/MWzPyvM?default-tab=html%2Cresult&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/David-Garcia-the-bashful/pen/MWzPyvM"},"Untitled")," by David Garcia (",(0,a.kt)("a",{href:"https://codepen.io/David-Garcia-the-bashful"},"@David-Garcia-the-bashful"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),"."))}k.isMDXComponent=!0}}]);