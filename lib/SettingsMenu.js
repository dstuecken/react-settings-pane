'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-settings-pane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Dennis Stücken
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @licence MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsMenu = exports.SettingsMenu = function (_Component) {
  _inherits(SettingsMenu, _Component);

  function SettingsMenu() {
    _classCallCheck(this, SettingsMenu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsMenu).apply(this, arguments));
  }

  _createClass(SettingsMenu, [{
    key: 'menuItems',


    /**
     * Itearate through all items and return an array of MenuItems
     *
     * @returns array
     */
    value: function menuItems() {
      var _this2 = this;

      var props = void 0;

      return this.props.items.map(function (item, i) {

        // Define all props for this MenuItem
        props = {
          item: item,
          active: _this2.props.currentPage === item.url,
          onMenuItemClick: _this2.props.onMenuItemClick,
          switchContent: _this2.props.switchContent,
          key: i
        };

        return _react2.default.createElement(_MenuItem2.default, props);
      });
    }

    /**
     * Render this component
     *
     * @returns {XML}
     */


    /**
     * PropTypes
     *
     * @type {{items: *, headline: *, currentPage: *, switchContent: *, onMenuItemClick: *}}
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'settings-left' },
        _react2.default.createElement(
          'ul',
          { className: 'settings-menu' },
          this.props.headline ? _react2.default.createElement(
            'li',
            { className: 'headline' },
            this.props.headline
          ) : '',
          this.menuItems()
        )
      );
    }
  }]);

  return SettingsMenu;
}(_react.Component);

SettingsMenu.propTypes = {
  headline: _react.PropTypes.string.isRequired,
  items: _react.PropTypes.array,
  currentPage: _react.PropTypes.string,
  switchContent: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func
};
exports.default = SettingsMenu;