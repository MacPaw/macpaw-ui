"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 75 : _ref$size;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#000"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    stroke: "#ebebeb",
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "2s",
    repeatCount: "indefinite"
  })))));
};

var _default = Loader;
exports["default"] = _default;