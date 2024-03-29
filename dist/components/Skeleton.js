"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Skeleton = function Skeleton() {
  var movieIsLoadingStyle = {
    height: '250px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
  };
  var loadingImageStyle = {
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px)',
    backgroundSize: '250px',
    animation: 'shine-loading-image 2s infinite ease-out'
  };
  var loadingContentStyle = {
    flex: 1,
    background: '#fff',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  var loadingMainTextStyle = {
    height: '5px',
    width: '100%',
    background: '#ececec',
    backgroundImage: 'linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px)',
    backgroundSize: '250px',
    borderRadius: '10px',
    animation: 'shine-loading-container-items 2s infinite ease-out'
  };
  var loadingBtnStyle = {
    width: '100%',
    height: '50px',
    background: '#ecb9b9'
  };
  var skeletonRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '10px',
    gap: '5px'
  };
  var skeletonTableStyle = {
    background: '#e1e1e1',
    borderRadius: '4px',
    height: '40px',
    position: 'relative',
    overflow: 'hidden'
  };
  var skeletonTableBeforeStyle = {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '-150px',
    top: '0',
    height: '100%',
    width: '150px',
    background: 'linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%)',
    animation: 'load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite'
  };

  // You can define other keyframes here as well

  var styles = {
    movieIsLoadingStyle: movieIsLoadingStyle,
    loadingImageStyle: loadingImageStyle,
    loadingContentStyle: loadingContentStyle,
    loadingMainTextStyle: loadingMainTextStyle,
    loadingBtnStyle: loadingBtnStyle,
    skeletonRowStyle: skeletonRowStyle,
    skeletonTableStyle: skeletonTableStyle,
    skeletonTableBeforeStyle: skeletonTableBeforeStyle
  };

  // return (
  //   <div className="movie--isloading">
  //     <div className="loading-image"></div>
  //     <div className="loading-content">
  //       <div className="loading-text-container">
  //         <div className="loading-main-text"></div>
  //         <div className="loading-main-text"></div>
  //         <div className="loading-sub-text"></div>
  //       </div>
  //     </div>
  //     {/* <div className="loading-btn"></div> */}
  //   </div>
  // )
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "skeleton",
    style: styles.movieIsLoadingStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.loadingImageStyle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.loadingContentStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.loadingContentStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.loadingMainTextStyle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.loadingMainTextStyle
  }))));
};
var _default = exports["default"] = Skeleton;