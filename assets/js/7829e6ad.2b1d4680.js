"use strict";(self.webpackChunkmeteoscientific=self.webpackChunkmeteoscientific||[]).push([[3787],{7532:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=n(4848),s=n(8453);const o={sidebar_position:5},c="Class C Devices",r={id:"tutorial-basics/class-D-device",title:"Class C Devices",description:"Introduction",source:"@site/docs/tutorial-basics/class-D-device.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/class-D-device",permalink:"/website/docs/tutorial-basics/class-D-device",draft:!1,unlisted:!1,editUrl:"https://github.com/meteoscientific/website/tree/main/docs/tutorial-basics/class-D-device.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Add A Device",permalink:"/website/docs/tutorial-basics/adding-a-device"},next:{title:"Setting Up Metrics & Decoders",permalink:"/website/docs/tutorial-basics/metrics-on-chirpstack"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"What is a Class C Device?",id:"what-is-a-class-c-device",level:2},{value:"Step 1: Setting Up the Class C Device",id:"step-1-setting-up-the-class-c-device",level:2},{value:"Plugging in the Device",id:"plugging-in-the-device",level:3},{value:"Step 2: Accessing the ChirpStack Console",id:"step-2-accessing-the-chirpstack-console",level:2},{value:"Step 3: Adding a Device Profile",id:"step-3-adding-a-device-profile",level:2},{value:"Step 4: Creating an Application",id:"step-4-creating-an-application",level:2},{value:"Step 5: Onboarding the Device",id:"step-5-onboarding-the-device",level:2},{value:"Step 6: Connecting the Device",id:"step-6-connecting-the-device",level:2},{value:"Step 7: Changing Device Colors",id:"step-7-changing-device-colors",level:2},{value:"Manual Method",id:"manual-method",level:3},{value:"Automating Color Changes",id:"automating-color-changes",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"class-c-devices",children:"Class C Devices"})}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"Welcome! In this guide, we\u2019ll walk you through the process of onboarding a Class C device onto the Helium Network and into the MeteoScientific ChirpStack console. We\u2019ll also cover the basics of using a Class C device."}),"\n",(0,t.jsx)(i.h2,{id:"what-is-a-class-c-device",children:"What is a Class C Device?"}),"\n",(0,t.jsxs)(i.p,{children:["A Class C device is designed for ",(0,t.jsx)(i.strong,{children:"c"}),"ontinuous listening. It remains in a listening state, ready to receive signals from the Helium Network. In this guide, we will use the ",(0,t.jsx)(i.strong,{children:"Kuando Busy Light"})," as our Class C device. This device can change colors based on the signals it receives from the network."]}),"\n",(0,t.jsx)(i.h2,{id:"step-1-setting-up-the-class-c-device",children:"Step 1: Setting Up the Class C Device"}),"\n",(0,t.jsx)(i.h3,{id:"plugging-in-the-device",children:"Plugging in the Device"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Plug in the Device:"})," Connect your Busy Light to a power source using a USB cable. Ensure it remains powered continuously, as Class C devices require constant power."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Initial Indicators:"})," Upon plugging in, the Busy Light will flash blue and then turn soft yellow. Once it connects to the network, it will turn green, indicating it\u2019s ready to go."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-2-accessing-the-chirpstack-console",children:"Step 2: Accessing the ChirpStack Console"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Log into ChirpStack:"})," Visit ",(0,t.jsx)(i.a,{href:"https://console.meteoscientific.com",children:"console.meteoscientific.com"})," and log in with your MeteoScientific account. If you don\u2019t have an account, you can sign up and receive 400 free DC for testing and onboarding devices."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-3-adding-a-device-profile",children:"Step 3: Adding a Device Profile"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Navigate to Device Profiles:"}),' Go to the "Device Profiles" section.']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Add Device Profile:"}),' Click on "Add Device Profile" and select the template for the ',(0,t.jsx)(i.strong,{children:"Quando Busy Light"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Set Firmware Version:"})," Choose the appropriate firmware version (e.g., ",(0,t.jsx)(i.code,{children:"us915"}),")."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Review Information:"})," Ensure the device name, description, and FPort (set to 15) are correct."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Submit:"}),' Click "Submit" to save the device profile.']}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-4-creating-an-application",children:"Step 4: Creating an Application"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Add an Application:"}),' Navigate to the "Applications" section and click on "Add Application."']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Name the Application:"})," For example, you can name it ",(0,t.jsx)(i.code,{children:"Busy Light Office"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Submit:"})," Save the application."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-5-onboarding-the-device",children:"Step 5: Onboarding the Device"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Add a Device:"}),' In your newly created application, click on "Add Device."']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enter Device Information:"})," Input the ",(0,t.jsx)(i.code,{children:"DevEUI"})," and other necessary details. You can use a Google Sheet to manage your device credentials if needed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Set Application Key:"})," Input the ",(0,t.jsx)(i.code,{children:"AppKey"})," and submit."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-6-connecting-the-device",children:"Step 6: Connecting the Device"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Power the Device:"})," Ensure the Busy Light is connected and powered."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Monitor Connection:"})," Once connected, the device will appear as online in the ChirpStack console."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"step-7-changing-device-colors",children:"Step 7: Changing Device Colors"}),"\n",(0,t.jsx)(i.h3,{id:"manual-method",children:"Manual Method"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Access Configuration:"})," In the console, go to the device\u2019s configuration section."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Set FPort:"})," Ensure the FPort is set to ",(0,t.jsx)(i.code,{children:"15"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enter Hex Code:"})," Input the Hex code corresponding to the color you want. For example, to turn the light red, enter the code for red."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Enqueue Command:"}),' Click "Enqueue" to send the command. The Busy Light should change to the desired color.']}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"automating-color-changes",children:"Automating Color Changes"}),"\n",(0,t.jsx)(i.p,{children:"Automation options, such as changing colors based on sensor data or other triggers, will be covered in another guide."}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! You have successfully onboarded and configured your Class C device on the Helium Network using the MeteoScientific ChirpStack console. The process is straightforward, and with the device now online, you can explore additional configurations and automation."}),"\n",(0,t.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>r});var t=n(6540);const s={},o=t.createContext(s);function c(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);