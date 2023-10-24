"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Skeleton = _interopRequireDefault(require("./Skeleton"));
var _EmptyList = _interopRequireDefault(require("./EmptyList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var GridList = function GridList(_ref) {
  var _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    resourceItem = _ref.resourceItem,
    _ref$resourceData = _ref.resourceData,
    resourceData = _ref$resourceData === void 0 ? [] : _ref$resourceData,
    _ref$skeleton = _ref.skeleton,
    LoadingSkeleton = _ref$skeleton === void 0 ? _Skeleton["default"] : _ref$skeleton,
    _ref$emptyComponent = _ref.emptyComponent,
    EmptyComponent = _ref$emptyComponent === void 0 ? _EmptyList["default"] : _ref$emptyComponent,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 15 : _ref$gap,
    _ref$cardWidth = _ref.cardWidth,
    cardWidth = _ref$cardWidth === void 0 ? 250 : _ref$cardWidth;
  var app = {
    minHeight: "300px",
    padding: 10
  };
  var container = {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fill,minmax(".concat(cardWidth, "px,1fr))"),
    gap: gap + 'px',
    overflowY: 'auto',
    padding: 10
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: app
  }, isLoading ? /*#__PURE__*/_react["default"].createElement("div", {
    style: container
  }, [1, 2, 3, 4, 5, 6].map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(LoadingSkeleton, {
      key: item
    });
  })) : resourceData.length ? /*#__PURE__*/_react["default"].createElement("div", {
    style: container
  }, resourceData.map(function (resource, i) {
    console.log({
      fromGrid: resource
    });
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: i
    }, resourceItem("rendreItem"));
  })) : /*#__PURE__*/_react["default"].createElement(EmptyComponent, null));
};
var _default = exports["default"] = GridList;