"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsFooter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-settings-pane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Dennis Stücken
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @licence MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsFooter = exports.SettingsFooter = function (_Component) {
  _inherits(SettingsFooter, _Component);

  function SettingsFooter(props) {
    _classCallCheck(this, SettingsFooter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsFooter).call(this, props));

    _this.closeClicked = _this.closeClicked.bind(_this);
    return _this;
  }

  /**
   * Close was clicked
   */


  /**
   * PropTypes
   *
   * @type {{settings: *, onPaneLeave: *}}
   */


  _createClass(SettingsFooter, [{
    key: "closeClicked",
    value: function closeClicked(ev) {
      ev.preventDefault();

      this.props.onPaneLeave(false, this.props.settings, this.props.settings);
    }

    /**
     * Render this component
     *
     * @returns {XML}
     */

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "settings-footer" },
        _react2.default.createElement(
          "div",
          { className: "settings-close" },
          _react2.default.createElement(
            "button",
            { className: this.props.closeButtonClass || 'btn btn-default', onClick: this.closeClicked },
            "Close"
          )
        ),
        _react2.default.createElement(
          "button",
          { className: this.props.saveButtonClass || 'btn btn-primary' },
          "Save"
        )
      );
    }
  }]);

  return SettingsFooter;
}(_react.Component);

SettingsFooter.propTypes = {
  settings: _react.PropTypes.object.isRequired,
  onPaneLeave: _react.PropTypes.func.isRequired,
  closeButtonClass: _react.PropTypes.string,
  saveButtonClass: _react.PropTypes.string
};
exports.default = SettingsFooter;