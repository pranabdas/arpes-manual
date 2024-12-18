"use strict";(self.webpackChunkarpes_manual=self.webpackChunkarpes_manual||[]).push([["230"],{9122:function(e,t,r){r.r(t),r.d(t,{default:()=>A});var a=r("5893"),s=r("7294"),n=r("2933"),l=r("2922"),c=r("4819"),o=r("3012"),u=r("6025");let h=["zero","one","two","few","many","other"];function i(e){return h.filter(t=>e.includes(t))}let m={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};var d=r("1728"),p=r("6550"),g=r("7227"),f=r("322");let x=function(){let e=(0,g.Z)(),t=(0,p.k6)(),r=(0,p.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),s=e?new URLSearchParams(r.search):null,l=(null==s?void 0:s.get("q"))||"",c=(null==s?void 0:s.get("ctx"))||"",o=(null==s?void 0:s.get("version"))||"",u=e=>{let t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c&&Array.isArray(f.Kc)&&f.Kc.some(e=>"string"==typeof e?e===c:e.path===c)?c:"",searchVersion:o,updateSearchPath:e=>{let r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{let a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{let t=u(e);return"".concat(a,"search?").concat(t.toString())}}};var y=r("9235"),j=r("5528"),C=r("5658"),S=r("6810"),v=r("7303"),I=r("5792"),w=r("7591");let P={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var R=r("4969");function _(){let{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,n.Z)(),{selectMessage:r}=function(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),m}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale=".concat(r.locale,", a maximum of ").concat(r.pluralForms.length," plural forms are expected (").concat(r.pluralForms.join(","),"), but the message contains ").concat(a.length,": ").concat(e));let s=r.select(t);return a[Math.min(r.pluralForms.indexOf(s),a.length-1)]})(r,t,e)}}(),{searchValue:l,searchContext:o,searchVersion:h,updateSearchPath:p,updateSearchContext:g}=x(),[j,C]=(0,s.useState)(l),[S,v]=(0,s.useState)(),w="".concat(e).concat(h),_=(0,s.useMemo)(()=>j?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:j}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}),[j]);(0,s.useEffect)(()=>{p(j),j?(async()=>{v(await (0,y.a)(w,o,j))})():v(void 0)},[j,w,o]);let A=(0,s.useCallback)(e=>{C(e.target.value)},[]);(0,s.useEffect)(()=>{l&&l!==j&&C(l)},[l]);let[b,Z]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(async function e(){(!Array.isArray(f.Kc)||o||f.pQ)&&await (0,y.r)(w,o),Z(!0)})()},[o,w]),(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,a.jsx)("title",{children:_})]}),(0,a.jsxs)("div",{className:"container margin-vert--lg",children:[(0,a.jsx)("h1",{children:_}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:(0,d.Z)("col",{[P.searchQueryColumn]:Array.isArray(f.Kc),"col--9":Array.isArray(f.Kc),"col--12":!Array.isArray(f.Kc)}),children:(0,a.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:A,value:j,autoComplete:"off",autoFocus:!0})}),Array.isArray(f.Kc)?(0,a.jsx)("div",{className:(0,d.Z)("col","col--3","padding-left--none",P.searchContextColumn),children:(0,a.jsxs)("select",{name:"search-context",className:P.searchContextInput,id:"context-selector",value:o,onChange:e=>g(e.target.value),children:[f.pQ&&(0,a.jsx)("option",{value:"",children:(0,u.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),f.Kc.map(e=>{let{label:r,path:s}=(0,R._)(e,t);return(0,a.jsx)("option",{value:s,children:r},s)})]})}):null]}),!b&&j&&(0,a.jsx)("div",{children:(0,a.jsx)(I.Z,{})}),S&&(S.length>0?(0,a.jsx)("p",{children:r(S.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))}):(0,a.jsx)("p",{children:(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,a.jsx)("section",{children:S&&S.map(e=>(0,a.jsx)(F,{searchResult:e},e.document.i))})]})]})}function F(e){let{searchResult:{document:t,type:r,page:s,tokens:n,metadata:l}}=e,c=r===j.P.Title,u=r===j.P.Keywords,h=r===j.P.Description,i=h||u,m=c||i,d=r===j.P.Content,p=(c?t.b:s.b).slice(),g=d||i?t.s:t.t;!m&&p.push(s.t);let x="";if(f.vc&&n.length>0){let e=new URLSearchParams;for(let t of n)e.append("_highlight",t);x="?".concat(e.toString())}return(0,a.jsxs)("article",{className:P.searchResultItem,children:[(0,a.jsx)("h2",{children:(0,a.jsx)(o.Z,{to:t.u+x+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,C.C)(g,n):(0,S.o)(g,(0,v.m)(l,"t"),n,100)}})}),p.length>0&&(0,a.jsx)("p",{className:P.searchResultItemPath,children:(0,w.e)(p)}),(d||h)&&(0,a.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,v.m)(l,"t"),n,100)}})]})}let A=function(){return(0,a.jsx)(l.Z,{children:(0,a.jsx)(_,{})})}}}]);