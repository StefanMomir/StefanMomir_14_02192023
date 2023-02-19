"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var PreviousPage = function PreviousPage(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  var setPreviousPage = function setPreviousPage() {
    if ((props.currentPage - 1) % props.limitPageNumbers <= 0) {
      props.setMaxPageLimit(props.maxPageLimit - props.limitPageNumbers);
      props.setMinPageLimit(props.minPageLimit - props.limitPageNumbers);
    }
    props.setCurrentPage(function (prev) {
      return prev - 1;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.currentPage !== 1 ? "left" : "hide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined arrows",
    onClick: setPreviousPage
  }, "navigate_before"));
};
var _default = PreviousPage;
exports["default"] = _default;