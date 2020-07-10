"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Hint = _interopRequireDefault(require("../Hint/Hint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = function Input(props) {
  var _cx;

  var type = props.type,
      value = props.value,
      name = props.name,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      errorMessage = props.errorMessage,
      size = props.size,
      labelModifier = props.labelModifier,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      other = _objectWithoutProperties(props, ["type", "value", "name", "placeholder", "errorMessage", "size", "labelModifier", "disabled"]);

  var classNames = (0, _clsx["default"])('input', (_cx = {}, _defineProperty(_cx, labelModifier, !!labelModifier), _defineProperty(_cx, '-error', !!errorMessage), _defineProperty(_cx, '-medium', size === 'medium'), _defineProperty(_cx, '-small', size === 'small'), _defineProperty(_cx, '-big', size === 'big'), _cx));
  return (
    /*#__PURE__*/
    // TODO: fix htmlFor bug
    // eslint-disable-next-line no-alert
    _react["default"].createElement("label", {
      className: classNames
    }, /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: type,
      name: name,
      placeholder: placeholder,
      defaultValue: value,
      disabled: disabled
    }, other)), errorMessage && /*#__PURE__*/_react["default"].createElement(_Hint["default"], {
      error: true
    }, errorMessage))
  );
};

var _default = Input;
exports["default"] = _default;