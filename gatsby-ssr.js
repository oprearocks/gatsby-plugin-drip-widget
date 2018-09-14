'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _internals = require('./internals');

var _dripCode = require('./drip-code');

var _dripCode2 = _interopRequireDefault(_dripCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  var _defaultOptions$plugi = _extends({}, _internals.defaultOptions, pluginOptions),
      account = _defaultOptions$plugi.account;

  if (!account) return;

  setPostBodyComponents([_react2.default.createElement(_dripCode2.default, {
    account: account
  })]);
};