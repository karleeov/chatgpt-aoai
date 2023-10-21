function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    void fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
export {
  runMiddleware
};
//# sourceMappingURL=utils.js.map