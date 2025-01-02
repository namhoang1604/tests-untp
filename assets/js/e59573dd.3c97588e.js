"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2493],{8481:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var r=t(4848),s=t(8453);const i=[];function d(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(4848),s=t(8453),i=t(8481);const d={sidebar_position:20,title:"Conformity Credential"},o=void 0,c={id:"mock-apps/components/conformity-credential",title:"Conformity Credential",description:"Description",source:"@site/docs/mock-apps/components/conformity-credential.md",sourceDirName:"mock-apps/components",slug:"/mock-apps/components/conformity-credential",permalink:"/docs/next/mock-apps/components/conformity-credential",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/docs/mock-apps/components/conformity-credential.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Conformity Credential"},sidebar:"tutorialSidebar",previous:{title:"Local Storage Loader",permalink:"/docs/next/mock-apps/components/local-storage-loader"},next:{title:"Conformity Credential Checkbox",permalink:"/docs/next/mock-apps/components/conformity-credential-checkbox"}},l={},a=[...i.RM,{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Props",id:"props",level:3},{value:"CredentialRequestConfig",id:"credentialrequestconfig",level:3},{value:"RequestOptions",id:"requestoptions",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The ConformityCredential component allows users to request and manage conformity credentials. It displays a list of available credential requests as buttons and a table of stored credentials. The component handles the process of requesting credentials from a specified API, storing them locally, and displaying them in a table format."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "ConformityCredential",\n  "type": "Void",\n  "props": {\n    "credentialRequestConfigs": [\n      {\n        "url": "http://example.com/deforestation-free-assessment",\n        "params": {},\n        "options": {\n          "headers": [],\n          "method": "POST"\n        },\n        "credentialName": "Deforestation Free Assessment",\n        "credentialPath": "/body/credential",\n        "appOnly": "Farm"\n      },\n      {\n        "url": "http://example.com/ce",\n        "params": {},\n        "options": {\n          "headers": [],\n          "method": "GET"\n        },\n        "credentialName": "CE Marking",\n        "credentialPath": "",\n        "appOnly": "Farm"\n      },\n      {\n        "url": "http://example.com/conformity",\n        "params": {},\n        "options": {\n          "headers": [],\n          "method": "POST"\n        },\n        "credentialName": "Conformity",\n        "appOnly": "Feedlot"\n      }\n    ],\n    "storedCredentialsConfig": {\n      "url": "http://localhost:3334/v1/documents",\n      "params": {\n        "bucket": "verifiable-credentials"\n      },\n      "options": {\n        "method": "POST",\n        "headers": {\n          "Content-Type": "application/json"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:'The name of the component (should be "ConformityCredential")'}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:'The type of the component (should be "Void")'}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/component-type",children:"ComponentType"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"props"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The properties for the ConformityCredential"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/components/conformity-credential#props",children:"Props"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"credentialRequestConfigs"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"An array of credential request configurations"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/components/conformity-credential#credentialrequestconfig",children:"CredentialRequestConfig[]"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"storedCredentialsConfig"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Configuration for storing credentials"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/common/storage",children:"Storage"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"credentialrequestconfig",children:"CredentialRequestConfig"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The URL for the credential request"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"params"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Parameters for the request"}),(0,r.jsx)(n.td,{children:"Object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"Request options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/mock-apps/components/conformity-credential#requestoptions",children:"RequestOptions"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"credentialName"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The name of the credential"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"credentialPath"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The path to extract the credential from the response"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"appOnly"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The application context for the credential"}),(0,r.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"requestoptions",children:"RequestOptions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headers"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Headers for the request"}),(0,r.jsx)(n.td,{children:"Array"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"HTTP method for the request"}),(0,r.jsx)(n.td,{children:"String"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);