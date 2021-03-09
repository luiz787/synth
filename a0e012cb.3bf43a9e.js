(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,y=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(y,s(s({ref:t},l),{},{components:a})):r.a.createElement(y,s({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(114)),i={title:"What is this?"},s={unversionedId:"getting_started/synth",id:"getting_started/synth",isDocsHomePage:!1,title:"What is this?",description:"Synth is a tool for generating realistic data using a declarative data model. Synth is database agnostic and can scale to millions of rows of data.",source:"@site/docs/getting_started/synth.md",slug:"/getting_started/synth",permalink:"/synth/getting_started/synth",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/getting_started/synth.md",version:"current",sidebar:"docsSidebar",next:{title:"Installation",permalink:"/synth/getting_started/installation"}},c=[{value:"Why Synth",id:"why-synth",children:[]},{value:"Key Features",id:"key-features",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Synth is a tool for generating realistic data using a declarative data model. Synth is database agnostic and can scale to millions of rows of data."),Object(o.b)("h2",{id:"why-synth"},"Why Synth"),Object(o.b)("p",null,"Synth answers a simple question. There are so many ways to consume data, why are there no frameworks for ",Object(o.b)("em",{parentName:"p"},"generating")," data?"),Object(o.b)("p",null,"Synth provides a robust, declarative framework for specifying constraint based data generation, solving the following problems developers face on the regular:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You're creating an App from scratch and have no way to populate your fresh schema with correct, realistic data."),Object(o.b)("li",{parentName:"ol"},"You're doing integration testing / QA on ",Object(o.b)("strong",{parentName:"li"},"production")," data, but you know it is bad practice, and you really should not be doing that."),Object(o.b)("li",{parentName:"ol"},"You want to see how your system will scale if your database suddenly has 10x the amount of data.")),Object(o.b)("p",null,"Synth solves exactly these problems with a flexible declarative data model which you can version control in git, peer review, and automate."),Object(o.b)("h2",{id:"key-features"},"Key Features"),Object(o.b)("p",null,"The key features of Synth are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Data as Code"),": Data generation is described using a declarative configuration language allowing you to specify your entire data model as code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Import from Existing Sources"),": Synth can import data from existing sources and automatically create data models. Synth currently has Alpha support for Postgres!")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Data Inference"),": While ingesting data, Synth automatically infers the relations, distributions and types of the dataset.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Database Agnostic"),": Synth supports semi-structured data and is database agnostic - playing nicely with SQL and NoSQL databases.  ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Semantic Data Types"),": Synth integrates with the (amazing) Python ",Object(o.b)("a",{parentName:"p",href:"https://pypi.org/project/Faker/"},"Faker")," library, supporting generation of thousands of semantic types (e.g. credit card numbers, email addresses etc.) as well as locales."))))}p.isMDXComponent=!0}}]);