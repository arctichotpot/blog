"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,f=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p=void 0,c={unversionedId:"JavaScript/new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565",id:"JavaScript/new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565",title:"new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565",description:"\u6839\u636e MDN \u7684\u89e3\u91ca:",source:"@site/notes/JavaScript/new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565.md",sourceDirName:"JavaScript",slug:"/JavaScript/new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565",permalink:"/blog/docs/JavaScript/new\u4e4b\u540e\u5230\u5e95\u5e72\u4e86\u5565",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JavaScript \u9519\u8bef\u5904\u7406\u8bed\u53e5",permalink:"/blog/docs/JavaScript/JavaScript \u9519\u8bef\u5904\u7406\u8bed\u53e5"},next:{title:"\u4e8b\u4ef6\u5192\u6ce1_\u4e8b\u4ef6\u6355\u83b7_\u4e8b\u4ef6\u59d4\u6258",permalink:"/blog/docs/JavaScript/\u4e8b\u4ef6\u5192\u6ce1_\u4e8b\u4ef6\u6355\u83b7_\u4e8b\u4ef6\u59d4\u6258"}},u={},s=[{value:"\u8be6\u7ec6\u89e3\u91ca\u4e0b",id:"\u8be6\u7ec6\u89e3\u91ca\u4e0b",level:2},{value:"1. \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61",id:"1-\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61",level:3},{value:"2. \u94fe\u63a5\u8be5\u5bf9\u8c61(\u8bbe\u7f6e\u8be5\u5bf9\u8c61\u7684 constructor)\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61(\u521b\u5efa\u7684\u5bf9\u8c61)",id:"2-\u94fe\u63a5\u8be5\u5bf9\u8c61\u8bbe\u7f6e\u8be5\u5bf9\u8c61\u7684-constructor\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u521b\u5efa\u7684\u5bf9\u8c61",level:3},{value:"3. \u5c06\u7b2c\u4e00\u6b65\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a this \u7684\u4e0a\u4e0b\u6587",id:"3-\u5c06\u7b2c\u4e00\u6b65\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a-this-\u7684\u4e0a\u4e0b\u6587",level:3}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6839\u636e MDN \u7684\u89e3\u91ca:",(0,o.kt)("br",null))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"new")," \u8fd0\u7b97\u7b26"),"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u5b9a\u4e49\u7684\u5bf9\u8c61\u7c7b\u578b\u7684\u5b9e\u4f8b\u6216\u5177\u6709\u6784\u9020\u51fd\u6570\u7684\u5185\u7f6e\u5bf9\u8c61\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("a",{name:"J29mT"})),(0,o.kt)("h1",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Test(name) {\n  this.name = name\n}\nconst a = new Test('asd')\nconsole.log(a.name)\n")),(0,o.kt)("p",null,"\u8fd9\u51e0\u4e2a\u6b65\u9aa4\u6267\u884c\u7684\u65f6\u5019,new \u5173\u952e\u5b57\u7684\u64cd\u4f5c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u94fe\u63a5\u8be5\u5bf9\u8c61(\u8bbe\u7f6e\u8be5\u5bf9\u8c61\u7684",(0,o.kt)("strong",{parentName:"li"},"constructor"),")\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61(\u521b\u5efa\u7684\u5bf9\u8c61)"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u7b2c\u4e00\u6b65\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a this \u7684\u4e0a\u4e0b\u6587")),(0,o.kt)("a",{name:"eOYf7"}),(0,o.kt)("h2",{id:"\u8be6\u7ec6\u89e3\u91ca\u4e0b"},"\u8be6\u7ec6\u89e3\u91ca\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n  this.name = name\n}\n")),(0,o.kt)("a",{name:"Wg8iO"}),(0,o.kt)("h3",{id:"1-\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61"},"1. \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const tom = new Person()\n// Person\xa0{name: undefined }\n")),(0,o.kt)("a",{name:"ARhNg"}),(0,o.kt)("h3",{id:"2-\u94fe\u63a5\u8be5\u5bf9\u8c61\u8bbe\u7f6e\u8be5\u5bf9\u8c61\u7684-constructor\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u521b\u5efa\u7684\u5bf9\u8c61"},"2. \u94fe\u63a5\u8be5\u5bf9\u8c61(\u8bbe\u7f6e\u8be5\u5bf9\u8c61\u7684 constructor)\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61(\u521b\u5efa\u7684\u5bf9\u8c61)"),(0,o.kt)("br",null),"> \u6bcf\u4e2a\u539f\u578b\u90fd\u6709\u4e00\u4e2a constructor \u5c5e\u6027\u6307\u5411\u5173\u8054\u7684\u6784\u9020\u51fd\u6570\u3002 > \u6bcf\u4e00\u4e2aJavaScript\u5bf9\u8c61(\u9664\u4e86 null )\u90fd\u5177\u6709\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u53eb__proto__\uff0c\u8fd9\u4e2a\u5c5e\u6027\u4f1a\u6307\u5411\u8be5\u5bf9\u8c61\u7684\u539f\u578b\u3002",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"tom._propto_ = Perosn.constructor\n\n// \u8fd9\u4e2a\u4f8b\u5b50\u91cc,Person\u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570,tom\u662f\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u53ef\u80fd\u66f4\u76f4\u89c2\u4e00\u70b9\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/jpeg/514813/1614242544139-2211f2f0-67dd-4429-8228-05713086f01b.jpeg",alt:null}),(0,o.kt)("inlineCode",{parentName:"p"},"Person(\u6784\u9020\u51fd\u6570)"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"constructor"),"\u6307\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.prototype(\u5b9e\u4f8b\u539f\u578b)"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"p"},"Person(\u6784\u9020\u51fd\u6570)"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),"\u6307\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.prototype(\u5b9e\u4f8b\u539f\u578b)"),(0,o.kt)("br",null),"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"new Person"),"\u65f6\u5019\u5e76\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"tom._propto_ = Perosn.constructor"),",\u4e5f\u5c31\u8bf4",(0,o.kt)("inlineCode",{parentName:"p"},"tom._propto_"),(0,o.kt)("br",null),"\u5c31\u6307\u5411\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.prototype(\u5b9e\u4f8b\u539f\u578b)"),(0,o.kt)("br",null),"\u6709\u70b9\u7ed5\u54c8\u54c8\u54c8\u54c8,\u8be6\u7ec6\u53ef\u4ee5\u53bb\u770b\u770b\u8fd9\u7bc7\u6587\u7ae0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mqyqingfeng/Blog/issues/2"},"JavaScript \u6df1\u5165\u4e4b\u4ece\u539f\u578b\u5230\u539f\u578b\u94fe"),(0,o.kt)("br",null)),(0,o.kt)("a",{name:"MG5iA"}),(0,o.kt)("h3",{id:"3-\u5c06\u7b2c\u4e00\u6b65\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a-this-\u7684\u4e0a\u4e0b\u6587"},"3. \u5c06\u7b2c\u4e00\u6b65\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f5c\u4e3a this \u7684\u4e0a\u4e0b\u6587"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Person.call(tom)"),(0,o.kt)("br",null)),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}k.isMDXComponent=!0}}]);