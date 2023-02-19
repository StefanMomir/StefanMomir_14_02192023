"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var Pagination = function Pagination(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  /* PAGINATION */
  return props.pages.filter(function (pageNumber) {
    return pageNumber <= props.maxPageLimit && pageNumber > props.minPageLimit;
  }).map(function (pageNumber) {
    return /*#__PURE__*/React.createElement("div", {
      key: pageNumber,
      className: props.currentPage === pageNumber ? "page-button select" : "page-button",
      "data-page": pageNumber,
      onClick: function onClick(e) {
        props.setCurrentPage(pageNumber);
      }
    }, pageNumber);
  });
};
var _default = Pagination;
exports["default"] = _default;