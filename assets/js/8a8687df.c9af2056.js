"use strict";(self.webpackChunkmeteoscientific=self.webpackChunkmeteoscientific||[]).push([[9933],{4585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(4848),i=n(8453);const a={sidebar_position:4},s="Working With Datacake",r={id:"tutorial-extras/Datacake",title:"Working With Datacake",description:"I am trying to configure downlinks from Datacake to the console and am getting errors. Can you confirm that I should be using the V4 gRPC API, the URL and Port I should be using, and if TLS should be enabled?",source:"@site/docs/tutorial-extras/004-Datacake.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Datacake",permalink:"/docs/tutorial-extras/Datacake",draft:!1,unlisted:!1,editUrl:"https://github.com/meteoscientific/website/tree/main/docs/tutorial-extras/004-Datacake.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Working With REST-API",permalink:"/docs/tutorial-extras/working-with-REST-API"}},c={},l=[{value:"Example Configuration in Datacake:",id:"example-configuration-in-datacake",level:3},{value:"Steps to Integrate:",id:"steps-to-integrate",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"working-with-datacake",children:"Working With Datacake"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"I am trying to configure downlinks from Datacake to the console and am getting errors. Can you confirm that I should be using the V4 gRPC API, the URL and Port I should be using, and if TLS should be enabled?"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To connect your sensor from the MeteoScientific LNS console to Datacake using the V4 gRPC API, you'll need to configure the appropriate URL and port."}),"\n",(0,o.jsxs)(t.p,{children:["For the MeteoScientific console, which can be accessed at ",(0,o.jsx)(t.a,{href:"https://console.meteoscientific.com/",children:"https://console.meteoscientific.com/"}),", you'll want to use the following connection details:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"gRPC URL:"})," The standard format for gRPC connections should be ",(0,o.jsx)(t.code,{children:"https://console.meteoscientific.com:443"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Port:"})," The default port for gRPC over HTTPS is ",(0,o.jsx)(t.code,{children:"443"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"example-configuration-in-datacake",children:"Example Configuration in Datacake:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Server Address:"})," ",(0,o.jsx)(t.code,{children:"console.meteoscientific.com"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Port:"})," ",(0,o.jsx)(t.code,{children:"443"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Protocol:"})," Ensure that you're using HTTPS for the gRPC connection."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"steps-to-integrate",children:"Steps to Integrate:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Navigate to the Datacake console and open the LNS configuration section."}),"\n",(0,o.jsxs)(t.li,{children:["Enter the MeteoScientific gRPC URL (",(0,o.jsx)(t.code,{children:"https://console.meteoscientific.com:443"}),")."]}),"\n",(0,o.jsx)(t.li,{children:"Follow the usual steps in Datacake to map your sensor data and set up any required data decoders."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This setup will allow your MeteoScientific-connected sensors to send data to Datacake, where you can visualize and manage the data using Datacake's tools."}),"\n",(0,o.jsxs)(t.p,{children:["For further details on configuring LNS with Datacake, you can refer to their ",(0,o.jsx)(t.a,{href:"https://docs.datacake.de/lorawan/lns",children:"official documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);