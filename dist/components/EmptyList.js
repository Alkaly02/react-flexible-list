"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var EmptyList = function EmptyList() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "empty"
  }, "There is no data");
};
var _default = exports["default"] = EmptyList;