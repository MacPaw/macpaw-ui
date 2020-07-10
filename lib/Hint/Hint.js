"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hint = function Hint(props) {
  var large = props.large,
      children = props.children,
      error = props.error;
  var hintClassName = (0, _clsx["default"])('hint', {
    '-large': large,
    '-error': error
  });
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: hintClassName
  }, children);
};

var _default = Hint;
exports["default"] = _default;