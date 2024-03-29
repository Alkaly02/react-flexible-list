"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var ResourceDataMap = function ResourceDataMap(_ref) {
  var _ref$resourceData = _ref.resourceData,
    resourceData = _ref$resourceData === void 0 ? [] : _ref$resourceData,
    ResourceItem = _ref.resourceItem,
    resourceName = _ref.resourceName;
  resourceData = Array.isArray(resourceData) ? resourceData : [resourceData];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, resourceData.map(function (resource, i) {
    return /*#__PURE__*/_react["default"].createElement(ResourceItem, (0, _extends2["default"])({
      key: i
    }, (0, _defineProperty2["default"])({}, resourceName, resource)));
  }));
};
var _default = exports["default"] = ResourceDataMap;