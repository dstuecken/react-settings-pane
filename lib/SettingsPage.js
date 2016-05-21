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


var SettingsPage = function (_Component) {
  _inherits(SettingsPage, _Component);

  function SettingsPage() {
    _classCallCheck(this, SettingsPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsPage).apply(this, arguments));
  }

  _createClass(SettingsPage, [{
    key: "renderWithOptions",


    /**
     * Render page with dynamic options object
     *
     * @param options
     * @returns {XML}
     */
    value: function renderWithOptions(options) {
      // todo: set onChange={this.props.onChange} to all form elements.

      return _react2.default.createElement(
        "div",
        null,
        "Render With Options (not implemented, yet)"
      );
    }

    /**
     * Render with content (Childs of <SettingsPage />)
     *
     * @param content
     * @returns {*}
     */


    /**
     * PropTypes
     *
     * @type {{handler: *, options: (string|string|*|Type.object|string), settings: (string|string|*|Type.object|string), onChange: *, switchContent: *, onPaneLeave: *, onMenuItemClick: *}}
     */

  }, {
    key: "renderWithContent",
    value: function renderWithContent(content) {
      return content;
    }

    /**
     * Update form in a very dirty way..
     *
     * @todo find a better way or disable custom forms via children
     */

  }, {
    key: "updateForm",
    value: function updateForm() {
      if (this.props.children) {
        var settings = this.props.settings,
            key = void 0,
            elements = void 0;
        for (key in settings) {
          if (settings.hasOwnProperty(key)) {
            elements = document.getElementsByName(key);
            if (elements.length > 0 && elements[0]) {
              elements[0].value = settings[key];
            }
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateForm();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateForm();
    }

    /**
     * Return content for this page
     *
     * @returns {*}
     */

  }, {
    key: "content",
    value: function content() {
      if (this.props.options) {
        return this.renderWithOptions(this.props.options);
      } else if (this.props.children) {
        return this.renderWithContent(this.props.children);
      }
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
        { className: "scroller settings-innerpage" },
        this.content()
      );
    }
  }]);

  return SettingsPage;
}(_react.Component);

SettingsPage.propTypes = {
  handler: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.object,
  settings: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  switchContent: _react.PropTypes.func,
  onPaneLeave: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func
};
exports.default = SettingsPage;