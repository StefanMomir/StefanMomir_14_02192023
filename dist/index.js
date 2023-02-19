"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Pagination = _interopRequireDefault(require("./components/pagination/Pagination"));
var _NextPage = _interopRequireDefault(require("./components/pagination/NextPage"));
var _PreviousPage = _interopRequireDefault(require("./components/pagination/PreviousPage"));
var _PageStats = _interopRequireDefault(require("./components/pagination/PageStats"));
require("./css/styles/App.css");
var _default = {
  Pagination: _Pagination["default"],
  NextPage: _NextPage["default"],
  PreviousPage: _PreviousPage["default"],
  PageStats: _PageStats["default"]
};
exports["default"] = _default;