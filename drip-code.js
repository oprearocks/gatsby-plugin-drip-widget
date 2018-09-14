"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createScriptMarkup(account) {
  return {
    __html: "\n      var _dcq = _dcq || [];\n      var _dcs = _dcs || {};\n      _dcs.account = " + account + ";\n\n      (function() {\n        var dc = document.createElement('script');\n        dc.type = 'text/javascript'; dc.async = true;\n        dc.src = \"//tag.getdrip.com/" + account + ".js\";\n        var s = document.getElementsByTagName('script')[0];\n        s.parentNode.insertBefore(dc, s);\n      })();\n    "
  };
}
var DripCode = function DripCode(_ref) {
  var account = _ref.account;
  return _react2.default.createElement("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: createScriptMarkup(account)
  });
};

exports.default = DripCode;