"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectDestructuringEmpty"));
var NextPage = function NextPage(_ref) {
  var props = Object.assign({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  var setNextPage = function setNextPage() {
    if (props.currentPage + 1 > props.maxPageLimit) {
      props.setMaxPageLimit(props.maxPageLimit + props.limitPageNumbers);
      props.setMinPageLimit(props.minPageLimit + props.limitPageNumbers);
    }
    props.setCurrentPage(function (prev) {
      return prev + 1;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.currentPage >= props.pages.length ? "hide" : "right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined arrows",
    onClick: setNextPage
  }, "navigate_next"));
};
var _default = NextPage;
exports["default"] = _default;