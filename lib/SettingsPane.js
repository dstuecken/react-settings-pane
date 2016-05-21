"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-router-redux
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsPane = function (_Component) {
  _inherits(SettingsPane, _Component);

  function SettingsPane() {
    _classCallCheck(this, SettingsPane);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsPane).apply(this, arguments));
  }

  _createClass(SettingsPane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var childrenWithProps = _react.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          settings: _this2.props.settings,
          onPaneLeave: _this2.props.onPaneLeave,
          onMenuItemClick: _this2.props.onMenuItemClick
        });
      });

      var childerenWithProps2 = _react2.default.cloneElement(this.props.children, {
        settings: this.props.settings,
        onPaneLeave: this.props.onPaneLeave,
        onMenuItemClick: this.props.onMenuItemClick
      });

      return _react2.default.createElement(
        "div",
        { className: "settings-pane" },
        childerenWithProps2
      );
    }
  }]);

  return SettingsPane;
}(_react.Component);

SettingsPane.propTypes = {
  children: _react.PropTypes.node.isRequired,
  settings: _react.PropTypes.object.isRequired,
  onPaneLeave: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func
};
exports.default = SettingsPane;