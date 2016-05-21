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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-settings-pane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsContent = function (_Component) {
  _inherits(SettingsContent, _Component);

  function SettingsContent() {
    _classCallCheck(this, SettingsContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsContent).apply(this, arguments));
  }

  _createClass(SettingsContent, [{
    key: "renderPage",
    value: function renderPage(url) {

      _react.Children.map(this.props.children, function (child) {

        console.log(child);

        /*
        React.cloneElement(child, {
                settings: this.props.settings,
                onPaneLeave: this.props.onPaneLeave,
                onMenuItemClick: this.props.onMenuItemClick,
                currentPage: this.state.currentPage
              })
            )
            */
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "settings-content" },
        this.renderPage(this.props.index)
      );
    }
  }]);

  return SettingsContent;
}(_react.Component);

SettingsContent.propTypes = {
  index: _react.PropTypes.string.isRequired
};
exports.default = SettingsContent;