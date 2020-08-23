"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgError(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    d: "M13.565 2.464a3 3 0 01.994.994l7.324 11.977A3 3 0 0119.323 20H4.676a3 3 0 01-2.56-4.565L9.442 3.458a3 3 0 014.124-.994zm-2.418 2.038L3.823 16.478A1 1 0 004.676 18h14.647a1 1 0 00.854-1.522L12.853 4.502a1 1 0 00-1.706 0zM12 14a1 1 0 110 2 1 1 0 010-2zm0-6a1 1 0 011 1v3a1 1 0 01-2 0V9a1 1 0 011-1z",
    id: "error_svg__a"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "error_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#error_svg__a"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#error_svg__b)",
    fill: "#000"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
}

var _default = SvgError;
exports["default"] = _default;