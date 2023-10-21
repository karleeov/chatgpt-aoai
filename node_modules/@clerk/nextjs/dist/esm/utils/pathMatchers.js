import { pathToRegexp } from "path-to-regexp";
const paths = {
  toRegexp: (path) => {
    try {
      return pathToRegexp(path);
    } catch (e) {
      throw new Error(
        `Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp
${e.message}`
      );
    }
  }
};
export {
  paths
};
//# sourceMappingURL=pathMatchers.js.map