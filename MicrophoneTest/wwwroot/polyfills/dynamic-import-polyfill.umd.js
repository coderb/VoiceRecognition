!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).dynamicImportPolyfill={})}(this,function(e){"use strict";e.initialize=function({modulePath:e=".",importFunctionName:t="__import__"}={}){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise((o,i)=>{const c=new URL(e,n);if(self[t].moduleMap[c])return o(self[t].moduleMap[c]);const l=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){i(new Error(`Failed to import: ${e}`)),r(m)},onload(){o(self[t].moduleMap[c]),r(m)}});document.head.appendChild(m)}),self[t].moduleMap={}}},Object.defineProperty(e,"__esModule",{value:!0})});
