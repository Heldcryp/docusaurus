"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43769],{90632:(e,r,n)=>{n.d(r,{Z:()=>t});let t=n.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},61132:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(24246);n(27378);var s=n(40624);function a({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_pnkT",n),hidden:r,children:e})}},97555:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(24246),s=n(27378),a=n(40624),i=n(75527),o=n(3620),l=n(44479),c=n(62821),u=n(52196),d=n(53589);function h(e){var r,n;return null!==(n=null===(r=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function p({value:e,tabValues:r}){return r.some(r=>r.value===e)}var g=n(29088);function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function b(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function f({className:e,block:r,selectedValue:n,selectValue:s,tabValues:o}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{let r=e.currentTarget,t=o[l.indexOf(r)].value;t!==n&&(c(r),s(t))},d=e=>{var r,n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;t=null!==(r=l[n])&&void 0!==r?r:l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;t=null!==(n=l[r])&&void 0!==n?n:l[l.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e),children:o.map(({value:e,label:r,attributes:s})=>(0,t.jsx)("li",b(m({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.Z)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e))})}function j({lazy:e,children:r,selectedValue:n}){let i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===n);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,a=function(e){let{values:r,children:n}=e;return(0,s.useMemo)(()=>{let e=null!=r?r:h(n).map(({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t}));return!function(e){let r=(0,u.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,g]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:a})),[m,b]=function({queryString:e=!1,groupId:r}){let n=(0,o.k6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c._X)(t),(0,s.useCallback)(e=>{var r,s;if(!t)return;let a=new URLSearchParams(n.location.search);a.set(t,e),n.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},n.location),s=s={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r))},[t,n])]}({queryString:n,groupId:t}),[f,j]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[n,t]=(0,d.Nk)(r);return[n,(0,s.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),x=(()=>{let e=null!=m?m:f;return p({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{x&&g(x)},[x]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);g(e),b(e),j(e)},[b,j,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(f,m({},r,e)),(0,t.jsx)(j,m({},r,e))]})}function y(e){let r=(0,g.Z)();return(0,t.jsx)(x,b(m({},e),{children:h(e.children)}),String(r))}},13381:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(24246);n(27378);var s=n(6698);function a({url:e}){return(0,t.jsx)("div",{style:{padding:10},children:(0,t.jsx)(s.Z,{url:e,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,t.jsx)("iframe",{src:e,title:e,style:{display:"block",width:"100%",height:300}})})})}},6698:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(24246);n(27378);var s=n(40624);let a="dot_giz1",i="bar_rrRL";function o({children:e,minHeight:r,url:n="http://localhost:3000",style:o,bodyStyle:l}){var c,u;return(0,t.jsxs)("div",{className:"browserWindow_my1Q",style:(c=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},o),u=u={minHeight:r},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(u)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(u)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(u,e))}),c),children:[(0,t.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,t.jsxs)("div",{className:"buttons_uHc7",children:[(0,t.jsx)("span",{className:a,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:a,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:a,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,s.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:n}),(0,t.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:i}),(0,t.jsx)("span",{className:i}),(0,t.jsx)("span",{className:i})]})})]}),(0,t.jsx)("div",{className:"browserWindowBody_Idgs",style:l,children:e})]})}},3818:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(24246),s=n(27378);function a({children:e="Boom!",message:r="Boom!\nSomething bad happened, but you can try again!",cause:n}){let[a,i]=(0,s.useState)(!1);if(a)throw Error(r,{cause:n?Error(n):void 0});return(0,t.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>i(!0),children:e})}},57688:(e,r,n)=>{n.d(r,{Z:()=>t});let t=n.p+"assets/images/navbar-error-15eefab8e8d77aa4d605939956987164.jpg"},49621:(e,r,n)=>{n.d(r,{Z:()=>t});let t=n.p+"assets/images/sidebar-item-description-f38981b17f486bc09fb811c6992ef668.jpg"},81736:(e,r,n)=>{n.d(r,{Z:()=>t});let t=n.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},38260:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var t=n(24246),s=n(71670),a=n(97555),i=n(61132),o=n(6698),l=n(13381),c=n(3818);let u={title:"Docusaurus 2.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-03-23T00:00:00.000Z")},d=void 0,h={permalink:"/blog/releases/2.4",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.4/index.mdx",source:"@site/blog/releases/2.4/index.mdx",title:"Docusaurus 2.4",description:"We are happy to announce Docusaurus 2.4.",date:"2023-03-23T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:3.05,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",page:{permalink:"/blog/authors/slorber"},description:"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\n",socials:{x:"https://x.com/sebastienlorber",linkedin:"https://www.linkedin.com/in/sebastienlorber/",github:"https://github.com/slorber",newsletter:"https://thisweekinreact.com"},imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 2.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:"2023-03-23T00:00:00.000Z"},unlisted:!1,lastUpdatedAt:1724759565e3,lastUpdatedBy:"S\xe9bastien Lorber",prevItem:{title:"Upgrading frontend dependencies with confidence",permalink:"/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing"},nextItem:{title:"Docusaurus 2.3",permalink:"/blog/releases/2.3"}},p={image:n(90632).Z,authorsImageUrls:[void 0]},g=[{value:"Highlights",id:"highlights",level:2},{value:"Sidebar item description",id:"sidebar-item-description",level:3},{value:"Theme Query String",id:"theme-query-string",level:3},{value:"Remark plugin npm2yarn upgrade",id:"remark-plugin-npm2yarn-upgrade",level:3},{value:"gtag support for multiple tracking IDs",id:"gtag-support-for-multiple-tracking-ids",level:3},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function m(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["We are happy to announce ",(0,t.jsx)(r.strong,{children:"Docusaurus 2.4"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The upgrade should be easy: as explained in our ",(0,t.jsx)(r.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,t.jsx)(r.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Docusaurus blog post social card",src:n(81736).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,t.jsx)(r.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(r.h3,{id:"sidebar-item-description",children:"Sidebar item description"}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8236",children:"#8236"}),", we made it possible to provide a new ",(0,t.jsx)(r.code,{children:"description"})," attribute for docs sidebar items of type ",(0,t.jsx)(r.code,{children:"link"})," and ",(0,t.jsx)(r.code,{children:"category"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",metastring:'title="sidebars.js"',children:"[\n  {\n    type: 'link',\n    label: 'Link with description',\n    href: 'https://docusaurus.io',\n    // highlight-next-line\n    description: 'Some link description',\n  },\n  {\n    type: 'category',\n    label: 'Category with description',\n    // highlight-next-line\n    description: 'Some category description',\n    items: [],\n  },\n];\n"})}),"\n",(0,t.jsx)(r.p,{children:"These descriptions will be used in category generated index pages."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Show sidebar category generated index with custom descriptions",src:n(49621).Z+"",width:"1400",height:"691"})}),"\n",(0,t.jsx)(r.h3,{id:"theme-query-string",children:"Theme Query String"}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8708",children:"#8708"}),", we added the possibility to force Docusaurus to initialize itself in ",(0,t.jsx)(r.code,{children:"light"})," or ",(0,t.jsx)(r.code,{children:"dark"})," mode through a new ",(0,t.jsx)(r.code,{children:"docusaurus-theme"})," query-string parameter."]}),"\n",(0,t.jsx)(r.p,{children:"This is useful to ensure a consistent theme when embedding an existing Docusaurus page into an iframe or WebView."}),"\n",(0,t.jsx)(l.Z,{url:"/docs/?docusaurus-theme=light"}),"\n",(0,t.jsx)(l.Z,{url:"/docs/?docusaurus-theme=dark"}),"\n",(0,t.jsx)(r.h3,{id:"remark-plugin-npm2yarn-upgrade",children:"Remark plugin npm2yarn upgrade"}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8690",children:"#8690"}),", we upgraded our Remark plugin ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-remark-plugin-npm2yarn",children:"@docusaurus/remark-plugin-npm2yarn"})," with many conversion bug fixes, first-class support for pnpm, and the ability to register custom converters producing new tabs."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-markdown",children:"Run these commands!\n\n```bash npm2yarn\nnpm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n```\n"})}),"\n",(0,t.jsx)(o.Z,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn install\nyarn build\nyarn myCustomScript --some-arg\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm install\npnpm run build\npnpm run myCustomScript --some-arg\n"})})})]})}),"\n",(0,t.jsx)(r.h3,{id:"gtag-support-for-multiple-tracking-ids",children:"gtag support for multiple tracking IDs"}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8620",children:"#8620"})," we added support for the ",(0,t.jsx)(r.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"@docusaurus/plugin-google-gtag"})," plugin to declare multiple tracking IDs."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        gtag: {\n          trackingID: [\n            // highlight-next-line\n            'G-<YOUR-NEW-GA4-ID>',\n            // highlight-next-line\n            'UA-<YOUR-OLD-UA-ID>',\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(r.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})})," on ",(0,t.jsx)(r.strong,{children:"July 1, 2023"}),"."]}),(0,t.jsxs)(r.p,{children:["Docusaurus users should migrate to Google Analytics 4. Google ",(0,t.jsx)(r.strong,{children:"does not permit to migrate your existing Universal Analytics data"})," to your new Google Analytics 4 property."]}),(0,t.jsxs)(r.p,{children:["To preserve the continuity of your analytics, we temporarily recommend that you report events to 2 tracking IDs at the same time: the old one (",(0,t.jsx)(r.code,{children:"UA-*"}),") and new one (",(0,t.jsx)(r.code,{children:"G-*"}),"). Refer to the ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated issue"})})," for details."]})]}),"\n",(0,t.jsx)(r.h3,{id:"developer-experience",children:"Developer Experience"}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8736",children:"#8736"}),", we improved how we render error messages and added initial support to render the full causal chain of an error (see ",(0,t.jsx)(r.a,{href:"https://h3manth.com/ES2022/#error-cause",children:"ES2022 Error Cause"}),")."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To see it in action, click here: ",(0,t.jsx)(c.Z,{cause:"Probably undefined is not a function \u{1F604}"})]})}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8735",children:"#8735"})," we also made navbar-related error messages clearer to help users understand what they did wrong."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Docusaurus navbar error message screenshot",src:n(57688).Z+"",width:"1676",height:"1614"})}),"\n",(0,t.jsx)(r.h3,{id:"translations",children:"Translations"}),"\n",(0,t.jsx)(r.p,{children:"We made it possible to translate some new elements:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8677",children:"#8677"})," introduces a new ",(0,t.jsx)(r.code,{children:"process.env.DOCUSAURUS_CURRENT_LOCALE"})," (experimental) allowing you to localize your config file, including site title, tagline, announcement bar, baseUrl..."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8616",children:"#8616"})," allows to translate the navbar and footer logo alt text"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"We added default theme translation support for multiple languages:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u{1F1ED}\u{1F1FA} ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8668",children:"#8668"}),": Hungarian"]}),"\n",(0,t.jsxs)(r.li,{children:["\u{1F1F3}\u{1F1F4} ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8631",children:"#8631"}),": Norwegian (Bokm\xe5l)"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Completing theme translations is an ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,t.jsx)(r.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(r.p,{children:"Other notable changes include:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8674",children:"#8674"}),": respect ",(0,t.jsx)(r.code,{children:"prefers-reduced-motion: reduce"})," media query"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8712",children:"#8712"}),": use a navbar item of type ",(0,t.jsx)(r.code,{children:"docSidebar"})," in template"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8801",children:"#8801"}),": allow tabs children to be falsy"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8757",children:"#8757"}),": make search page react to external query-string changes"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8803",children:"#8803"}),": fix code block buttons position in RTL"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8615",children:"#8615"}),": fix color mode toggle when using dark navbar"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/pull/8699",children:"#8699"}),": fix navbar dropdown tab focus bug"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Check the ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/changelog/2.4.0",children:"2.4.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function b(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},71670:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var t=n(27378);let s={},a=t.createContext(s);function i(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);