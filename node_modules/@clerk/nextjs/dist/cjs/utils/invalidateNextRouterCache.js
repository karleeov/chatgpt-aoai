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
var invalidateNextRouterCache_exports = {};
__export(invalidateNextRouterCache_exports, {
  invalidateNextRouterCache: () => invalidateNextRouterCache
});
module.exports = __toCommonJS(invalidateNextRouterCache_exports);
const invalidateNextRouterCache = () => {
  if (typeof window === "undefined") {
    return;
  }
  const invalidate = (cache) => {
    Object.keys(cache).forEach((key) => {
      delete cache[key];
    });
  };
  try {
    invalidate(window.next.router.sdc);
    invalidate(window.next.router.sbc);
  } catch (e) {
    return;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  invalidateNextRouterCache
});
//# sourceMappingURL=invalidateNextRouterCache.js.map