"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResourceDataMap = _ref => {
  let {
    resourceData = [],
    resourceItem: ResourceItem,
    resourceName
  } = _ref;
  resourceData = Array.isArray(resourceData) ? resourceData : [resourceData];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: resourceData.map((resource, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(ResourceItem, {
      [resourceName]: resource
    }, i))
  });
};
var _default = ResourceDataMap;
exports.default = _default;