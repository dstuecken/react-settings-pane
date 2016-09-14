'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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


var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).call(this, props));

    _this._clicked = _this.clicked.bind(_this);
    return _this;
  }

  /**
   * MenuItem was clicked
   *
   * @param ev
   */


  _createClass(MenuItem, [{
    key: 'clicked',
    value: function clicked(ev) {
      ev.preventDefault();

      // If this is not a left click
      if (ev.button !== 0) {
        return;
      }

      if (this.props.onMenuItemClick) {
        this.props.onMenuItemClick(this.props.item);
      }

      this.props.switchContent(this.props.item);
    }

    /**
     * Render this component
     *
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props$item = this.props.item;
      var title = _props$item.title;
      var url = _props$item.url;var itemsClassName = this.props.active ? 'menu-item active' : 'menu-item';

      return _react2.default.createElement(
        'li',
        { title: title, className: itemsClassName },
        _react2.default.createElement(
          'a',
          { href: url, onClick: this._clicked },
          title
        )
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  item: _react.PropTypes.object.isRequired,
  switchContent: _react.PropTypes.func.isRequired,
  onMenuItemClick: _react.PropTypes.func
};
exports.default = MenuItem;