"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["42332"],{81507:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"tests/visibility/some-unlisteds/unlisted-subcategory/index","title":"Some Unlisteds - Subcategory index unlisted","description":"Doc with unlisted front matter","source":"@site/_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx","sourceDirName":"tests/visibility/some-unlisteds/unlisted-subcategory","slug":"/tests/visibility/some-unlisteds/unlisted-subcategory/","permalink":"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"Heldcryp","lastUpdatedAt":1729342998000,"frontMatter":{"unlisted":true,"tags":["visibility","unlisted"]},"sidebar":"sidebar"}'),i=n("24246"),s=n("80980"),o=n("78042");let l={unlisted:!0,tags:["visibility","unlisted"]},c="Some Unlisteds - Subcategory index unlisted",a={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"some-unlisteds---subcategory-index-unlisted",children:"Some Unlisteds - Subcategory index unlisted"})}),"\n",(0,i.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}m.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx)"},78042:function(e,t,n){n.d(t,{Z:()=>y});var r=n("24246");n("27378");var i=n("90496"),s=n("85921"),o=n("35363"),l=n("11660"),c=n("82095"),a=n("77827"),u=n("57922");let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m(e){var t=e.href,n=e.children;return(0,r.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){var t=e.href,n=e.icon,s=e.title,o=e.description;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){var t,n,i=e.item,o=(0,s.LM)(i);var c=(t=(0,l.c)().selectMessage,function(e){return t(e,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return o?(0,r.jsx)(f,{href:o,icon:"\uD83D\uDDC3\uFE0F",title:i.label,description:null!==(n=i.description)&&void 0!==n?n:c(i.items.length)}):null}function h(e){var t,n,i=e.item,o=(0,c.Z)(i.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",l=(0,s.xz)(null!==(t=i.docId)&&void 0!==t?t:void 0);return(0,r.jsx)(f,{href:i.href,icon:o,title:i.label,description:null!==(n=i.description)&&void 0!==n?n:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error("unknown item type ".concat(JSON.stringify(t)))}}function b(e){var t=e.className,n=(0,s.jA)();return(0,r.jsx)(y,{items:n.items,className:t})}function y(e){var t=e.items,n=e.className;if(!t)return(0,r.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i,s;r=e,i=t,s=n[t],i in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s})}return e}({},e));var o=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(function(e,t){return(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t)})})}},11660:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(27378),i=n(8156),s=["zero","one","two","few","many","other"];function o(e){return s.filter(function(t){return e.includes(t)})}var l={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e,t=(e=(0,i.Z)().i18n.currentLocale,(0,r.useMemo)(function(){try{var t,n;return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),l}},[e]));return{selectMessage:function(e,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale=".concat(n.locale,", a maximum of ").concat(n.pluralForms.length," plural forms are expected (").concat(n.pluralForms.join(","),"), but the message contains ").concat(r.length,": ").concat(e));var i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]}(n,e,t)}}}},80980:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(27378);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);