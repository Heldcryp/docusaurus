"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62635],{99069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(24246),s=t(71670);let a={title:"Markdown Page tests title",description:"Markdown Page tests description",wrapperClassName:"docusaurus-markdown-example"},l="Markdown .md tests",r={type:"mdx",permalink:"/tests/pages/markdown-tests-md",source:"@site/_dogfooding/_pages tests/markdown-tests-md.md",title:"Markdown Page tests title",description:"Markdown Page tests description",frontMatter:{title:"Markdown Page tests title",description:"Markdown Page tests description",wrapperClassName:"docusaurus-markdown-example"},lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724759565e3,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/markdown-tests-md.md",unlisted:!1},o={},d=[{value:"SEO",id:"seo",level:2},{value:"Comment",id:"comment",level:2},{value:"JSX syntax",id:"jsx-syntax",level:2},{value:"Admonition",id:"admonition",level:2},{value:"Details",id:"details",level:2},{value:"Tab",id:"tab",level:2},{value:"Code block test",id:"code-block-test",level:2},{value:"Mermaid",id:"mermaid",level:2},{value:"Heading Id",id:"custom-heading-id",level:2},{value:"HTML",id:"html",level:2},{value:"Styling",id:"styling",level:3},{value:"Embeds",id:"embeds",level:3},{value:"Closed image tag:",id:"closed-image-tag",level:4},{value:"Unclosed image tag:",id:"unclosed-image-tag",level:4},{value:"Iframe",id:"iframe",level:3},{value:"Security",id:"security",level:3}];function c(e){let n={a:"a",admonition:"admonition",br:"br",browserwindow:"browserwindow",button:"button",code:"code",details:"details",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",iframe:"iframe",img:"img",mermaid:"mermaid",meta:"meta",p:"p",pre:"pre",span:"span",summary:"summary",tabitem:"tabitem",tabs:"tabs",title:"title",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"markdown-md-tests",children:"Markdown .md tests"})}),"\n",(0,i.jsx)(n.p,{children:"This file should be interpreted in a more CommonMark compliant way"}),"\n",(0,i.jsx)(n.h2,{id:"seo",children:"SEO"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'<head>\n  <title>HEAD Markdown Page tests title</title>\n  <meta name="keywords" content="cooking, blog"/>\n</head>\n'})}),"\n\n  ",(0,i.jsx)(n.title,{children:"HEAD Markdown Page tests title"}),"\n  ",(0,i.jsx)(n.meta,{name:"keywords",content:"cooking, blog"}),"\n\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["TODO unsupported (yet), see ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/9092",children:"issue"})]})}),"\n",(0,i.jsx)(n.h2,{id:"comment",children:"Comment"}),"\n",(0,i.jsx)(n.p,{children:"Html comment: "}),"\n",(0,i.jsx)(n.p,{children:"Html comment multi-line:"}),"\n",(0,i.jsx)(n.p,{children:"MDX comment: {/* comment */}"}),"\n",(0,i.jsx)(n.p,{children:"MDX comment multi-line:"}),"\n",(0,i.jsx)(n.p,{children:"{/*\ncomment\n*/}"}),"\n",(0,i.jsx)(n.h2,{id:"jsx-syntax",children:"JSX syntax"}),"\n",(0,i.jsx)(n.p,{children:"import BrowserWindow from '@site/src/components/BrowserWindow';"}),"\n",(0,i.jsxs)(n.browserwindow,{children:["\n",(0,i.jsx)(n.p,{children:"BrowserWindow content"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"export const answer = 42;"}),"\n",(0,i.jsx)(n.p,{children:"Test {xyz}"}),"\n",(0,i.jsx)(n.h2,{id:"admonition",children:"Admonition"}),"\n",(0,i.jsx)(n.p,{children:"Admonitions still work"}),"\n",(0,i.jsx)(n.admonition,{title:"title",type:"note",children:(0,i.jsx)(n.p,{children:"note"})}),"\n",(0,i.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,i.jsxs)(n.details,{children:["\n  ",(0,i.jsx)(n.summary,{children:"MD Summary"}),"\n",(0,i.jsx)(n.p,{children:"Our custom Details/Summary also works in CommonMark mode"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tab",children:"Tab"}),"\n",(0,i.jsxs)(n.tabs,{children:["\n  ",(0,i.jsx)(n.tabitem,{value:"apple",label:"Apple",default:!0,children:"\n    This is an apple \u{1F34E}\n  "}),"\n  ",(0,i.jsx)(n.tabitem,{value:"orange",label:"Orange",children:"\n    This is an orange \u{1F34A}\n  "}),"\n  ",(0,i.jsx)(n.tabitem,{value:"banana",label:"Banana",children:"\n    This is a banana \u{1F34C}\n  "}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["TODO unsupported (yet), see ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/9092",children:"issue"})]})}),"\n",(0,i.jsx)(n.h2,{id:"code-block-test",children:"Code block test"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="Title"',children:"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n      // highlight-start\n      {/* prettier-ignore */}\n      long long long long long long long long long long long long line\n      {/* prettier-ignore */}\n      // highlight-end\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live",live:"",children:"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["TODO unsupported (yet), see ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/9092",children:"issue"})]})}),"\n",(0,i.jsx)(n.h2,{id:"mermaid",children:"Mermaid"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!"}),"\n",(0,i.jsx)(n.h2,{id:"custom-heading-id",children:"Heading Id"}),"\n",(0,i.jsxs)(n.p,{children:["Custom heading syntax ",(0,i.jsx)(n.code,{children:"{#custom-heading-id}"})," still works"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,i.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.span,{style:{color:"blue"},children:"blue span"})}),"\n",(0,i.jsx)(n.p,{style:{color:"green"},children:"green p"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.button,{style:{color:"red"},children:"red button"})}),"\n",(0,i.jsxs)(n.div,{style:{border:"solid",backgroundColor:"grey",color:"lime",padding:"10px"},children:["\n  lime ",(0,i.jsx)(n.span,{style:{color:"red",margin:"10px"},children:"red"}),"\n"]}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.h3,{id:"embeds",children:"Embeds"}),"\n",(0,i.jsx)(n.h4,{id:"closed-image-tag",children:"Closed image tag:"}),"\n",(0,i.jsx)(n.img,{src:"/img/docusaurus.png"}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.h4,{id:"unclosed-image-tag",children:"Unclosed image tag:"}),"\n",(0,i.jsx)(n.img,{src:"/img/docusaurus.png"}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.h3,{id:"iframe",children:"Iframe"}),"\n",(0,i.jsx)(n.iframe,{src:"/",style:{width:"100%",height:"300px",border:"solid red thick"}}),"\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"<p>\n  When pressing this button, no alert should be printed\n  <button onClick=\"alert('unsafe');\">Click me</button>\n</p>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\n  When pressing this button, no alert should be printed\n  ",(0,i.jsx)(n.button,{onClick:"alert('unsafe');",children:"Click me"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(27378);let s={},a=i.createContext(s);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);