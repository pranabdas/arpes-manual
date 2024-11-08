"use strict";(self.webpackChunkarpes_manual=self.webpackChunkarpes_manual||[]).push([[973],{1493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"analyzer","title":"Analyzer Operation","description":"Make sure correct analyzer slit is chosen.","source":"@site/docs/analyzer.md","sourceDirName":".","slug":"/analyzer","permalink":"/arpes-manual/analyzer","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/arpes-manual/blob/main/docs/analyzer.md","tags":[],"version":"current","frontMatter":{"title":"Analyzer Operation"},"sidebar":"docs","previous":{"title":"Crystat Operation","permalink":"/arpes-manual/cryostat"},"next":{"title":"Data analysis","permalink":"/arpes-manual/data-analysis"}}');var r=t(4848),s=t(8453);const i={title:"Analyzer Operation"},l=void 0,o={},c=[{value:"Detector ramp up procedure",id:"detector-ramp-up-procedure",level:3},{value:"User manuals",id:"user-manuals",level:3}];function h(e){const n={a:"a",admonition:"admonition",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Make sure correct ",(0,r.jsx)(n.a,{href:"/arpes-manual/slit-dim",children:"analyzer slit"})," is chosen."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Element Voltages:"})," ",(0,r.jsx)("br",{}),"\nMCP = 1550 V ",(0,r.jsx)("br",{}),"\nSCREEN = 3600 V."]}),"\n",(0,r.jsx)(n.p,{children:"If the count is too high, please reduce the MCP voltage to 1500\xa0V or even\n1400\xa0V (especially when performing spin measurements with Mott detectors,\nand the slit is set to very wide). Count should not exceed few million, it can\ndamage the detector mesh permanently. If you do not need MCP spectrum, please\nset the MCP voltage to 1200\xa0V or below."}),"\n",(0,r.jsx)(n.h3,{id:"detector-ramp-up-procedure",children:"Detector ramp up procedure"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"If the chamber pressure starts to increase and/or the LED lights flash red, or\nthere is a sudden increase of counts or a hot pot, you must immediately exit the\nvoltage calibration window, and turn off the HV switch at the front of HV rack."})}),"\n",(0,r.jsx)(n.p,{children:"After every chamber bake-out, or any changes to chamber condition and/or\nanalyzer electrical connections, please follow this procedure:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check that the HV switch at the front of HV rack is turned off."}),"\n",(0,r.jsxs)(n.li,{children:["Check that the chamber pressure is bellow 5\xa0\xd7\xa010",(0,r.jsx)("sup",{children:"-4"})," mbar\nin the analyzer hemisphere."]}),"\n",(0,r.jsx)(n.li,{children:"Open the voltage calibration dialogue and make a note of the MCP and Screen\nelement voltages. MCP should be set at 1450\xa0V and Screen at 3600\xa0V.\nChange both element voltages to 100\xa0V."}),"\n",(0,r.jsx)(n.li,{children:"Exit to save changes."}),"\n",(0,r.jsx)(n.li,{children:"Open the voltage calibration to confirm that both MCP and Screen element\nvoltages are 100\xa0V."}),"\n",(0,r.jsx)(n.li,{children:"Turn ON the HV switch at the front of HV rack."}),"\n",(0,r.jsx)(n.li,{children:"Select the Screen element and stepwise increase the element voltage to the\nworking value (i.e., 3600\xa0V). Each step should be 50\xa0V."}),"\n",(0,r.jsx)(n.li,{children:"Keep eye on the detector image, vacuum level, and HV supplies LED lights\nbetween each step."}),"\n",(0,r.jsx)(n.li,{children:"Once reached the set value, exit and save changes."}),"\n",(0,r.jsx)(n.li,{children:"Return to the voltage calibration dialogue. Select the MCP element and\nstepwise increase the element voltage to the initial value (i.e., 1450\xa0V)\nwhich each step being 50\xa0V. When finished, a few random background counts\nshould be observed."}),"\n",(0,r.jsx)(n.li,{children:"Exit and save changes."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsx)(n.p,{children:"Please refer to the Scienta manual for more details."})}),"\n",(0,r.jsx)(n.h3,{id:"user-manuals",children:"User manuals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://file-storage.github.io/manuals/SES-Software-User-Guide-v2.0.pdf",children:"SES User Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://file-storage.github.io/manuals/SES-Software-Manual-v5_1.pdf",children:"SES Software Manual"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);