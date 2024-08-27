"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15237],{61132:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(24246);t(27378);var n=t(40624);function o({children:e,hidden:r,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_pnkT",t),hidden:r,children:e})}},97555:(e,r,t)=>{t.d(r,{Z:()=>j});var a=t(24246),n=t(27378),o=t(40624),s=t(75527),l=t(3620),i=t(44479),c=t(62821),u=t(52196),d=t(53589);function h(e){var r,t;return null!==(t=null===(r=n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}function p({value:e,tabValues:r}){return r.some(r=>r.value===e)}var m=t(29088);function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){var a;a=t[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}function f(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}function v({className:e,block:r,selectedValue:t,selectValue:n,tabValues:l}){let i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{let r=e.currentTarget,a=l[i.indexOf(r)].value;a!==t&&(c(r),n(a))},d=e=>{var r,t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=i.indexOf(e.currentTarget)+1;a=null!==(r=i[t])&&void 0!==r?r:i[0];break}case"ArrowLeft":{let r=i.indexOf(e.currentTarget)-1;a=null!==(t=i[r])&&void 0!==t?t:i[i.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},e),children:l.map(({value:e,label:r,attributes:n})=>(0,a.jsx)("li",f(b({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},n),{className:(0,o.Z)("tabs__item","tabItem_AQgk",null==n?void 0:n.className,{"tabs__item--active":t===e}),children:null!=r?r:e}),e))})}function g({lazy:e,children:r,selectedValue:t}){let s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===t);return e?(0,n.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))})}function y(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,o=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=null!=r?r:h(t).map(({props:{value:e,label:r,attributes:t,default:a}})=>({value:e,label:r,attributes:t,default:a}));return!function(e){let r=(0,u.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[s,m]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){var t;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=null!==(t=r.find(e=>e.default))&&void 0!==t?t:r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:o})),[b,f]=function({queryString:e=!1,groupId:r}){let t=(0,l.k6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c._X)(a),(0,n.useCallback)(e=>{var r,n;if(!a)return;let o=new URLSearchParams(t.location.search);o.set(a,e),t.replace((r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(r){var a;a=t[r],r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a})}return e}({},t.location),n=n={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))},[a,t])]}({queryString:t,groupId:a}),[v,g]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,a]=(0,d.Nk)(r);return[t,(0,n.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:a}),y=(()=>{let e=null!=b?b:v;return p({value:e,tabValues:o})?e:null})();return(0,i.Z)(()=>{y&&m(y)},[y]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),g(e)},[f,g,o]),tabValues:o}}(e);return(0,a.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(v,b({},r,e)),(0,a.jsx)(g,b({},r,e))]})}function j(e){let r=(0,m.Z)();return(0,a.jsx)(y,f(b({},e),{children:h(e.children)}),String(r))}},65050:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(24246),n=t(71670),o=t(97555),s=t(61132);let l={sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},i="\u{1F4E6} theme-search-algolia",c={id:"api/themes/theme-search-algolia",title:"\u{1F4E6} theme-search-algolia",description:"This theme provides a @theme/SearchBar component that integrates with Algolia DocSearch easily. Combined with @docusaurus/theme-classic, it provides a very easy search integration. You can read more on search documentation.",source:"@site/docs/api/themes/theme-search-algolia.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-search-algolia.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724759565e3,sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},sidebar:"api",previous:{title:"\u{1F4E6} theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"},next:{title:"\u{1F4E6} theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid"}},u={},d=[];function h(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"-theme-search-algolia",children:"\u{1F4E6} theme-search-algolia"})}),"\n",(0,a.jsxs)(r.p,{children:["This theme provides a ",(0,a.jsx)(r.code,{children:"@theme/SearchBar"})," component that integrates with Algolia DocSearch easily. Combined with ",(0,a.jsx)(r.code,{children:"@docusaurus/theme-classic"}),", it provides a very easy search integration. You can read more on ",(0,a.jsx)(r.a,{href:"/docs/search",children:"search"})," documentation."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["This theme also adds search page available at ",(0,a.jsx)(r.code,{children:"/search"})," (as swizzlable ",(0,a.jsx)(r.code,{children:"SearchPage"})," component) path with OpenSearch support. You can change this default path via ",(0,a.jsx)(r.code,{children:"themeConfig.algolia.searchPagePath"}),". Use ",(0,a.jsx)(r.code,{children:"false"})," to disable search page."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["If you have installed ",(0,a.jsx)(r.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},71670:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>s});var a=t(27378);let n={},o=a.createContext(n);function s(e){let r=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);