"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[973],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return s}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,k=d["".concat(o,".").concat(s)]||d[s]||m[s]||l;return r?t.createElement(k,i(i({ref:n},c),{},{components:r})):t.createElement(k,i({ref:n},c))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7788:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var t=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],u={title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png"}]},o=void 0,p={permalink:"/blog/2022/08/22/unique-arr",editUrl:"https://github.com/can-dy-jack/can-dy-jack.github.io/blog/2022-08-22-unique-arr.md",source:"@site/blog/2022-08-22-unique-arr.md",title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",description:"\u8fd9\u91cc\u4e00\u5171\u603b\u7ed3\u4e86  \u65b9\u6cd5\uff1a",date:"2022-08-22T00:00:00.000Z",formattedDate:"August 22, 2022",tags:[],readingTime:3.73,truncated:!0,authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}],frontMatter:{title:"Javascript\u6570\u7ec4\u53bb\u91cd\u7684\u51e0\u79cd\u65b9\u6cd5",authors:[{name:"kart jim",title:"\u672c\u535a\u5ba2\u521b\u9020\u8005",url:"https://github.com/can-dy-jack",image_url:"https://github.com/can-dy-jack.png",imageURL:"https://github.com/can-dy-jack.png"}]},prevItem:{title:"Javascript \u51e0\u79cd\u6a21\u5757\u5316\u6807\u51c6",permalink:"/blog/2022/08/27/module-standard"},nextItem:{title:"Promises/A+ \u89c4\u8303",permalink:"/blog/js-promise"}},c={authorsImageUrls:[void 0]},m=[{value:"\u5229\u7528<code>Set</code>",id:"\u5229\u7528set",level:2},{value:"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49,<code>splice()</code>\u53bb\u6389\u91cd\u590d\u503c",id:"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49splice\u53bb\u6389\u91cd\u590d\u503c",level:2},{value:"\u5229\u7528<code>indexOf</code>\u53bb\u91cd",id:"\u5229\u7528indexof\u53bb\u91cd",level:2},{value:"\u5229\u7528<code>includes()</code>",id:"\u5229\u7528includes",level:2},{value:"\u5229\u7528\u5faa\u73af\u52a0 <code>hasOwnProperty()</code>",id:"\u5229\u7528\u5faa\u73af\u52a0-hasownproperty",level:2},{value:"\u5229\u7528<code>filter</code>",id:"\u5229\u7528filter",level:2},{value:"\u4f7f\u7528 <code>Map</code> \u5bf9\u8c61",id:"\u4f7f\u7528-map-\u5bf9\u8c61",level:2},{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],d={toc:m};function s(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e00\u5171\u603b\u7ed3\u4e86  \u65b9\u6cd5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"Set")),(0,l.kt)("li",{parentName:"ol"},"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49,",(0,l.kt)("inlineCode",{parentName:"li"},"splice()"),"\u53bb\u6389\u91cd\u590d\u503c"),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"indexOf"),"\u53bb\u91cd"),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"includes()")),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528\u5faa\u73af\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"hasOwnProperty()")),(0,l.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"filter")),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Map")," \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93 ",(0,l.kt)("a",{parentName:"li",href:"https://www.lodashjs.com/docs/lodash.uniqWith"},(0,l.kt)("inlineCode",{parentName:"a"},"Lodash"))," \u3001",(0,l.kt)("a",{parentName:"li",href:"https://ramda.cn/docs/#uniq"},(0,l.kt)("inlineCode",{parentName:"a"},"Ramda")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7528\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [\n  1, 1, 21, 21,0,\n  'true', 'false',true, false, 'false', true, \n  undefined,  null, null, NaN, 'NaN', NaN, 'NaN', false, undefined,\n  0, 'a', 'a', 'true', \n  {'name': 'jim', 'age': 20},\n  {'age': 20, 'name': 'jim'},\n  {'name': 'kart', 'age': 21},\n  {'name': 'kart', 'age': 21},\n  {}, {}\n];\n")),(0,l.kt)("h2",{id:"\u5229\u7528set"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"Set")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr1(arr) {\n  return [...new Set(arr)];\n  // or\n  // return Array.from(new Set(arr))\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd\uff1b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ef\u7528\u4e8e\u53ea\u5305\u542b\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u6570\u7ec4\u53bb\u91cd\u3002")),(0,l.kt)("h2",{id:"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49splice\u53bb\u6389\u91cd\u590d\u503c"},"\u53cc\u5c42\u5faa\u73af\u5224\u65ad\u662f\u5426\u76f8\u7b49,",(0,l.kt)("inlineCode",{parentName:"h2"},"splice()"),"\u53bb\u6389\u91cd\u590d\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr2(arr) {\n  // \u5916\u5c42\u5faa\u73af\u5143\u7d20\uff0c\u5185\u5c42\u5faa\u73af\u65f6\u6bd4\u8f83\u503c\u3002\u503c\u76f8\u540c\u65f6\uff0c\u5219\u5220\u53bb\u8fd9\u4e2a\u503c\u3002\n  for(let i = 0;i<arr.length;i++) {\n    for(let j = i+1;j<arr.length;j++) {\n      if(arr[i] === arr[j]) {\n        arr.splice(j, 1);\n        j--;\n      }\n    }\n  }\n  return arr;\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NaN")," \u4e0d\u7b49\u4e8e\u5b83\u672c\u8eab\uff0c\u6240\u4ee5\u4e0d\u80fd\u53bb\u6389\u91cd\u590d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"NaN")),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd")),(0,l.kt)("h2",{id:"\u5229\u7528indexof\u53bb\u91cd"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"indexOf"),"\u53bb\u91cd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function uniqueArr3(arr) {\n  if(!Array.isArray(arr)) {\n    throw "\u4e0d\u662f\u6570\u7ec4\uff01"\n    return;\n  }\n  const newArr = [];\n  for(let i = 0;i<arr.length;i++) {\n    if(newArr.indexOf(arr[i]) === -1 ) {\n      newArr.push(arr[i]);\n    }\n  }\n  return newArr;\n}\n')),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u53bb\u6389\u91cd\u590d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"NaN")),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd")),(0,l.kt)("h2",{id:"\u5229\u7528includes"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"includes()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr4(arr) {\n  if (!Array.isArray(arr)) {\n      console.log('type error!')\n      return;\n  }\n  var newArr= [];\n  for (var i = 1; i < arr.length; i++) {\n      if (!newArr.includes(arr[i])) {\n          newArr.push(arr[i]);\n      }\n  }\n  return newArr;\n}\n")),(0,l.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"reduce()")," \u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr4(arr) {\n  if (!Array.isArray(arr)) {\n      console.log('type error!')\n      return;\n  }\n  return arr.reduce((pre, cur) => {\n    if(pre.includes(cur)) {\n      return pre;\n    } else {\n      return [...pre, cur];\n    }\n  },[])\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd"),(0,l.kt)("h2",{id:"\u5229\u7528\u5faa\u73af\u52a0-hasownproperty"},"\u5229\u7528\u5faa\u73af\u52a0 ",(0,l.kt)("inlineCode",{parentName:"h2"},"hasOwnProperty()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr5(arr) {\n  let map = {};\n  return arr.filter((item, idx, oldArr) => {\n    if(map.hasOwnProperty(typeof item + '' + item)){\n      return false;\n    } else {\n      map[typeof item + '' + item] = true\n      return true;\n    }\n  })\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u5c06object\u7c7b\u578b\u90fd\u53bb\u6389\u4e86\uff0c\u4ec5\u5269\u4e00\u4e2a"),(0,l.kt)("h2",{id:"\u5229\u7528filter"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"h2"},"filter")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr6(arr) {\n  return arr.filter((item, idx, oldArr) => {\n    return oldArr.indexOf(item) === idx;\n  })\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd\uff0c\u4e0d\u80fd\u8bc6\u522b NaN \u548c \u201dNaN\u201c"),(0,l.kt)("h2",{id:"\u4f7f\u7528-map-\u5bf9\u8c61"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h2"},"Map")," \u5bf9\u8c61"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"\u5bf9\u8c61\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u76f8\u540c\u7684key\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function uniqueArr7(arr) {\n  let map = new Map();\n  let newArr = [];\n  for (let i = 0; i < arr.length; i++) {\n    if(!map.has(arr[i])) {\n      map.set(arr[i], true); \n      newArr.push(arr[i]);\n    }\n  }\n  return newArr;\n}\n")),(0,l.kt)("p",null,"\u7f3a\u70b9\uff1a\u5bf9\u8c61\u65e0\u6cd5\u53bb\u91cd"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lodash",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_.uniqWith(arr, _.isEqual)")))),(0,l.kt)("li",{parentName:"ul"},"Ramda",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"R.uniq(arr)"))))),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u65b9\u6cd5\u5927\u90e8\u5206\u90fd\u80fd\u5c06\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u91cd\u590d\u6570\u53bb\u6389\uff0c\u4f46\u662f\u65e0\u6cd5\u5c06 object \u7c7b\u578b\u7684\u6570\u636e\u53bb\u91cd\u3002\n\u5229\u7528\u7b2c\u4e09\u65b9\u5e93\u80fd\u5b8c\u7f8e\u53bb\u91cd\uff0c\u4f46\u662f\u6709\u65f6\u4e3a\u4e86\u4e00\u4e2a\u65b9\u6cd5\u53bb\u5f15\u5165\u4e00\u6574\u4e2a\u5e93\u5e76\u4e0d\u662f\u5341\u5206\u4f18\u96c5\u7684\u505a\u6cd5\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u5f53\u8981\u53bb\u91cd\u7684\u6570\u7ec4\u91cc\u786e\u8ba4\u6ca1\u6709 object \u7c7b\u578b\u7684\u6570\u636e\u65f6\uff0c\u4ee5\u4e0a\u65b9\u6cd5\u57fa\u672c\u4efb\u9009\uff1b\u4f46\u662f\u5982\u679c\u6570\u7ec4\u5185\u4f1a\u6709\u5bf9\u8c61\uff0c\u90a3\u5c31\u8981\u8003\u8651\u5f15\u5165\u7b2c\u4e09\u65b9\u5e93\u6216\u8005\u5728\u51fd\u6570\u4e2d\u5224\u65ad\u5bf9\u8c61\u7c7b\u578b\uff0c\u7136\u540e\u505a\u7279\u6b8a\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/YanniLiYnni/article/details/110630008"},"CSDN - JavaScript\u57fa\u7840 - \u6570\u7ec4\u53bb\u91cd\u768411\u79cd\u65b9\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.lodashjs.com/docs/lodash.uniqWith"},"lodash - uniqWith")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ramda.cn/docs/#uniq"},"Ramda - uniq"))))}s.isMDXComponent=!0}}]);