"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6063],{8096:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>s});var r=i(4848),t=i(8453);const s=[];function o(e){const n={admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},2203:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=i(4848),t=i(8453),s=i(8096);const o={sidebar_position:4,title:"Dependent Services"},c=void 0,d={id:"mock-apps/dependent-services/index",title:"Dependent Services",description:"This section provides an overview of the dependent services required for the United Nations Transparency Protocol (UNTP). Each service plays a crucial role in the UNTP ecosystem, and proper setup is essential for the functioning of the Mock App system.",source:"@site/versioned_docs/version-1.0.0/mock-apps/dependent-services/index.md",sourceDirName:"mock-apps/dependent-services",slug:"/mock-apps/dependent-services/",permalink:"/docs/mock-apps/dependent-services/",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/tests-untp/tree/main/versioned_docs/version-1.0.0/mock-apps/dependent-services/index.md",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Dependent Services"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/mock-apps/installation"},next:{title:"Verifiable Credential Service",permalink:"/docs/mock-apps/dependent-services/verifiable-credential-service"}},a={},l=[...s.RM,{value:"Docker Compose Setup",id:"docker-compose-setup",level:2},{value:"Service Endpoints",id:"service-endpoints",level:2},{value:"Creating an Identifier (did)",id:"creating-an-identifier-did",level:2},{value:"Additional Information",id:"additional-information",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsxs)(n.p,{children:["This section provides an overview of the dependent services required for the ",(0,r.jsx)(n.a,{href:"https://uncefact.github.io/spec-untp/",children:"United Nations Transparency Protocol (UNTP)"}),". Each service plays a crucial role in the UNTP ecosystem, and proper setup is essential for the functioning of the Mock App system."]}),"\n",(0,r.jsx)(n.p,{children:"Ensure all services are configured and running before proceeding with the Mock App configuration."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./verifiable-credential-service",children:"Verifiable Credential Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./storage-service",children:"Storage Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./identity-resolution-service",children:"Identity Resolver Service"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"docker-compose-setup",children:"Docker Compose Setup"}),"\n",(0,r.jsx)(n.p,{children:"We have created a Docker Compose file in the root directory to simplify the setup process. This Docker Compose file contains the necessary configurations to start pre-configured instances of the Verifiable Credential Service, Storage Service, a database for the VC service, and the documentation site."}),"\n",(0,r.jsx)(n.p,{children:"To use the Docker Compose setup:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ensure you have ",(0,r.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker"})," and ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})," installed on your system."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the root directory of the project where the Docker Compose file is located:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd tests-untp\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to start the services:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command will start all the services in detached mode."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To stop the services, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose down\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using this Docker Compose setup allows for a quick and easy deployment of the required services, ensuring they are properly configured and ready for use with the Mock App system."}),"\n",(0,r.jsx)(n.h2,{id:"service-endpoints",children:"Service Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"Once the services are up and running, you can access them at the following endpoints:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://localhost:3002",children:"Documentation Site"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://localhost:3332",children:"Verifiable Credential Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://localhost:3334",children:"Storage Service"})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"creating-an-identifier-did",children:["Creating an Identifier (did",":web",")"]}),"\n",(0,r.jsxs)(n.p,{children:["After setting up the services, you need to create an identifier (did",":web",") within the Verifiable Credential Service. This step is crucial for the proper functioning of the system."]}),"\n",(0,r.jsxs)(n.p,{children:["To learn how to create an identifier, please refer to the ",(0,r.jsx)(n.a,{href:"./verifiable-credential-service",children:"Verifiable Credential Service"})," page."]}),"\n",(0,r.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,r.jsx)(n.p,{children:"For detailed information about each service, please refer to their respective sections:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./verifiable-credential-service",children:"Verifiable Credential Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./storage-service",children:"Storage Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./identity-resolution-service",children:"Identity Resolver Service"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the Identity Resolver Service is not currently included in the Docker Compose setup. Please refer to the ",(0,r.jsx)(n.a,{href:"./identity-resolution-service",children:"Identity Resolver Service"})," page for more details on its setup and configuration."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);