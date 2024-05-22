"use strict";(self.webpackChunkpushfeedback=self.webpackChunkpushfeedback||[]).push([[433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>F,contentTitle:()=>E,default:()=>O,frontMatter:()=>j,metadata:()=>P,toc:()=>x});var a=n(7462),r=n(7294),o=n(3905),i=n(6010),s=n(2466),l=n(6550),u=n(1980),c=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=k({queryString:n,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function C(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(T.tabItem,a),hidden:n},t)}const j={sidebar_label:"Docusaurus"},E="Feedback widget for Docusaurus",P={unversionedId:"installation/docusaurus",id:"installation/docusaurus",title:"Feedback widget for Docusaurus",description:"Here's a step-by-step guide to help you install PushFeedback in your Docusaurus project using NPM.",source:"@site/docs/installation/docusaurus.mdx",sourceDirName:"installation",slug:"/installation/docusaurus",permalink:"/es/installation/docusaurus",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/es/installation/cdn"},next:{title:"Gatsby",permalink:"/es/installation/gatsby"}},F={},x=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Customization",id:"customization",level:2},{value:"Advanced setup: Custom placement with Swizzling",id:"advanced-setup-custom-placement-with-swizzling",level:2},{value:"Advanced setup: Multilingual support",id:"advanced-setup-multilingual-support",level:2}],D={toc:x},I="wrapper";function O(e){let{components:t,...r}=e;return(0,o.kt)(I,(0,a.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feedback-widget-for-docusaurus"},"Feedback widget for Docusaurus"),(0,o.kt)("p",null,"Here's a step-by-step guide to help you install PushFeedback in your Docusaurus project using NPM."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(9212).Z,width:"1725",height:"937"})),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A PushFeedback account. If you don't have one, ",(0,o.kt)("a",{parentName:"li",href:"https://app.pushfeedback.com/accounts/signup/"},"sign up for free"),"."),(0,o.kt)("li",{parentName:"ul"},"A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the ",(0,o.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide."),(0,o.kt)("li",{parentName:"ul"},"A Docusaurus site and Node.js installed.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To integrate the PushFeedback widget into your Docusaurus site:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,o.kt)(v,{mdxType:"Tabs"},(0,o.kt)(C,{value:"3x",label:"Docusaurus 3.x",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install docusaurus-pushfeedback\n"))),(0,o.kt)(C,{value:"2x",label:"Docusaurus 2.X",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install docusaurus-pushfeedback@0.1.7\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the plugin to your Docusaurus config file ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n    [\n        'docusaurus-pushfeedback',{\n            project: '<YOUR_PROJECT_ID>'\n        }\n    ]\n],\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,o.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your Docusaurus project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Docusaurus Feedback widget",src:n(3827).Z,width:"2850",height:"1410"})))),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"You can customize the PushFeedback widget to suit your needs. For example, you can change the widget's position, color, and more."),(0,o.kt)("p",null,"To do so, you can add any of the following ",(0,o.kt)("a",{parentName:"p",href:"/es/configuration/layout"},"configuration")," and ",(0,o.kt)("a",{parentName:"p",href:"/es/configuration/text"},"text")," options to the plugin or formatted as camelCase."),(0,o.kt)("p",null,"Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n    [\n        'docusaurus-pushfeedback',{\n            project: '<YOUR_PROJECT_ID>',\n            buttonPosition: 'center-right',\n            modalPosition: 'sidebar-right',\n            buttonStyle: 'dark',\n            modalTitle: 'Share your thoughts'\n        }\n    ]\n],\n")),(0,o.kt)("p",null,"To further customize the style of the PushFeedback widget in Docusaurus, such as altering the widget's background color, you can override specific CSS properties. This is done by defining these properties in a custom stylesheet. Here's how you can do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory, create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"css/custom.css"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"custom.css")," file, you can define your custom CSS properties. For example, to change the widget's primary color, add the following CSS rule:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},":root {\n    --feedback-primary-color: #FF0000; /* Replace #FF0000 with the hex color code of your choice */\n}\n")),(0,o.kt)("p",{parentName:"li"},"For a complete reference of properties you can modify, see the ",(0,o.kt)("a",{parentName:"p",href:"../configuration/styles"},"Styles")," documentation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file and locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"presets")," array and within it, the ",(0,o.kt)("inlineCode",{parentName:"p"},"classic")," preset configuration. Then, add a reference to your custom stylesheet in the theme configuration. It should look something like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"presets: [\n    [\n        'classic',\n        {\n        // ... other configurations ...\n        theme: {\n            customCss: require.resolve('./src/css/custom.css'), // Add this line\n        },\n        // ... other configurations ...\n        },\n    ],\n],\n")))),(0,o.kt)("h2",{id:"advanced-setup-custom-placement-with-swizzling"},"Advanced setup: Custom placement with Swizzling"),(0,o.kt)("p",null,"This alternative installation method is best for those projects that require granular control over the widget's positioning."),(0,o.kt)("p",null,"For example, you can use it to embedded PushFeedback at the end of every page as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feedback inline end page",src:n(1773).Z,width:"2231",height:"1059"})),(0,o.kt)("p",null,"To integrate the PushFeedback widget into your Docusaurus site:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback-react\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In this setup, the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus-pushfeedback")," package is not required. You can uninstall it by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm uninstall docusaurus-pushfeedback"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For Docusaurus, the best approach is to swizzle the original doc footer component to embed the PushFeedback button. Begin by using the npm run swizzle command to start the swizzle process:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm run swizzle @docusaurus/theme-classic DocItem/Footer\n")),(0,o.kt)("p",{parentName:"li"},"When prompted with the question: ",(0,o.kt)("inlineCode",{parentName:"p"},"Which swizzle action do you want to do? "),", choose ",(0,o.kt)("strong",{parentName:"p"},"Wrap"),"."),(0,o.kt)("p",{parentName:"li"},"By choosing to wrap, Docusaurus will create a wrapper component for the Footer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme")," directory. This allows you to extend the original footer component without modifying its intrinsic content.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After swizzling, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/DocItem/Footer/index.js")," in your project directory. Now, integrate the PushFeedback button:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, {useEffect} from \'react\';\nimport Footer from \'@theme-original/DocItem/Footer\';\n\nimport { FeedbackButton } from \'pushfeedback-react\';\nimport { defineCustomElements } from \'pushfeedback/loader\';\nimport \'pushfeedback/dist/pushfeedback/pushfeedback.css\';\n\nfunction FeedbackWidget() {\n    const buttonThumbsUp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>;\n    const buttonThumbsDown = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>;\n    // Replace with your PROJECT_ID\n    const projectId = \'<PROJECT_ID>\';\n\n    useEffect(() => {\n        if (typeof window !== \'undefined\') {\n            defineCustomElements(window);\n        }\n    }, []);\n\n    return(\n        <div className="feedback-widget margin-top--md margin-bottom--md">\n            <div className="margin-bottom--sm">\n                <b>Was this helpful?</b>\n            </div>\n            <span class="feedback-widget-positive">\n                <FeedbackButton project={projectId} rating="1" custom-font="True" button-style="default" modal-position="center">\n                    <button className="button button--outline button--primary button--sm" title="Yes">\n                        {buttonThumbsUp}\n                    </button>\n                </FeedbackButton>\n            </span>\n            <span class="feedback-widget-negative margin-left--sm">\n                <FeedbackButton project={projectId} rating="0" custom-font="True" button-style="default" modal-position="center">\n                    <button className="button button--outline button--primary button--sm" title="No">\n                        {buttonThumbsDown}\n                    </button>\n                </FeedbackButton>\n            </span>\n        </div>\n    );\n}\n\nexport default function FooterWrapper(props) {\n    return (\n        <>\n        <FeedbackWidget/>\n        <Footer {...props} />\n        </>\n    );\n}\n')),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT_ID>")," with your project's ID from the ",(0,o.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"PushFeedback dashboard"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your Docusaurus project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."))),(0,o.kt)("h2",{id:"advanced-setup-multilingual-support"},"Advanced setup: Multilingual support"),(0,o.kt)("p",null,"This installation method is best for projects that need to support multiple languages."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feedback widget i18n",src:n(4641).Z,width:"1413",height:"944"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before you start with this guide, your docusaurus site must have ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"i18n")," enabled.")),(0,o.kt)("p",null,"To integrate the PushFeedback widget into your Docusaurus site:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install PushFeedback:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback-react\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In this setup, the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus-pushfeedback")," package is not required. You can uninstall it by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm uninstall docusaurus-pushfeedback"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For Docusaurus, the best approach is to swizzle the original footer component to embed the PushFeedback button. This ensures the feedback button is loaded just before the closing body tag for optimal performance. Begin by using the npm run swizzle command to start the swizzle process:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm run swizzle @docusaurus/theme-classic Footer\n")),(0,o.kt)("p",{parentName:"li"},"When prompted with the question: ",(0,o.kt)("inlineCode",{parentName:"p"},"Which swizzle action do you want to do? "),", choose ",(0,o.kt)("strong",{parentName:"p"},"Wrap"),"."),(0,o.kt)("p",{parentName:"li"},"By choosing to wrap, Docusaurus will create a wrapper component for the Footer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme")," directory. This allows you to extend the original footer component without modifying its intrinsic content.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After swizzling, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/theme/Footer/index.js")," in your project directory. Replace the content with the following to integrate the PushFeedback button:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useEffect } from \'react\';\nimport Footer from \'@theme-original/Footer\';\nimport useDocusaurusContext from \'@docusaurus/useDocusaurusContext\';\nimport { FeedbackButton } from \'pushfeedback-react\';\nimport { defineCustomElements } from \'pushfeedback/loader\';\nimport \'pushfeedback/dist/pushfeedback/pushfeedback.css\';\n\nfunction FeedbackWidget() {\n    const { i18n } = useDocusaurusContext();\n    const language = i18n.currentLocale;\n    // Replace with your actual project ID\n    const projectId = \'<PROJECT_ID>\'; \n\n    // Replace with your project supported languages\n    const placeholders = {\n        en: {\n            feedbackButtonText: "Feedback",\n            emailPlaceholder: "Enter your email",\n            errorMessage: "Please try again later.",\n            modalTitleError403: "The request URL does not match the one defined in PushFeedback for this project.",\n            modalTitleError404: "We could not find the provided project id in PushFeedback.",\n            messagePlaceholder: "Comments",\n            modalTitle: "Share your feedback",\n            modalTitleError: "Oops!",\n            modalTitleSuccess: "Thanks for your feedback!",\n            screenshotButtonText: "Take a Screenshot",\n            screenshotTopbarText: "SELECT AN ELEMENT ON THE PAGE",\n            sendButtonText: "Send",\n            ratingPlaceholder: "Was this page helpful?",\n            ratingStarsPlaceholder: "How would you rate this page"\n        },\n        es: {\n            feedbackButtonText: "Sugerencias",\n            emailPlaceholder: "Ingrese su correo electr\xf3nico",\n            errorMessage: "Int\xe9ntalo de nuevo m\xe1s tarde.",\n            modalTitleError403: "La URL de solicitud no coincide con la definida en PushFeedback para este proyecto.",\n            modalTitleError404: "No pudimos encontrar el ID del proyecto proporcionado en PushFeedback.",\n            messagePlaceholder: "Comentarios",\n            modalTitle: "Danos tu opini\xf3n",\n            modalTitleError: "\xa1Vaya!",\n            modalTitleSuccess: "\xa1Gracias por tus comentarios!",\n            screenshotButtonText: "Tomar una captura de pantalla",\n            screenshotTopbarText: "SELECCIONA UN ELEMENTO EN LA P\xc1GINA",\n            sendButtonText: "Enviar",\n            ratingPlaceholder: "\xbfFue \xfatil esta p\xe1gina?",\n            ratingStarsPlaceholder: "\xbfC\xf3mo calificar\xedas esta p\xe1gina?"\n        }\n    };\n\n    useEffect(() => {\n        if (typeof window !== \'undefined\') {\n            defineCustomElements(window);\n        }\n    }, []);\n\n    const {\n        feedbackButtonText,\n        emailPlaceholder,\n        errorMessage,\n        modalTitleError403,\n        modalTitleError404,\n        messagePlaceholder,\n        modalTitle,\n        modalTitleError,\n        modalTitleSuccess,\n        screenshotButtonText,\n        screenshotTopbarText,\n        sendButtonText,\n        ratingPlaceholder,\n        ratingStarsPlaceholder\n    } = placeholders[language] || placeholders.en;\n\n    return (\n        <div className="feedback-widget">\n            <FeedbackButton\n                project={projectId}\n                email-placeholder={emailPlaceholder}\n                error-message={errorMessage}\n                modal-title-error-4-0-3={modalTitleError403}\n                modal-title-error-4-0-4={modalTitleError404}\n                message-placeholder={messagePlaceholder}\n                modal-title={modalTitle}\n                modal-title-error={modalTitleError}\n                modal-title-success={modalTitleSuccess}\n                screenshot-button-text={screenshotButtonText}\n                screenshot-topbar-text={screenshotTopbarText}\n                send-button-text={sendButtonText}\n                rating-placeholder={ratingPlaceholder}\n                rating-stars-placeholder={ratingStarsPlaceholder}\n                button-position="bottom-right"\n                button-style="dark"\n                modal-position="bottom-right"\n            >\n            {feedbackButtonText}\n            </FeedbackButton>\n        </div>\n    );\n}\n\nexport default function FooterWrapper(props) {\n    return (\n        <>\n            <Footer {...props} />\n            <FeedbackWidget />\n        </>\n    );\n}\n')),(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT_ID>")," with your project's ID from the ",(0,o.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"PushFeedback dashboard")," and the placeholder strings with your project's supported languages.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your Docusaurus project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site."))))}O.isMDXComponent=!0},3827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docusaurus-856c13de8e9d70aecaeee84bbb8b1784.png"},1773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-end-page-fc776b3d104d27d16558748a3e941379.png"},9212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},4641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-i18n-a5bf335707d2f280a1abfeff3ea03006.png"}}]);