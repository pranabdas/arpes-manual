"use strict";(self.webpackChunkarpes_manual=self.webpackChunkarpes_manual||[]).push([[31],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(n),m=l,c=b["".concat(i,".").concat(m)]||b[m]||k[m]||a;return n?r.createElement(c,u(u({ref:t},p),{},{components:n})):r.createElement(c,u({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[b]="string"==typeof e?e:l,u[1]=o;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7867:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return b}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u=["components"],o={title:"Baking the chambers and instruments",sidebar_label:"Baking procedure"},i=void 0,s={unversionedId:"baking",id:"baking",title:"Baking the chambers and instruments",description:"Once the ultra high vacuum components are exposed to the atmosphere, they",source:"@site/docs/baking.md",sourceDirName:".",slug:"/baking",permalink:"/arpes-manual/baking",draft:!1,editUrl:"https://github.com/pranabdas/arpes-manual/blob/main/docs/baking.md",tags:[],version:"current",frontMatter:{title:"Baking the chambers and instruments",sidebar_label:"Baking procedure"},sidebar:"docs",previous:{title:"ARPES resolution",permalink:"/arpes-manual/resolution"},next:{title:"Miscellaneous",permalink:"/arpes-manual/misc"}},p={},b=[{value:"Reference log",id:"reference-log",level:3}],k={toc:b};function m(e){var t=e.components,o=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once the ultra high vacuum components are exposed to the atmosphere, they\nrequire baking at high temperature (usually 110\xb0-150","\xa0","\xb0C) in order to\nrelease various contaminants from the walls of the chambers."),(0,a.kt)("p",null,"Our ARPES chambers are usually baked at 120","\xa0","\xb0C for 72 hours after various\nmaintenance and upgrade works. In order to bake the chambers follow the steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Switch off the manipulator motor driver electrics. Disconnect the motor\ncables. Remove the motors. Leave the screws on the manipulator."),(0,a.kt)("li",{parentName:"ol"},"Remove all the junction boxes and cables."),(0,a.kt)("li",{parentName:"ol"},"Remove camera and cables."),(0,a.kt)("li",{parentName:"ol"},"Remove the slit wheel knob. Note down the reading or make sure nobody changes\nthe knob wheel while detached."),(0,a.kt)("li",{parentName:"ol"},"Remove high voltage isolators for the Mott detector."),(0,a.kt)("li",{parentName:"ol"},"Remove all other components that cannot be baked e.g., LED lights, cameras,\ncooling water pipes."),(0,a.kt)("li",{parentName:"ol"},"Cover all the windows, and feed through by aluminum foil."),(0,a.kt)("li",{parentName:"ol"},"Setup the baking tents.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Due to improper interlock configuration, currently the baking\ncontroller requires the cryopump to be ON while baking."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"After the baking is complete, allow sufficient time (about one whole day) for\nthe chamber to cool down. Do not remove the baking tent or aluminum foils until\nthe chamber reached near room temperature. Sudden temperature change might\ncause cracks in the viewports and feed-throughs.")),(0,a.kt)("h3",{id:"reference-log"},"Reference log"),(0,a.kt)("p",null,"For you reference of various conditions, here is sample logbook:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"11/Mar/2019")),(0,a.kt)("p",null,"We are preparing the bake out of analyzer and preparation chamber."),(0,a.kt)("p",null,"Chamber pressure before we started: ",(0,a.kt)("br",null),"\nAnalyzer : 4.34 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nSpin : 1.13 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nPrep : 2.72 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nBuffer : 3.94 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed analyzer preamplifier junction boxes"),(0,a.kt)("li",{parentName:"ul"},"Removed slit wheel knob (analyzer slit = 500)"),(0,a.kt)("li",{parentName:"ul"},"Removed detector camera"),(0,a.kt)("li",{parentName:"ul"},"Remove x-ray source water supply and connections.")),(0,a.kt)("p",null,"Baking the chamber for 68 hours at 120","\xa0","\xb0C."),(0,a.kt)("p",null,"Baking started at 14:36 hrs."),(0,a.kt)("p",null,"At 16:00, temperature reached 78","\xa0","\xb0C. Started TSP. 5 days 10 hours,\nsublimate every 3 hours."),(0,a.kt)("p",null,"Started NEG pump in conditioning mode."),(0,a.kt)("p",null,"Settings for NEG conditioning:"),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(2553).Z}),(0,a.kt)("img",{src:n(1444).Z,alt:"neg-conditioning",width:"400px"})),(0,a.kt)("p",null,"Maximum time can be set for conditioning is 48 hours. We need to restart the NEG\nconditioning after 48 hours or before. During conditioning, the NEG temperature\nreaches 250","\xa0","\xb0C."),(0,a.kt)("p",null,"Chamber pressure at 17:30 ",(0,a.kt)("br",null),"\nAnalyzer : 3.88 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nSpin : 2.36 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nPrep : 5.80 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nBuffer : 3.60 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null),"\nReadings on the gauges, NOT on the PCUs. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"12/Mar/2019")),(0,a.kt)("p",null,"Chamber pressure at 11:00 ",(0,a.kt)("br",null),"\nAnalyzer : 2.99 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nSpin : 9.96 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nPrep : 3.55 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nBuffer : 2.18 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("br",null),"Chamber pressure at 17:30 ",(0,a.kt)("br",null),"Analyzer : 2.16 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"Spin : 7.70 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"Prep : 2.30 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"Buffer : 1.68 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"13/Mar/2019")),(0,a.kt)("p",null,"Chamber pressure at 11:30 ",(0,a.kt)("br",null),"\nAnalyzer : 1.13 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nSpin : 4.71 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nPrep : 1.23 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nBuffer : 1.03 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("br",null),"Chamber pressure at 17:15 ",(0,a.kt)("br",null),"Analyzer : 9.58 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"Spin : 4.19 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"Prep : 1.04 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"Buffer : 8.90 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"14/Mar/2019")),(0,a.kt)("p",null,"Chamber pressure at 11:25 ",(0,a.kt)("br",null),"\nAnalyzer : 6.96 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nSpin : 3.43 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nPrep : 7.08 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nBuffer : 7.18 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("br",null),"11:30 HRS ",(0,a.kt)("br",null),"Starting NEG Activation ",(0,a.kt)("br",null),"t",(0,a.kt)("sub",null,"rise")," = 15 min ",(0,a.kt)("br",null),"t",(0,a.kt)("sub",null,"hold")," = 60 min ",(0,a.kt)("br",null),"T = 450 \xb0C ",(0,a.kt)("br",null),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(9873).Z}),(0,a.kt)("img",{src:n(4121).Z,alt:"neg-activation",width:"400px"})),(0,a.kt)("p",null,"Pressure is increasing after NEG activation. After 19 minutes, status is HOLD,\ntemperature is 335","\xa0","\xb0C."),(0,a.kt)("p",null,"Analyzer : 9.90 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null),"\nSpin : 3.31 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null),"\nPrep : 2.84 \u2715 10",(0,a.kt)("sup",null,"-6")," mbar ",(0,a.kt)("br",null),"\nBuffer : 3.87 \u2715 10",(0,a.kt)("sup",null,"-5")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"After this point, pressure started recovering, though the temperature kept\nrising."),(0,a.kt)("p",null,"After one hour (15 minutes t",(0,a.kt)("sub",null,"rise")," and 45 minutes t",(0,a.kt)("sub",null,"hold"),"),\nNEG activation temperature reached 433","\xa0","\xb0C."),(0,a.kt)("p",null,"Maximum temperature reached by NEG pump = 441","\xa0","\xb0C ",(0,a.kt)("br",null),"\nV",(0,a.kt)("sub",null,"out")," = 95 V ",(0,a.kt)("br",null),"\nI",(0,a.kt)("sub",null,"out")," = 3.9 A. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The baking heaters and the NEG activation going to stop almost at the same time."),(0,a.kt)("p",null,"Baking stopped at 13:00 ",(0,a.kt)("br",null),"\nChamber pressure: ",(0,a.kt)("br",null),"\nAnalyzer : 1.12 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null),"\nSpin : 4.64 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nPrep : 9.32 \u2715 10",(0,a.kt)("sup",null,"-8")," mbar ",(0,a.kt)("br",null),"\nBuffer : 8.57 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Degas the vacuum gauges at 13:55 hrs. when the temperature is 75","\xa0","\xb0C. ",(0,a.kt)("br",null),"\nGauge degas time = 15 minutes. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Chamber pressure at 17:40 ",(0,a.kt)("br",null),"\nChamber temperature reached 40 \xb0C. ",(0,a.kt)("br",null),"\nAnalyzer : 2.35 \u2715 10",(0,a.kt)("sup",null,"-9")," mbar ",(0,a.kt)("br",null),"\nSpin : 1.36 \u2715 10",(0,a.kt)("sup",null,"-9")," mbar ",(0,a.kt)("br",null),"\nPrep : 3.80 \u2715 10",(0,a.kt)("sup",null,"-9")," mbar ",(0,a.kt)("br",null),"\nBuffer : 3.05 \u2715 10",(0,a.kt)("sup",null,"-7")," mbar. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"15/Mar/2019")),(0,a.kt)("p",null,"Chamber pressure at 11:40 ",(0,a.kt)("br",null),"\nAnalyzer : 2.26 \u2715 10",(0,a.kt)("sup",null,"-10")," mbar ",(0,a.kt)("br",null),"\nSpin : 1.72 \u2715 10",(0,a.kt)("sup",null,"-10")," mbar ",(0,a.kt)("br",null),"\nPrep : 4.07 \u2715 10",(0,a.kt)("sup",null,"-10")," mbar ",(0,a.kt)("br",null),"\nBuffer : 2.28 \u2715 10",(0,a.kt)("sup",null,"-7"),"mbar."))}m.isMDXComponent=!0},4121:function(e,t,n){t.Z=n.p+"assets/images/neg-activation-0a2b8b57b114ae000bc9c7ff7bf562c7.jpg"},9873:function(e,t,n){t.Z=n.p+"assets/images/neg-activation-31931792cf19d8d5a129ea140ab5d151.webp"},1444:function(e,t,n){t.Z=n.p+"assets/images/neg-conditioning-1ccdb5c9c7e1f2c582d9c29d3df07560.jpg"},2553:function(e,t,n){t.Z=n.p+"assets/images/neg-conditioning-7848eb0259b382eee976bfdeda5bf850.webp"}}]);