"use strict";

var _angular = require("angular");

var _angular2 = _interopRequireDefault(_angular);

var _app = require("./app.component");

var _app2 = _interopRequireDefault(_app);

var _components = require("./components/components");

var _components2 = _interopRequireDefault(_components);

require("bootstrap-css-only");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(process.env.NODE_ENV);

_angular2.default.module("app", [_components2.default.name]).component("app", _app2.default);