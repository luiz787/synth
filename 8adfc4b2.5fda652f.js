(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||b[h]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(114)),c={title:"Hello world"},i={unversionedId:"getting_started/hello-world",id:"getting_started/hello-world",isDocsHomePage:!1,title:"Hello world",description:"After installing the Synth CLI, the next step is to create a workspace. Workspaces are directories in your filesystem",source:"@site/docs/getting_started/hello-world.md",slug:"/getting_started/hello-world",permalink:"/synth/getting_started/hello-world",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/getting_started/hello-world.md",version:"current",sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/synth/getting_started/installation"},next:{title:"Core concepts",permalink:"/synth/getting_started/core-concepts"}},s=[{value:"Where to go from here",id:"where-to-go-from-here",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After installing the Synth CLI, the next step is to create a ",Object(o.b)("em",{parentName:"p"},"workspace"),". Workspaces are directories in your filesystem\nthat Synth uses to read your schemas from."),Object(o.b)("p",null,"To create and initialise a workspace called ",Object(o.b)("inlineCode",{parentName:"p"},"synth_workspace")," in your current working directory, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir synth_workspace && cd synth_workspace && synth init\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The command ",Object(o.b)("inlineCode",{parentName:"p"},"synth init")," creates a marker directory called ",Object(o.b)("inlineCode",{parentName:"p"},".synth")," in your present working directory. This marker\ndirectory acts as simply an anchor to tell Synth that this is a workspace."))),Object(o.b)("p",null,"Next we need to create a ",Object(o.b)("em",{parentName:"p"},"namespace"),". Namespaces are collections of schema files which are allowed to refer to one\nanother. They are organized simply by creating directories in your workspace. Let's create a namespace\ncalled ",Object(o.b)("inlineCode",{parentName:"p"},"my_namespace"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir my_namespace\n")),Object(o.b)("p",null,"Finally, we need to add a ",Object(o.b)("em",{parentName:"p"},"collection"),' to our namespace. Collections are JSON files which describe the "shape" of the\ndata we want to generate. They follow the Synth ',Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"schemas")," format."),Object(o.b)("p",null,'To create a collection called "dummy" in our namespace, simply copy/paste the content of the following example in a file\nat ',Object(o.b)("inlineCode",{parentName:"p"},"synth_workspace/my_namespace/dummy.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "constant": 1\n    },\n   "content": {\n        "type": "string",\n        "pattern": "Hello world!"\n    }\n}\n')),Object(o.b)("p",null,"The previous example snippet is an example of the Synth ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"schema")," format. All the examples of the\nSynth ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"schema"),' in these documentation pages are tagged with a "',Object(o.b)("strong",{parentName:"p"},"Run"),'" button that lets you preview Synth\noutput data when you click it.'),Object(o.b)("p",null,"Finally, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ synth generate my_namespace/\n")),Object(o.b)("p",null,"and you should see an output very close to the output of the above snippet."),Object(o.b)("h2",{id:"where-to-go-from-here"},"Where to go from here"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take a look at the exhaustive ",Object(o.b)("a",{parentName:"li",href:"/synth/content/null"},"generators reference"),"."),Object(o.b)("li",{parentName:"ul"},"Go into how Synth works by looking at the ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/core-concepts"},"core concepts")," and the Synth ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/schema"},"schema")," format."),Object(o.b)("li",{parentName:"ul"},"For more complex real life examples, see the ",Object(o.b)("a",{parentName:"li",href:"/synth/examples/bank"},"examples")," section.")))}p.isMDXComponent=!0}}]);