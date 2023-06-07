"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Skeleton = _interopRequireDefault(require("./Skeleton"));
var _EmptyList = _interopRequireDefault(require("./EmptyList"));
var _ResourceDataMap = _interopRequireDefault(require("./ResourceDataMap"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GridList = _ref => {
  let {
    isLoading = false,
    resourceItem: ResourceItem,
    resourceName,
    resourceData = [],
    skeleton: LoadingSkeleton = _Skeleton.default,
    emptyComponent: EmptyComponent = _EmptyList.default,
    gap = 15,
    cardWidth = 250
  } = _ref;
  const container = {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fill,minmax(".concat(cardWidth, "px,1fr))"),
    gap: gap + 'px',
    overflowY: 'auto'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: container,
      children: [1, 2, 3, 4, 5, 6].map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)(LoadingSkeleton, {}, item))
    }) : resourceData.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: container,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResourceDataMap.default, {
        resourceData: resourceData,
        resourceItem: ResourceItem,
        resourceName: "".concat(resourceName)
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(EmptyComponent, {})
  });
};
var _default = GridList;
exports.default = _default;