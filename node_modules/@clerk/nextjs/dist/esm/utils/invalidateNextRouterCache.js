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
export {
  invalidateNextRouterCache
};
//# sourceMappingURL=invalidateNextRouterCache.js.map