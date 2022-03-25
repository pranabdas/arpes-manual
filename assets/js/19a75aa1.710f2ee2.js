"use strict";(self.webpackChunkarpes_manual=self.webpackChunkarpes_manual||[]).push([[316],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,f=s["".concat(u,".").concat(h)]||s[h]||m[h]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={title:"Helium lamp operation"},u=void 0,p={unversionedId:"helium-lamp-operation",id:"helium-lamp-operation",title:"Helium lamp operation",description:"Turning on the lamp",source:"@site/docs/helium-lamp-operation.md",sourceDirName:".",slug:"/helium-lamp-operation",permalink:"/arpes-manual/helium-lamp-operation",editUrl:"https://github.com/pranabdas/arpes-manual/blob/main/docs/helium-lamp-operation.md",tags:[],version:"current",frontMatter:{title:"Helium lamp operation"},sidebar:"docs",previous:{title:"Sample mounting",permalink:"/arpes-manual/sample-mounting"},next:{title:"Purging helium line",permalink:"/arpes-manual/purge-helium-line"}},c={},m=[{value:"Turning on the lamp",id:"turning-on-the-lamp",level:3},{value:"Turning off the lamp",id:"turning-off-the-lamp",level:3}],s={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"turning-on-the-lamp"},"Turning on the lamp"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First check for wave guide connections and the setup in general."),(0,l.kt)("li",{parentName:"ol"},"Check water cooling is ON."),(0,l.kt)("li",{parentName:"ol"},"Open the helium line. If the line is not being used for long time, please\npurge the line."),(0,l.kt)("li",{parentName:"ol"},"Open the helium cylinder nob, open the control nob to pressure of about\n1","\xa0","bar."),(0,l.kt)("li",{parentName:"ol"},"Open the valve before the needle valve."),(0,l.kt)("li",{parentName:"ol"},"Open the needle valve slowly, and monitor the pressure. The FG1 in the VUV\nPCU should reach ~1","\xa0","\u2715","\xa0","10",(0,l.kt)("sup",null,"-1")," mbar. Roughly two full rotation\nin the needle valve, there is a blue mark."),(0,l.kt)("li",{parentName:"ol"},"Turn on the electronics of the helium lamp. Wait for few minutes."),(0,l.kt)("li",{parentName:"ol"},"If there is any red light/sign on the interlock, press the reset switch. It\nshould clear all warnings/red lights."),(0,l.kt)("li",{parentName:"ol"},"Switch ON, and immediately OFF the HV ON/OFF switch to turn on the filament\nonly. Wait for 1 minute."),(0,l.kt)("li",{parentName:"ol"},"Then switch ON the HV ON/OFF switch, and look in the viewport if there is\npeach color light (a color between orange and yellow). If not switch off the\nhigh voltage, and adjust the Helium pressure."),(0,l.kt)("li",{parentName:"ol"},"Check the reflection from wave guide. It should be close to zero. Otherwise,\nadjust the helium pressure.")),(0,l.kt)("h3",{id:"turning-off-the-lamp"},"Turning off the lamp"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Switch off the High Voltage."),(0,l.kt)("li",{parentName:"ol"},"Press the reset button to switch off the filament, if not needed."),(0,l.kt)("li",{parentName:"ol"},"Close the helium needle valve."),(0,l.kt)("li",{parentName:"ol"},"Close the valve before needle valve."),(0,l.kt)("li",{parentName:"ol"},"Close the valves in the cylinder."),(0,l.kt)("li",{parentName:"ol"},"After switching off the filament, wait for about half an hour."),(0,l.kt)("li",{parentName:"ol"},"Once the filament temperature is below 40","\xa0","\xb0C, switch off the whole\nelectronics."),(0,l.kt)("li",{parentName:"ol"},"Water flow can be closed, or left it running.")))}h.isMDXComponent=!0}}]);