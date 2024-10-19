"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["42022"],{83738:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>u,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"i18n/git","title":"i18n - Using git","description":"A possible translation strategy is to version control the translation files with Git (or any other VCS).","source":"@site/docs/i18n/i18n-git.mdx","sourceDirName":"i18n","slug":"/i18n/git","permalink":"/docs/i18n/git","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-git.mdx","tags":[],"version":"current","lastUpdatedBy":"Heldcryp","lastUpdatedAt":1729342998000,"frontMatter":{"id":"git","slug":"/i18n/git"},"sidebar":"docs","previous":{"title":"Tutorial","permalink":"/docs/i18n/tutorial"},"next":{"title":"Using Crowdin","permalink":"/docs/i18n/crowdin"}}'),a=r("24246"),s=r("80980"),i=r("15398"),l=r("58636");let o={id:"git",slug:"/i18n/git"},c="i18n - Using git",u={},d=[{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Prepare the Docusaurus site",id:"prepare-the-docusaurus-site",level:3},{value:"Initialize the <code>i18n</code> folder",id:"initialize-the-i18n-folder",level:3},{value:"Translate the files",id:"translate-the-files",level:3},{value:"Repeat",id:"repeat",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Markdown translations",id:"markdown-translations",level:3},{value:"JSON translations",id:"json-translations",level:3},{value:"Localize edit URLs",id:"localize-edit-urls",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"i18n---using-git",children:"i18n - Using git"})}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"possible translation strategy"})," is to ",(0,a.jsx)(n.strong,{children:"version control the translation files"})," with Git (or any other ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Version_control",children:"VCS"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,a.jsx)(n.p,{children:"This strategy has advantages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Easy to get started"}),": just commit the ",(0,a.jsx)(n.code,{children:"i18n"})," folder to Git"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Easy for developers"}),": Git, GitHub and pull requests are mainstream developer tools"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Free"})," (or without any additional cost, assuming you already use Git)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Low friction"}),": does not require signing up to an external tool"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rewarding"}),": contributors are happy to have a nice contribution history"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Using Git also present some shortcomings:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hard for non-developers"}),": they do not master Git and pull-requests"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hard for professional translators"}),": they are used to SaaS translation software and advanced features"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hard to maintain"}),": you have to keep the translated files ",(0,a.jsx)(n.strong,{children:"in sync"})," with the untranslated files"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["Some ",(0,a.jsx)(n.strong,{children:"large-scale technical projects"})," (React, Vue.js, MDN, TypeScript, Nuxt.js, etc.) use Git for translations."]}),(0,a.jsxs)(n.p,{children:["Refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3317",children:"Docusaurus i18n RFC"})," for our notes and links studying these systems."]})]}),"\n",(0,a.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,a.jsxs)(n.p,{children:["This is a walk-through of using Git to translate a newly initialized English Docusaurus website into French, and assume you already followed the ",(0,a.jsx)(n.a,{href:"/docs/i18n/tutorial",children:"i18n tutorial"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"prepare-the-docusaurus-site",children:"Prepare the Docusaurus site"}),"\n",(0,a.jsx)(n.p,{children:"Initialize a new Docusaurus site:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest website classic\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add the site configuration for the French language:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n  themeConfig: {\n    navbar: {\n      items: [\n        // ...\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // ...\n      ],\n    },\n  },\n  // ...\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Translate the homepage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Translate from '@docusaurus/Translate';\nimport Layout from '@theme/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1 style={{margin: 20}}>\n        <Translate description=\"The homepage main heading\">\n          Welcome to my Docusaurus translated site!\n        </Translate>\n      </h1>\n    </Layout>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"initialize-the-i18n-folder",children:["Initialize the ",(0,a.jsx)(n.code,{children:"i18n"})," folder"]}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command to initialize the JSON translation files for the French locale:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n\n  1 translations written at i18n/fr/code.json\n 11 translations written at i18n/fr/docusaurus-theme-classic/footer.json\n  4 translations written at i18n/fr/docusaurus-theme-classic/navbar.json\n  3 translations written at i18n/fr/docusaurus-plugin-content-docs/current.json\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"--messagePrefix '(fr) '"})," option to make the untranslated strings stand out."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Hello"})," will appear as ",(0,a.jsx)(n.code,{children:"(fr) Hello"})," and makes it clear a translation is missing."]})]}),"\n",(0,a.jsx)(n.p,{children:"Copy your untranslated Markdown files to the French folder:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n\nmkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n\nmkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add all these files to Git."}),"\n",(0,a.jsx)(n.h3,{id:"translate-the-files",children:"Translate the files"}),"\n",(0,a.jsxs)(n.p,{children:["Translate the Markdown and JSON files in ",(0,a.jsx)(n.code,{children:"i18n/fr"})," and commit the translation."]}),"\n",(0,a.jsx)(n.p,{children:"You should now be able to start your site in French and see the translations:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn run start --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run start --locale fr\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"You can also build the site locally or on your CI:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run build\n# or\nnpm run build -- --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn build\n# or\nyarn build --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n# or\npnpm run build --locale fr\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"repeat",children:"Repeat"}),"\n",(0,a.jsx)(n.p,{children:"Follow the same process for each locale you need to support."}),"\n",(0,a.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,a.jsxs)(n.p,{children:["Keeping translated files ",(0,a.jsx)(n.strong,{children:"consistent"})," with the originals ",(0,a.jsx)(n.strong,{children:"can be challenging"}),", in particular for Markdown documents."]}),"\n",(0,a.jsx)(n.h3,{id:"markdown-translations",children:"Markdown translations"}),"\n",(0,a.jsxs)(n.p,{children:["When an untranslated Markdown document is edited, it is ",(0,a.jsx)(n.strong,{children:"your responsibility to maintain the respective translated files"}),", and we unfortunately don't have a good way to help you do so."]}),"\n",(0,a.jsxs)(n.p,{children:["To keep your translated sites consistent, when the ",(0,a.jsx)(n.code,{children:"website/docs/doc1.md"})," doc is edited, you need ",(0,a.jsx)(n.strong,{children:"backport these edits"})," to ",(0,a.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"json-translations",children:"JSON translations"}),"\n",(0,a.jsxs)(n.p,{children:["To help you maintain the JSON translation files, it is possible to run again the ",(0,a.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," CLI command:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"New translations will be appended, and existing ones will not be overridden."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Reset your translations with the ",(0,a.jsx)(n.code,{children:"--override"})," option."]})}),"\n",(0,a.jsx)(n.h3,{id:"localize-edit-urls",children:"Localize edit URLs"}),"\n",(0,a.jsxs)(n.p,{children:["When the user is browsing a page at ",(0,a.jsx)(n.code,{children:"/fr/doc1"}),", the edit button will link by default to the unlocalized doc at ",(0,a.jsx)(n.code,{children:"website/docs/doc1.md"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Your translations are on Git, and you can use the ",(0,a.jsx)(n.code,{children:"editLocalizedFiles: true"})," option of the docs and blog plugins."]}),"\n",(0,a.jsxs)(n.p,{children:["The edit button will link to the localized doc at ",(0,a.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/doc1.md"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},58636:function(e,n,r){r.d(n,{Z:()=>i});var t=r("24246");r("27378");var a=r("90496");let s="tabItem_pnkT";function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:r,children:n})}},15398:function(e,n,r){r.d(n,{Z:()=>k});var t=r("24246"),a=r("27378"),s=r("90496"),i=r("54947"),l=r("3620"),o=r("844"),c=r("97486"),u=r("32263"),d=r("16971");function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r,t,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var s=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(s.push(r.value),!n||s.length!==n);i=!0);}catch(e){l=!0,t=e}finally{try{!i&&null!=a.return&&a.return()}finally{if(l)throw t}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var n,r;return null!==(r=null===(n=a.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var n,r;if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&(void 0===n?"undefined":(r=n)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)=="object"&&"value"in n)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function j(e){var n=e.value;return e.tabValues.some(function(e){return e.value===n})}var g=r("71607");let m="tabList_Qoir",b="tabItem_AQgk";function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t,a,s;t=e,a=n,s=r[n],a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s})}return e}function v(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}function y(e){var n=e.className,r=e.block,a=e.selectedValue,l=e.selectValue,o=e.tabValues,c=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=o[c.indexOf(n)].value;r!==a&&(u(n),l(r))},h=function(e){var n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,t=c.indexOf(e.currentTarget)+1;n=null!==(r=c[t])&&void 0!==r?r:c[0];break;case"ArrowLeft":var a,s=c.indexOf(e.currentTarget)-1;n=null!==(a=c[s])&&void 0!==a?a:c[c.length-1]}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:o.map(function(e){var n=e.value,r=e.label,i=e.attributes;return(0,t.jsx)("li",v(x({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},i),{className:(0,s.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=r?r:n}),n)})})}function w(e){var n=e.lazy,r=e.children,i=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=l.find(function(e){return e.props.value===i});return o?(0,a.cloneElement)(o,{className:(0,s.Z)("margin-top--md",o.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})})})}function O(e){var n=function(e){var n,r,t,s,i,h,g,m,b,x,v,y,w,O,k=e.defaultValue,S=e.queryString,N=e.groupId;var T=(r=(n=e).values,t=n.children,(0,a.useMemo)(function(){var e=null!=r?r:f(t).map(function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}});return!function(e){var n=(0,u.lx)(e,function(e,n){return e.value===n.value});if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[r,t])),I=p((0,a.useState)(function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}var a=null!==(n=t.find(function(e){return e.default}))&&void 0!==n?n:t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:k,tabValues:T})}),2),P=I[0],Z=I[1];var D=p((i=(s={queryString:void 0!==S&&S,groupId:N}).queryString,h=s.groupId,g=(0,l.k6)(),m=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:void 0!==i&&i,groupId:h}),[(0,c._X)(m),(0,a.useCallback)(function(e){if(!!m){var n,r,t=new URLSearchParams(g.location.search);t.set(m,e),g.replace((n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t,a,s;t=e,a=n,s=r[n],a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s})}return e}({},g.location),r=(r={search:t.toString()},r),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))}},[m,g])]),2),V=D[0],E=D[1];var C=p((x=(b=({groupId:N}).groupId)?"docusaurus.tab.".concat(b):null,y=(v=p((0,d.Nk)(x),2))[0],w=v[1],[y,(0,a.useCallback)(function(e){if(!!x)w.set(e)},[x,w])]),2),z=C[0],A=C[1];var L=j({value:O=null!=V?V:z,tabValues:T})?O:null;return(0,o.Z)(function(){L&&Z(L)},[L]),{selectedValue:P,selectValue:(0,a.useCallback)(function(e){if(!j({value:e,tabValues:T}))throw Error("Can't select invalid tab value=".concat(e));Z(e),E(e),A(e)},[E,A,T]),tabValues:T}}(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,t.jsx)(y,x({},n,e)),(0,t.jsx)(w,x({},n,e))]})}function k(e){var n=(0,g.Z)();return(0,t.jsx)(O,v(x({},e),{children:f(e.children)}),String(n))}},80980:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(27378);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);