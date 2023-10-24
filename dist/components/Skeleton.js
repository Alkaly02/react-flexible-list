"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./skeleton.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "movie--isloading"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-image"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-text-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-main-text"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-main-text"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-sub-text"
  }))));
};
var _default = exports["default"] = Skeleton;