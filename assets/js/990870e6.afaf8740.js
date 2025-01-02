"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7329],{8481:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(4848),o=t(8453);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453),s=t(8481);const r={sidebar_position:12,title:"Feature"},c=void 0,a={id:"mock-apps/configuration/feature-config",title:"Feature",description:"Features are the building blocks of functionality within the Mock App system. Each feature is comprised of components and services which are used to compose the business logic and orchestrate services.",source:"@site/docs/mock-apps/configuration/feature-config.md",sourceDirName:"mock-apps/configuration",slug:"/mock-apps/configuration/feature-config",permalink:"/docs/next/mock-apps/configuration/feature-config",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/configuration/feature-config.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Feature"},sidebar:"tutorialSidebar",previous:{title:"App",permalink:"/docs/next/mock-apps/configuration/app-config"},next:{title:"Component",permalink:"/docs/next/mock-apps/configuration/component-config"}},d={},l=[...s.RM,{value:"Diagram",id:"diagram",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Features are the building blocks of functionality within the Mock App system. Each feature is comprised of components and services which are used to compose the business logic and orchestrate services."}),"\n",(0,i.jsx)(n.p,{children:"Features encapsulate specific functionalities or processes within an app or general feature."}),"\n",(0,i.jsx)(n.p,{children:"For example, one feature could be issuing a DPP. Where we would compose the required components, like a form and a button and then the services, like a verifiable credential service to issue the credential, storage serve to store the credential and a Identity Resolver service to register a link to the DPP given the identifier of the product."}),"\n",(0,i.jsx)(n.p,{children:"Another feature could be selling the product, and so on."}),"\n",(0,i.jsx)(n.h2,{id:"diagram",children:"Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD\n    A[Feature]\n    A --\x3e B[Name]\n    A --\x3e C[ID]\n    A --\x3e D[Components]\n    A --\x3e E[Services]\n\n    D --\x3e D1[Component 1]\n    D --\x3e D2[Component 2]\n\n    E --\x3e E1[Service 1]\n    E --\x3e E2[Service 2]"}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The name of the feature (Displayed on buttons to access the feature within the respective mock app and used to construct the path to the feature)"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The id of the feature"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"components"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"A collection of components used in the feature"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/mock-apps/configuration/component-config",children:"Component"}),"[]"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"services"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"A collection of services used in the feature"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/mock-apps/configuration/service-config",children:"Service"}),"[]"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Issue DPP",\n  "id": "produce_product",\n  "components": [],\n  "services": []\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);