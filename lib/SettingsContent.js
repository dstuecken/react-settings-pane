'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsContent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SettingsFooter = require('./SettingsFooter');

var _SettingsFooter2 = _interopRequireDefault(_SettingsFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-settings-pane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Dennis Stücken
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @licence MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsContent = exports.SettingsContent = function (_Component) {
  _inherits(SettingsContent, _Component);

  function SettingsContent() {
    _classCallCheck(this, SettingsContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsContent).apply(this, arguments));
  }

  _createClass(SettingsContent, [{
    key: 'renderPage',


    /**
     * Renders a page that is defined as a handler for 'url'.
     *
     * @param url
     * @returns array
     */
    value: function renderPage(url) {
      var _this2 = this;

      var page = [];

      if (url) {

        // Search for a matching url handler
        page = _react.Children.map(this.props.children, function (child) {

          if (child.props.handler && child.props.handler === url) {

            return _react2.default.cloneElement(child, {
              settings: _this2.props.settings,
              onChange: _this2.props.onChange,
              onPaneLeave: _this2.props.onPaneLeave,
              onMenuItemClick: _this2.props.onMenuItemClick,
              currentPage: _this2.props.currentPage
            });
          }
        });
      }

      // There was no page found, so show a page not defined message
      if (page.length === 0) {
        page = [_react2.default.createElement(
          'div',
          { key: 'settingsEmptyMessage', className: 'empty-message' },
          _react2.default.createElement(
            'p',
            null,
            'Page not defined'
          )
        )];
      }

      return page;
    }

    /**
     * Main renderer
     *
     * @returns {XML}
     */


    /**
     * PropTypes
     *
     * @type {{currentPage: *, items: *, currentPage: *, settings: object, onChange: *, switchContent: *, onPaneLeave: *, onMenuItemClick: *}}
     */

  }, {
    key: 'render',
    value: function render() {

      var page = this.props.currentPage ? this.props.currentPage : '',
          header = '';

      if (this.props.header) {
        if (this.props.header === true) {
          var currentItem = this.props.items.reduce(function (prev, item) {
            return item.url === page ? item : prev;
          });
          header = _react2.default.createElement(
            'div',
            { className: 'headline' },
            _react2.default.createElement(
              'h3',
              null,
              currentItem.title
            )
          );
        } else {
          header = this.props.header;
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'settings-content' },
        header,
        _react2.default.createElement(
          'div',
          { className: 'settings-page' },
          _react2.default.createElement(
            'div',
            { className: 'scroller-wrap' },
            this.renderPage(page)
          )
        ),
        _react2.default.createElement(_SettingsFooter2.default, this.props)
      );
    }
  }]);

  return SettingsContent;
}(_react.Component);

SettingsContent.propTypes = {
  currentPage: _react.PropTypes.string,
  header: _react.PropTypes.bool,
  items: _react.PropTypes.array,
  settings: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  switchContent: _react.PropTypes.func,
  onPaneLeave: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func
};
exports.default = SettingsContent;