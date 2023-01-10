"use strict";(self.webpackChunkarpes_manual=self.webpackChunkarpes_manual||[]).push([[406],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Analyzer Operation"},s=void 0,c={unversionedId:"analyzer",id:"analyzer",title:"Analyzer Operation",description:"Make sure correct analyzer slit is chosen.",source:"@site/docs/analyzer.md",sourceDirName:".",slug:"/analyzer",permalink:"/arpes-manual/analyzer",draft:!1,editUrl:"https://github.com/pranabdas/arpes-manual/blob/main/docs/analyzer.md",tags:[],version:"current",frontMatter:{title:"Analyzer Operation"},sidebar:"docs",previous:{title:"Crystat Operation",permalink:"/arpes-manual/cryostat"},next:{title:"Data analysis",permalink:"/arpes-manual/data-analysis"}},u={},p=[{value:"Detector ramp up procedure",id:"detector-ramp-up-procedure",level:3},{value:"User manuals",id:"user-manuals",level:3}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make sure correct ",(0,o.kt)("a",{parentName:"p",href:"/arpes-manual/slit-dim"},"analyzer slit")," is chosen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Element Voltages:")," ",(0,o.kt)("br",null),"\nMCP = 1550 V ",(0,o.kt)("br",null),"\nSCREEN = 3600 V."),(0,o.kt)("p",null,"If the count is too high, please reduce the MCP voltage to 1500","\xa0","V or even\n1400","\xa0","V (especially when performing spin measurements with Mott detectors,\nand the slit is set to very wide). Count should not exceed few million, it can\ndamage the detector mesh permanently. If you do not need MCP spectrum, please\nset the MCP voltage to 1200","\xa0","V or below."),(0,o.kt)("h3",{id:"detector-ramp-up-procedure"},"Detector ramp up procedure"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If the chamber pressure starts to increase and/or the LED lights flash red, or\nthere is a sudden increase of counts or a hot pot, you must immediately exit the\nvoltage calibration window, and turn off the HV switch at the front of HV rack.")),(0,o.kt)("p",null,"After every chamber bake-out, or any changes to chamber condition and/or\nanalyzer electrical connections, please follow this procedure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check that the HV switch at the front of HV rack is turned off."),(0,o.kt)("li",{parentName:"ol"},"Check that the chamber pressure is bellow 5","\xa0","\xd7","\xa0","10",(0,o.kt)("sup",null,"-4")," mbar\nin the analyzer hemisphere."),(0,o.kt)("li",{parentName:"ol"},"Open the voltage calibration dialogue and make a note of the MCP and Screen\nelement voltages. MCP should be set at 1450","\xa0","V and Screen at 3600","\xa0","V.\nChange both element voltages to 100","\xa0","V."),(0,o.kt)("li",{parentName:"ol"},"Exit to save changes."),(0,o.kt)("li",{parentName:"ol"},"Open the voltage calibration to confirm that both MCP and Screen element\nvoltages are 100","\xa0","V."),(0,o.kt)("li",{parentName:"ol"},"Turn ON the HV switch at the front of HV rack."),(0,o.kt)("li",{parentName:"ol"},"Select the Screen element and stepwise increase the element voltage to the\nworking value (i.e., 3600","\xa0","V). Each step should be 50","\xa0","V."),(0,o.kt)("li",{parentName:"ol"},"Keep eye on the detector image, vacuum level, and HV supplies LED lights\nbetween each step."),(0,o.kt)("li",{parentName:"ol"},"Once reached the set value, exit and save changes."),(0,o.kt)("li",{parentName:"ol"},"Return to the voltage calibration dialogue. Select the MCP element and\nstepwise increase the element voltage to the initial value (i.e., 1450","\xa0","V)\nwhich each step being 50","\xa0","V. When finished, a few random background counts\nshould be observed."),(0,o.kt)("li",{parentName:"ol"},"Exit and save changes.")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Please refer to the Scienta manual for more details.")),(0,o.kt)("h3",{id:"user-manuals"},"User manuals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://file-storage.github.io/manuals/SES-Software-User-Guide-v2.0.pdf"},"SES User Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://file-storage.github.io/manuals/SES-Software-Manual-v5_1.pdf"},"SES Software Manual"))))}h.isMDXComponent=!0}}]);