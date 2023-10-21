var $1DGzP$babelruntimehelpersextends = require("@babel/runtime/helpers/extends");
var $1DGzP$react = require("react");
var $1DGzP$radixuireactcontext = require("@radix-ui/react-context");
var $1DGzP$radixuireactprimitive = require("@radix-ui/react-primitive");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createProgressScope", () => $66e9ff9cece0fdb5$export$388eb2d8f6d3261f);
$parcel$export(module.exports, "Progress", () => $66e9ff9cece0fdb5$export$b25a304ec7d746bb);
$parcel$export(module.exports, "ProgressIndicator", () => $66e9ff9cece0fdb5$export$2b776f7e7ee60dbd);
$parcel$export(module.exports, "Root", () => $66e9ff9cece0fdb5$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Indicator", () => $66e9ff9cece0fdb5$export$adb584737d712b70);




/* -------------------------------------------------------------------------------------------------
 * Progress
 * -----------------------------------------------------------------------------------------------*/ const $66e9ff9cece0fdb5$var$PROGRESS_NAME = 'Progress';
const $66e9ff9cece0fdb5$var$DEFAULT_MAX = 100;
const [$66e9ff9cece0fdb5$var$createProgressContext, $66e9ff9cece0fdb5$export$388eb2d8f6d3261f] = $1DGzP$radixuireactcontext.createContextScope($66e9ff9cece0fdb5$var$PROGRESS_NAME);
const [$66e9ff9cece0fdb5$var$ProgressProvider, $66e9ff9cece0fdb5$var$useProgressContext] = $66e9ff9cece0fdb5$var$createProgressContext($66e9ff9cece0fdb5$var$PROGRESS_NAME);
const $66e9ff9cece0fdb5$export$b25a304ec7d746bb = /*#__PURE__*/ $1DGzP$react.forwardRef((props, forwardedRef)=>{
    const { __scopeProgress: __scopeProgress , value: valueProp , max: maxProp , getValueLabel: getValueLabel = $66e9ff9cece0fdb5$var$defaultGetValueLabel , ...progressProps } = props;
    const max = $66e9ff9cece0fdb5$var$isValidMaxNumber(maxProp) ? maxProp : $66e9ff9cece0fdb5$var$DEFAULT_MAX;
    const value = $66e9ff9cece0fdb5$var$isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = $66e9ff9cece0fdb5$var$isNumber(value) ? getValueLabel(value, max) : undefined;
    return /*#__PURE__*/ $1DGzP$react.createElement($66e9ff9cece0fdb5$var$ProgressProvider, {
        scope: __scopeProgress,
        value: value,
        max: max
    }, /*#__PURE__*/ $1DGzP$react.createElement($1DGzP$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($1DGzP$babelruntimehelpersextends))({
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": $66e9ff9cece0fdb5$var$isNumber(value) ? value : undefined,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": $66e9ff9cece0fdb5$var$getProgressState(value, max),
        "data-value": value !== null && value !== void 0 ? value : undefined,
        "data-max": max
    }, progressProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($66e9ff9cece0fdb5$export$b25a304ec7d746bb, {
    displayName: $66e9ff9cece0fdb5$var$PROGRESS_NAME
});
$66e9ff9cece0fdb5$export$b25a304ec7d746bb.propTypes = {
    max (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$66e9ff9cece0fdb5$var$isValidMaxNumber(propValue)) return new Error($66e9ff9cece0fdb5$var$getInvalidMaxError(strVal, componentName));
        return null;
    },
    value (props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = $66e9ff9cece0fdb5$var$isValidMaxNumber(props.max) ? props.max : $66e9ff9cece0fdb5$var$DEFAULT_MAX;
        if (valueProp != null && !$66e9ff9cece0fdb5$var$isValidValueNumber(valueProp, max)) return new Error($66e9ff9cece0fdb5$var$getInvalidValueError(strVal, componentName));
        return null;
    }
};
/* -------------------------------------------------------------------------------------------------
 * ProgressIndicator
 * -----------------------------------------------------------------------------------------------*/ const $66e9ff9cece0fdb5$var$INDICATOR_NAME = 'ProgressIndicator';
const $66e9ff9cece0fdb5$export$2b776f7e7ee60dbd = /*#__PURE__*/ $1DGzP$react.forwardRef((props, forwardedRef)=>{
    var _context$value;
    const { __scopeProgress: __scopeProgress , ...indicatorProps } = props;
    const context = $66e9ff9cece0fdb5$var$useProgressContext($66e9ff9cece0fdb5$var$INDICATOR_NAME, __scopeProgress);
    return /*#__PURE__*/ $1DGzP$react.createElement($1DGzP$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($1DGzP$babelruntimehelpersextends))({
        "data-state": $66e9ff9cece0fdb5$var$getProgressState(context.value, context.max),
        "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : undefined,
        "data-max": context.max
    }, indicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($66e9ff9cece0fdb5$export$2b776f7e7ee60dbd, {
    displayName: $66e9ff9cece0fdb5$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ function $66e9ff9cece0fdb5$var$defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function $66e9ff9cece0fdb5$var$getProgressState(value, maxValue) {
    return value == null ? 'indeterminate' : value === maxValue ? 'complete' : 'loading';
}
function $66e9ff9cece0fdb5$var$isNumber(value) {
    return typeof value === 'number';
}
function $66e9ff9cece0fdb5$var$isValidMaxNumber(max) {
    // prettier-ignore
    return $66e9ff9cece0fdb5$var$isNumber(max) && !isNaN(max) && max > 0;
}
function $66e9ff9cece0fdb5$var$isValidValueNumber(value, max) {
    // prettier-ignore
    return $66e9ff9cece0fdb5$var$isNumber(value) && !isNaN(value) && value <= max && value >= 0;
} // Split this out for clearer readability of the error message.
function $66e9ff9cece0fdb5$var$getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$66e9ff9cece0fdb5$var$DEFAULT_MAX}\`.`;
}
function $66e9ff9cece0fdb5$var$getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$66e9ff9cece0fdb5$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const $66e9ff9cece0fdb5$export$be92b6f5f03c0fe9 = $66e9ff9cece0fdb5$export$b25a304ec7d746bb;
const $66e9ff9cece0fdb5$export$adb584737d712b70 = $66e9ff9cece0fdb5$export$2b776f7e7ee60dbd;




//# sourceMappingURL=index.js.map
