var y=Object.defineProperty;var o=(r,t)=>y(r,"name",{value:t,configurable:!0});import{h as _,F as m,G as p}from"./iframe.d55f9b26.js";import{M as b}from"./index.7f2fb675.js";import{i as h}from"./instrumenter.f2968a6a.js";import"./es.map.constructor.1b6994f6.js";function A(r,t){return T(r)||w(r,t)||E(r,t)||g()}o(A,"_slicedToArray");function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o(g,"_nonIterableRest");function E(r,t){if(!!r){if(typeof r=="string")return c(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(r,t)}}o(E,"_unsupportedIterableToArray");function c(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}o(c,"_arrayLikeToArray");function w(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],a=!0,f=!1,u,l;try{for(e=e.call(r);!(a=(u=e.next()).done)&&(n.push(u.value),!(t&&n.length===t));a=!0);}catch(i){f=!0,l=i}finally{try{!a&&e.return!=null&&e.return()}finally{if(f)throw l}}return n}}o(w,"_iterableToArrayLimit");function T(r){if(Array.isArray(r))return r}o(T,"_arrayWithHoles");var d=new b(global),C=d.fn.bind(d),O=h({action:C},{retain:!0}),S=O.action,v=_.getChannel(),s=[];v.on(m,function(){return s.forEach(function(r){var t;return r==null||(t=r.mockClear)===null||t===void 0?void 0:t.call(r)})});v.on(p,function(r){var t=r.newPhase;t==="loading"&&s.forEach(function(e){var n;return e==null||(n=e.mockClear)===null||n===void 0?void 0:n.call(e)})});var j=o(function(t){var e=t.id,n=t.initialArgs;return Object.entries(n).reduce(function(a,f){var u=A(f,2),l=u[0],i=u[1];return typeof i=="function"&&i.name==="actionHandler"?(Object.defineProperty(i,"name",{value:l,writable:!1}),Object.defineProperty(i,"__storyId__",{value:e,writable:!1}),a[l]=S(i),s.push(a[l]),a):(a[l]=i,a)},{})},"addActionsFromArgTypes"),F=[j];export{F as argsEnhancers};
//# sourceMappingURL=preview.d1aeea5b.js.map
