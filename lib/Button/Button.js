"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ButtonLoader = _interopRequireDefault(require("./ButtonLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      wide = props.wide,
      disabled = props.disabled,
      loading = props.loading,
      outline = props.outline,
      other = _objectWithoutProperties(props, ["children", "className", "type", "color", "size", "wide", "disabled", "loading", "outline"]);

  var classNames = (0, _clsx["default"])(className, 'button', "-".concat(color), {
    '-wide': wide,
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-loading': loading,
    '-outline': outline
  });
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: type,
    className: classNames,
    disabled: disabled || loading
  }, other), loading && "\xA0", loading && /*#__PURE__*/_react["default"].createElement(_ButtonLoader["default"], null), !loading && children);
};

var _default = Button;
exports["default"] = _default;