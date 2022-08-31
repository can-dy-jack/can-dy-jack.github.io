"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[4888],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>j});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=i(t),j=o,m=b["".concat(c,".").concat(j)]||b[j]||u[j]||r;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function j(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<r;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=t(7462),o=(t(7294),t(3905));const r={title:"\u6df1\u62f7\u8d1d",slug:"js-deepclone"},l=void 0,p={unversionedId:"javascript/\u6df1\u62f7\u8d1d",id:"javascript/\u6df1\u62f7\u8d1d",title:"\u6df1\u62f7\u8d1d",description:"\u4e4b\u524d\u5199\u7684\u6587\u7ae0 - JavaScript\u77e5\u8bc6\u4e4b \u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d",source:"@site/docs\\javascript\\\u6df1\u62f7\u8d1d.md",sourceDirName:"javascript",slug:"/javascript/js-deepclone",permalink:"/docs/javascript/js-deepclone",draft:!1,editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/docs/javascript/\u6df1\u62f7\u8d1d.md",tags:[],version:"current",frontMatter:{title:"\u6df1\u62f7\u8d1d",slug:"js-deepclone"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u5b9e\u73b0Promise",permalink:"/docs/javascript/self-promise"},next:{title:"js\u9632\u6296\u4e0e\u8282\u6d41",permalink:"/docs/javascript/js-antiShake-throttling"}},c={},i=[{value:"\u5f15\u8a00",id:"\u5f15\u8a00",level:2},{value:"\u6d45\u62f7\u8d1d",id:"\u6d45\u62f7\u8d1d",level:2},{value:"\u6df1\u62f7\u8d1d",id:"\u6df1\u62f7\u8d1d",level:2},{value:"\u517c\u5bb9\u6570\u7ec4",id:"\u517c\u5bb9\u6570\u7ec4",level:2},{value:"\u81ea\u5f15\u7528\u60c5\u51b5",id:"\u81ea\u5f15\u7528\u60c5\u51b5",level:2},{value:"\u517c\u5bb9\u5176\u5b83\u6570\u636e\u7c7b\u578b",id:"\u517c\u5bb9\u5176\u5b83\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6700\u7ec8\u7248\u672c",id:"\u6700\u7ec8\u7248\u672c",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],s={toc:i};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/js-copy"},"\u4e4b\u524d\u5199\u7684\u6587\u7ae0 - JavaScript\u77e5\u8bc6\u4e4b \u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d")),(0,o.kt)("h2",{id:"\u5f15\u8a00"},"\u5f15\u8a00"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u57fa\u672c\u6570\u636e\u7c7b\u578b\u548c\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u590d\u5236\u65b9\u6cd5\u662f\u4e0e\u4e0d\u4e00\u6837\u7684\uff0c\u8fd9\u91cc\u590d\u4e60\u4ee5\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7684\u6570\u636e\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"String"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Number"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Null"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Undefined"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Symbol"),"\uff08ES6\u5f15\u5165\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Object"),"\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"Array"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Function"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"RegExp"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),"...\uff09")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6d45\u62f7\u8d1d"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u6709\u7740\u539f\u59cb\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u4e00\u4efd\u7cbe\u786e\u62f7\u8d1d\u3002\u5982\u679c\u5c5e\u6027\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u62f7\u8d1d\u7684\u5c31\u662f\u57fa\u672c\u7c7b\u578b\u7684\u503c\uff0c\u5982\u679c\u5c5e\u6027\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u62f7\u8d1d\u7684\u5c31\u662f\u5185\u5b58\u5730\u5740 \uff0c\u6240\u4ee5\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u5bf9\u8c61\u6539\u53d8\u4e86\u8fd9\u4e2a\u5730\u5740\uff0c\u5c31\u4f1a\u5f71\u54cd\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6df1\u62f7\u8d1d"),"\uff1a\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4ece\u5185\u5b58\u4e2d\u5b8c\u6574\u7684\u62f7\u8d1d\u4e00\u4efd\u51fa\u6765\uff0c\u4ece\u5806\u5185\u5b58\u4e2d\u5f00\u8f9f\u4e00\u4e2a\u65b0\u7684\u533a\u57df\u5b58\u653e\u65b0\u5bf9\u8c61\uff0c\u5e76\u4e14\u5728\u4fee\u6539\u65b0\u5bf9\u8c61\u4e0d\u4f1a\u5f71\u54cd\u539f\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u6d45\u62f7\u8d1d"},"\u6d45\u62f7\u8d1d"),(0,o.kt)("p",null,"\u6d45\u62f7\u8d1d\u7684\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Array.prototype.slice()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Object.assign()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Array.prototype.concat()")),(0,o.kt)("li",{parentName:"ul"},"ES6\u62d3\u5c55\u8fd0\u7b97\u7b26 ",(0,o.kt)("inlineCode",{parentName:"li"},"..."))),(0,o.kt)("h2",{id:"\u6df1\u62f7\u8d1d"},"\u6df1\u62f7\u8d1d"),(0,o.kt)("p",null,"\u6df1\u62f7\u8d1d\u7684\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JSON.parse(JSON.stringify())")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_.cloneDeep()"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"lodash\u5e93\u4e2d\u7684\u65b9\u6cd5"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jQuery.extend()"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"jQuery\u4e2d\u7684\u65b9\u6cd5"))),(0,o.kt)("li",{parentName:"ul"},"\u5faa\u73af\u9012\u5f52")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse(JSON.stringify())"),"\u65b9\u6cd5\u5e76\u4e0d\u9002\u5408\u6240\u6709\u7684\u6df1\u62f7\u8d1d\uff0c\u5e76\u4e0d\u80fd\u5b8c\u6574\u7684\u514b\u9686\u6240\u6709\u7684\u7c7b\u578b\u3002\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"_.cloneDeep()")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery.extend()")," \u662f\u7b2c\u4e09\u65b9\u5e93\u7684\u5b9e\u73b0\uff0c\u4e3a\u4e86\u4e00\u4e2a\u65b9\u6cd5\u800c\u5f15\u5165\u4e00\u4e2a\u5e93\u5e76\u4e0d\u5408\u9002\uff0c\u6240\u4ee5\u8fd9\u91cc\u7528\u539f\u751f js \u5b9e\u73b0\u6df1\u62f7\u8d1d"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u60f3\u6cd5\uff1a\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u7136\u540e\u628a\u9700\u8981\u88ab\u514b\u9686\u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u503c\u90fd\u590d\u5236\u7ed9\u65b0\u5bf9\u8c61\u3002\u5982\u679c\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5c31\u76f4\u63a5\u590d\u5236\uff0c\u5982\u679c\u662f\u5f15\u7528\u7c7b\u578b\u5c31\u8c03\u7528\u9012\u5f52\u3002")),(0,o.kt)("p",null,"\u7b80\u5355\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const deepClone = (obj) => {\n  if(typeof obj !== 'object') {\n    return obj;\n  }\n  const newObj = {};\n  for(const key in obj) {\n    newObj[key] = deepClone(obj[key]);\n  }\n  return newObj;\n}\n")),(0,o.kt)("h2",{id:"\u517c\u5bb9\u6570\u7ec4"},"\u517c\u5bb9\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const deepClone = (obj) => {\n  if(typeof obj !== 'object') {\n    return obj;\n  }\n  const newObj = Object.prototype.toString.call(obj) === \"[object Array]\" ? [] : {};\n  for(const key in obj) {\n    newObj[key] = deepClone(obj[key]);\n  }\n  return newObj;\n}\n")),(0,o.kt)("h2",{id:"\u81ea\u5f15\u7528\u60c5\u51b5"},"\u81ea\u5f15\u7528\u60c5\u51b5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u76f4\u63a5\u548c\u95f4\u63a5\u5f15\u7528\u4e86\u81ea\u8eab\uff0c\u5728\u514b\u9686\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u65ad\u7684\u5faa\u73af\u521b\u5efa\u4e00\u5757\u5185\u5b58\u5730\u5740\u6765\u5b58\u653e\u6570\u636e\uff0c\u5bfc\u81f4\u5806\u6808\u6ea2\u51fa\u3002")),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u5c06\u8bbf\u95ee\u8fc7\u7684\uff08\u590d\u5236\u8fc7\u7684\uff09\u5bf9\u8c61\u4fdd\u5b58\u8d77\u6765\uff0c\u590d\u5236\u524d\u5148\u67e5\u8be2\u662f\u5426\u590d\u5236\u8fc7\uff0c\u5982\u679c\u590d\u5236\u8fc7\u5c31\u62ff\u51fa\u6765\u7528\u3002\u8fd9\u91cc\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"WeakMap")," \u5bf9\u8c61\uff0c\u5176\u662f\u5f31\u5f15\u7528\u7684\uff0c\u6027\u80fd\u4f1a\u66f4\u597d\u3002"),(0,o.kt)("admonition",{title:"\u8865\u5145",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u8ba1\u7b97\u673a\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528"),"\u4e0e\u5f3a\u5f15\u7528\u76f8\u5bf9\uff0c\u662f\u6307\u4e0d\u80fd\u786e\u4fdd\u5176\u5f15\u7528\u7684\u5bf9\u8c61\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u5668\u56de\u6536\u7684\u5f15\u7528\u3002\u4e00\u4e2a\u5bf9\u8c61\u82e5\u53ea\u88ab\u5f31\u5f15\u7528\u6240\u5f15\u7528\uff0c\u5219\u88ab\u8ba4\u4e3a\u662f\u4e0d\u53ef\u8bbf\u95ee\uff08\u6216\u5f31\u53ef\u8bbf\u95ee\uff09\u7684\uff0c\u5e76\u56e0\u6b64\u53ef\u80fd\u5728\u4efb\u4f55\u65f6\u523b\u88ab\u56de\u6536")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const deepClone = (obj, map = new WeakMap()) => {\n  if(typeof obj !== 'object') { // \u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u76f4\u63a5\u8fd4\u56de\u5373\u53ef\n    return obj;\n  }\n  if(obj === null) { // WeakMap \u4e0d\u80fd\u7528 null \u505a key\n    return null;\n  }\n  // This will error\n  const newObj = Object.prototype.toString.call(obj) === \"[object Array]\" ? [] : {}; // \u517c\u5bb9\u6570\u7ec4\n  if(map.get(obj)) { // \u5982\u679c\u590d\u5236\u8fc7\uff0c\u76f4\u63a5\u8fd4\u56de\n    return map.get(obj);\n  }\n  // highlight-next-line\n  map.set(obj, newObj); // \u4fdd\u5b58\u590d\u5236\u8fc7\u7684\uff1b\u8fd9\u4e2a\u4e00\u5b9a\u8981\u5728\u9012\u5f52\u8c03\u7528\u4e4b\u524d\uff01\uff01\uff01\n  for(const key in obj) {\n    newObj[key] = deepClone(obj[key], map); // \u9012\u5f52\u590d\u5236\n  }\n  return newObj;\n}\n")),(0,o.kt)("h2",{id:"\u517c\u5bb9\u5176\u5b83\u6570\u636e\u7c7b\u578b"},"\u517c\u5bb9\u5176\u5b83\u6570\u636e\u7c7b\u578b"),(0,o.kt)("p",null,"\u6d4b\u8bd5\u4e0a\u9762\u5199\u597d\u7684 \u6df1\u590d\u5236\u51fd\u6570 \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const obj = {\n  num: 10,\n  str: \"obj\",\n  bool: true,\n  node: null,\n  root: undefined,\n  data: [1,2,3,4, {\n    num: 20\n  }],\n  set: new Set([1,2,3]),\n  sym: Symbol(),\n  fun: function fun() {},\n  innerObj: {\n    fuc: function fuc() {},\n    num: 12,\n    str: 'inner'\n  },\n  time: new Date(),\n  regexp: /12/g,\n  self: null\n}\n\nobj.self = obj\n\nconst a = deepClone(obj)\n\na.set // {}\na.regexp // {}\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u76ee\u524d\u53ea\u5bf9\u666e\u901a",(0,o.kt)("inlineCode",{parentName:"p"},"object"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"array"),"\u8fdb\u884c\u4e86\u62f7\u8d1d\uff0c\u9047\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," \u7b49\u5bf9\u8c61\u65f6\u5e76\u6ca1\u6709\u6b63\u786e\u590d\u5236\u3002\n\u9700\u8981\u5206\u7c7b\u8fdb\u884c\u62f7\u8d1d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString.call")," \u8fdb\u884c\u7c7b\u578b\u5224\u65ad\u3002"),(0,o.kt)("p",null,"\u5199\u4e2a\u51fd\u6570\uff0c\u5224\u65ad\u7c7b\u578b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6\u6570\u636e\u7c7b\u578b\nfunction getType(obj) {\n  // '[object Boolean]' | '[object Number]' | '[object String]'\n  // '[object Array]'  | '[object Function]'\n  // '[object Error]' | '[object RegExp]' | '[object Date]'\n  // '[object Object]' ......\n  return Object.prototype.toString.call(obj);\n}\n")),(0,o.kt)("p",null,"\u5176\u5b9e\u6709\u5f88\u591a\u7c7b\u578b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u53ef\u904d\u5386\u7684\u7c7b\u578b\nconst mapTag = '[object Map]';\nconst setTag = '[object Set]';\nconst arrayTag = '[object Array]';\nconst objectTag = '[object Object]';\nconst argsTag = '[object Arguments]';\n\n// \u4e0d\u53ef\u904d\u5386\u7684\u7c7b\u578b\nconst booleanTag = '[object Boolean]';\nconst dateTag = '[object Date]';\nconst errorTag = '[object Error]';\nconst numberTag = '[object Number]';\nconst regexpTag = '[object RegExp]';\nconst stringTag = '[object String]';\nconst symbolTag = '[object Symbol]';\n// ......\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u5224\u65ad\u6570\u636e\u7c7b\u578b\uff0c\u51fa\u73b0\u53ef\u904d\u5386\u5c5e\u6027\u548c\u4e0d\u53ef\u904d\u5386\u5c5e\u6027\uff0c\u4e3b\u8981\u662f\u53ef\u904d\u5386\u5c5e\u6027\u6211\u4eec\u9700\u8981\u7528\u5230\u8fd9\u4e9b\u5bf9\u8c61\u539f\u578bprototype\u65b9\u6cd5\u548c\u6784\u9020\u51fd\u6570constructor\uff0c\u9700\u8981\u904d\u5386\u8fd9\u4e9b\u5bf9\u8c61\u539f\u578b\u4e0a\u548c\u6784\u9020\u51fd\u6570\u4e0a\u7684\u65b9\u6cd5\u3002\n\u4e0b\u9762\u6211\u4eec\u5c31\u7528 constructor\u8fd9\u79cd\u65b9\u5f0f\u6765\u83b7\u53d6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getInit(obj) {\n    const proto = obj.constructor;\n    return new proto();\n}\n")),(0,o.kt)("h2",{id:"\u6700\u7ec8\u7248\u672c"},"\u6700\u7ec8\u7248\u672c"),(0,o.kt)("p",null,"\u5176\u5b9e\u8fd8\u6709\u5f88\u591a\u7c7b\u578b\u6ca1\u6709\u8003\u8651\u5230\uff01\n\u5b9e\u9645\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," \u5e93\u5c31\u662f\u4f7f\u7528\u7684\u7c7b\u4f3c\u65b9\u6cd5\uff0c\u8be5\u5e93\u6240\u6709\u7ec6\u8282\u90fd\u8003\u8651\u5230\u4e86\uff0c\u53ef\u4ee5\u53c2\u8003\u4ed6\u4eec\u7684\u6e90\u7801\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lodash/lodash/blob/master/.internal/baseClone.js"},"lodash")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u53ef\u904d\u5386\u7c7b\u578b\nconst arrayTag = '[object Array]';\nconst objectTag = '[object Object]';\nconst mapTag = '[object Map]';\nconst setTag = '[object Set]';\nconst argsTag = '[object Arguments]';\n// \u53ef\u904d\u5386\u7c7b\u578b\u6570\u636e\u6807\u8bc6\nconst deepTagList = [ mapTag, setTag, arrayTag, objectTag, argsTag ];\n\n// \u4e0d\u53ef\u904d\u5386\u7c7b\u578b\nconst numberTag = '[object Number]';\nconst stringTag = '[object String]';\nconst booleanTag = '[object Boolean]';\nconst dateTag = '[object Date]';\nconst symbolTag = '[object Symbol]';\nconst errorTag = '[object Error]';\nconst regexpTag = '[object RegExp]';\nconst funcTag = '[object Function]';\n// ---- WeakMap,WeakSet ....\n\n// \u83b7\u53d6\u6570\u636e\u7c7b\u578b\nfunction getType(obj) {\n  // '[object Boolean]' | '[object Number]' | '[object String]'\n  // '[object Array]' | '[object Arguments]' | '[object Function]'\n  // '[object Error]' | '[object RegExp]' | '[object Date]'\n  // '[object Object]'\n    return Object.prototype.toString.call(obj);\n}\n// \u521d\u59cb\u7c7b\u578b\nfunction getInit(obj) {\n    const proto = obj.constructor;\n    return new proto();\n}\n// \u514b\u9686\u6b63\u5219\nfunction deepCloneReg(obj) {\n    const data = new obj.constructor(obj.source, /\\w*$/.exec(targe));\n    data.lastIndex = obj.lastIndex;\n    return data;\n}\n// \u5176\u5b83\u7c7b\u578b\nfunction otherType(data, type) {\n    const NewCtor = data.constructor;\n    switch (type) {\n        case booleanTag:\n            return new Boolean(data);\n        case numberTag:\n            return new Number(data);\n        case stringTag:\n            return new String(data);\n        case errorTag:\n            return new Error(data);\n        case symbolTag:\n            return new Symbol(data);\n        case dateTag:\n            return new NewCtor(data);\n        case regexpTag:\n            return deepCloneReg(data);\n    // case ... ...\n        default:\n            return null;\n    }\n}\n\n\nconst deepClone = (obj, map = new WeakMap()) => {\n  if(typeof obj !== 'object' || !obj) { // \u975e\u5bf9\u8c61\u7c7b\u578b\uff0c\u76f4\u63a5\u8fd4\u56de\u5373\u53ef\n    return obj;\n  }\n  let newObj = null;\n  const type = getType(obj);\n  if(deepTagList.includes(type)) {\n    newObj = getInit(obj);\n  } else {\n    return otherType(obj, type);\n  }\n  // map\n  if(type === mapTag) {\n    obj.forEach((val, idx) => {\n      newObj.set(idx, deepClone(val))\n    })\n    return newObj;\n  }\n  // set\n  if(type === setTag) {\n    obj.forEach((val, idx) => {\n      newObj.add(idx, deepClone(val))\n    })\n    return newObj;\n  }\n  newObj = Object.prototype.toString.call(obj) === \"[object Array]\" ? [] : {}; // \u517c\u5bb9\u6570\u7ec4\n  if(map.get(obj)) { // \u5982\u679c\u590d\u5236\u8fc7\uff0c\u76f4\u63a5\u8fd4\u56de\n    return map.get(obj);\n  }\n  map.set(obj, newObj); // \u4fdd\u5b58\u590d\u5236\u8fc7\u7684\uff1b\u8fd9\u4e2a\u4e00\u5b9a\u8981\u5728\u9012\u5f52\u8c03\u7528\u4e4b\u524d\uff01\uff01\uff01\n  for(const key in obj) {\n    newObj[key] = deepClone(obj[key], map); // \u9012\u5f52\u590d\u5236\n  }\n  return newObj;\n}\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7078582120221769759"},"\u6398\u91d1 - javascript\u6df1\u5165\u7cfb\u5217\u4e4b\u6d45\u62f7\u8d1d\u4e0e\u6df1\u62f7\u8d1d"))))}u.isMDXComponent=!0}}]);