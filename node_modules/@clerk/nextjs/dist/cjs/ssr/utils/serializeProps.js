"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var serializeProps_exports = {};
__export(serializeProps_exports, {
  injectSSRStateIntoObject: () => injectSSRStateIntoObject,
  injectSSRStateIntoProps: () => injectSSRStateIntoProps
});
module.exports = __toCommonJS(serializeProps_exports);
function injectSSRStateIntoProps(callbackResult, authData) {
  return {
    ...callbackResult,
    props: injectSSRStateIntoObject(callbackResult.props, authData)
  };
}
const injectSSRStateIntoObject = (obj, authData) => {
  const __clerk_ssr_state = process.env.NODE_ENV !== "production" ? JSON.parse(JSON.stringify({ ...authData })) : { ...authData };
  return { ...obj, __clerk_ssr_state };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injectSSRStateIntoObject,
  injectSSRStateIntoProps
});
//# sourceMappingURL=serializeProps.js.map