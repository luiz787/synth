(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/how_it_works-f643f9de8d23a9277a819f321e94e71c.png"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(114)),i={title:"How it works"},c={unversionedId:"getting_started/how-it-works",id:"getting_started/how-it-works",isDocsHomePage:!1,title:"How it works",description:"Synth's funcionality can be broken into 3 main parts:",source:"@site/docs/getting_started/how-it-works.md",slug:"/getting_started/how-it-works",permalink:"/synth/getting_started/how-it-works",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/getting_started/how-it-works.md",version:"current",sidebar:"docsSidebar",previous:{title:"Synth CLI",permalink:"/synth/getting_started/command-line"},next:{title:"bank_db",permalink:"/synth/examples/bank"}},s=[],l={toc:s};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth's funcionality can be broken into 3 main parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Inference Engine: The inference engine is the process by which Synth ingests a datasets and attempts to infer and build the Synth ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/schema"},"Schema")),Object(o.b)("li",{parentName:"ol"},"Schema (IR): The ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/schema"},"Schema")," intermediate representation is a compact state representing the range of data generation"),Object(o.b)("li",{parentName:"ol"},"Generator Network: Schemas are transpiled into a network of generators which actually generate the required data.")),Object(o.b)("p",null,"Below is a high-level diagram illustrating the process: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"How it works",src:n(188).default})))}p.isMDXComponent=!0}}]);