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
export {
  injectSSRStateIntoObject,
  injectSSRStateIntoProps
};
//# sourceMappingURL=serializeProps.js.map