const maskSecretKey = (str) => {
  if (!str || typeof str !== "string") {
    return str;
  }
  try {
    return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
  } catch (e) {
    return "";
  }
};
const logFormatter = (entry) => {
  return (Array.isArray(entry) ? entry : [entry]).map((entry2) => {
    if (typeof entry2 === "string") {
      return maskSecretKey(entry2);
    }
    const masked = Object.fromEntries(Object.entries(entry2).map(([k, v]) => [k, maskSecretKey(v)]));
    return JSON.stringify(masked, null, 2);
  }).join(", ");
};
export {
  logFormatter
};
//# sourceMappingURL=logFormatter.js.map