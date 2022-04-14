"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[206],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,k=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(k,l(l({ref:n},i),{},{components:t})):r.createElement(k,l({ref:n},i))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={},u=void 0,c={unversionedId:"JavaScript/\u7bad\u5934\u51fd\u6570",id:"JavaScript/\u7bad\u5934\u51fd\u6570",title:"\u7bad\u5934\u51fd\u6570",description:"\u5e38\u89c4\u51fd\u6570",source:"@site/notes/JavaScript/\u7bad\u5934\u51fd\u6570.md",sourceDirName:"JavaScript",slug:"/JavaScript/\u7bad\u5934\u51fd\u6570",permalink:"/blog/docs/JavaScript/\u7bad\u5934\u51fd\u6570",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b14\u8bb0\u7b80\u4ecb",permalink:"/blog/docs/introduction"},next:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/blog/docs/Node/\u547d\u4ee4\u884c\u5de5\u5177"}},i={},s=[{value:"1.\u4e0d\u4f1a\u7ed1\u5b9a htis",id:"1\u4e0d\u4f1a\u7ed1\u5b9a-htis",level:3},{value:"2.\u6ca1\u6709 arguments \u5bf9\u8c61",id:"2\u6ca1\u6709-arguments-\u5bf9\u8c61",level:3},{value:"3.\u4e0d\u80fd\u901a\u8fc7 new \u5173\u952e\u5b57\u8c03\u7528",id:"3\u4e0d\u80fd\u901a\u8fc7-new-\u5173\u952e\u5b57\u8c03\u7528",level:3},{value:"4.\u6ca1\u6709\u539f\u578b",id:"4\u6ca1\u6709\u539f\u578b",level:3}],m={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e38\u89c4\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function funcName(params) {\n  return params + 2\n}\nfuncName(2)\n// 4\n")),(0,o.kt)("p",null,"\u7bad\u5934\u51fd\u6570:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var funcName = (params) => params + 2\nfuncName(2)\n// 4\n")),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7b80\u5316\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},";() => {\n  statements\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7701\u7565\u62ec\u53f7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},";(parameters) => {\n  statements\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u503c\u4ec5\u4ec5\u53ea\u6709\u4e00\u4e2a\u8868\u8fbe\u5f0f(expression), \u8fd8\u53ef\u4ee5\u7701\u7565\u5927\u62ec\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"parameters => expression\n// \u7b49\u4ef7\u4e8e:\nfunction (parameters){\n  return expression;\n}\n")),(0,o.kt)("a",{name:"RrdrU"}),(0,o.kt)("h3",{id:"1\u4e0d\u4f1a\u7ed1\u5b9a-htis"},"1.\u4e0d\u4f1a\u7ed1\u5b9a htis"),(0,o.kt)("p",null,"\u540c\u65f6,\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u7ed1\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u3002 \u6216\u8005\u8bf4\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u6539\u53d8",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u672c\u6765\u7684\u7ed1\u5b9a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Counter() {\n  this.num = 0\n}\nvar a = new Counter()\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u4f7f\u7528\u4e86\u5173\u952e\u5b57",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"\u6784\u9020\uff0cCount()\u51fd\u6570\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u7ed1\u5b9a\u5230\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u8d4b\u503c\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u3002\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"console.log"),"\u6253\u5370",(0,o.kt)("inlineCode",{parentName:"p"},"a.num"),"\uff0c\u4f1a\u8f93\u51fa 0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(a.num)\n// 0\n")),(0,o.kt)("a",{name:"mXhQA"}),(0,o.kt)("h3",{id:"2\u6ca1\u6709-arguments-\u5bf9\u8c61"},"2.\u6ca1\u6709 arguments \u5bf9\u8c61"),(0,o.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684 arguments \u5bf9\u8c61\uff0c\u8fd9\u4e0d\u4e00\u5b9a\u662f\u4ef6\u574f\u4e8b\uff0c\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u5916\u56f4\u51fd\u6570\u7684 arguments \u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function constant() {\n    return () => arguments[0]\n}\nvar result = constant(1);\nconsole.log(result()); // 1\n")),(0,o.kt)("p",null,"\u90a3\u5982\u679c\u6211\u4eec\u5c31\u662f\u8981\u8bbf\u95ee\u7bad\u5934\u51fd\u6570\u7684\u53c2\u6570\u5462\uff1f",(0,o.kt)("br",null),"\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u540d\u53c2\u6570\u6216\u8005 rest \u53c2\u6570\u7684\u5f62\u5f0f\u8bbf\u95ee\u53c2\u6570:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"let nums = (...nums) => nums;\n")),(0,o.kt)("a",{name:"Tfmp7"}),(0,o.kt)("h3",{id:"3\u4e0d\u80fd\u901a\u8fc7-new-\u5173\u952e\u5b57\u8c03\u7528"},"3.\u4e0d\u80fd\u901a\u8fc7 new \u5173\u952e\u5b57\u8c03\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var Foo = () => {}\nvar foo = new Foo() // TypeError: Foo is not a constructor\n")),(0,o.kt)("p",null,"\u539f\u56e0\u662f:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"JavaScript \u51fd\u6570\u6709\u4e24\u4e2a\u5185\u90e8\u65b9\u6cd5\uff1a[","[Call]","] \u548c [","[Construct]","]\u3002\n\u5f53\u901a\u8fc7 new \u8c03\u7528\u51fd\u6570\u65f6\uff0c\u6267\u884c [","[Construct]","] \u65b9\u6cd5\uff0c\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u7136\u540e\u518d\u6267\u884c\u51fd\u6570\u4f53\uff0c\u5c06 this \u7ed1\u5b9a\u5230\u5b9e\u4f8b\u4e0a\u3002\n\u5f53\u76f4\u63a5\u8c03\u7528\u7684\u65f6\u5019\uff0c\u6267\u884c [","[Call]","] \u65b9\u6cd5\uff0c\u76f4\u63a5\u6267\u884c\u51fd\u6570\u4f53\u3002\n\u7bad\u5934\u51fd\u6570\u5e76\u6ca1\u6709 [","[Construct]","] \u65b9\u6cd5\uff0c\u4e0d\u80fd\u88ab\u7528\u4f5c\u6784\u9020\u51fd\u6570\uff0c\u5982\u679c\u901a\u8fc7 new \u7684\u65b9\u5f0f\u8c03\u7528\uff0c\u4f1a\u62a5\u9519")),(0,o.kt)("a",{name:"fu9cI"}),(0,o.kt)("h3",{id:"4\u6ca1\u6709\u539f\u578b"},"4.\u6ca1\u6709\u539f\u578b"),(0,o.kt)("p",null,"\u7531\u4e8e\u4e0d\u80fd\u4f7f\u7528 new \u8c03\u7528\u7bad\u5934\u51fd\u6570\uff0c\u6240\u4ee5\u4e5f\u6ca1\u6709\u6784\u5efa\u539f\u578b\u7684\u9700\u6c42\uff0c\u4e8e\u662f\u7bad\u5934\u51fd\u6570\u4e5f\u4e0d\u5b58\u5728 prototype \u8fd9\u4e2a\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var Foo = () => {}\nconsole.log(Foo.prototype) // undefined\n")))}f.isMDXComponent=!0}}]);