'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsPane = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formSerialize = require('form-serialize');

var _formSerialize2 = _interopRequireDefault(_formSerialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @react-settings-pane
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Dennis Stücken
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @licence MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsPane = exports.SettingsPane = function (_Component) {
  _inherits(SettingsPane, _Component);

  /**
   * Construct.
   *
   * @param props
   */

  function SettingsPane(props) {
    _classCallCheck(this, SettingsPane);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SettingsPane).call(this, props));

    _this.state = {
      currentPage: props.index,
      items: props.items,
      settings: props.settings
    };

    _this._handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  /**
   * Adds an event listener
   *
   * @param node
   * @param event
   * @param handler
   * @returns {{remove: (function())}}
   */


  /**
   * PropTypes
   *
   * @type {{children: *, settings: *, index: *, onChange: *, onPaneLeave: *, onMenuItemClick: *}}
   */


  _createClass(SettingsPane, [{
    key: 'addEvent',
    value: function addEvent(node, event, handler) {
      node.addEventListener(event, handler);

      return {
        remove: function remove() {
          node.removeEventListener(event, handler);
        }
      };
    }

    /**
     * Handle keyup and close pane if esc key was pressed
     *
     * @param ev
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(ev) {
      if (ev.keyCode === 27) {
        this.props.onPaneLeave(false, this.state.settings, this.state.settings);
        this._keyUpListener.remove();
      }
    }

    /**
     * Component was loaded
     */

  }, {
    key: 'load',
    value: function load() {
      this._keyUpListener = this.addEvent(document, 'keyup', this.handleKeyUp.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.load();
    }

    /**
     * Switch content to another menuitem
     *
     * @param menuItem
     */

  }, {
    key: 'switchContent',
    value: function switchContent(menuItem) {
      // Check if currentPage is different than the new urls
      if (this.state.currentPage !== menuItem.url) {

        // Switch to menuItem's url and reload the components
        this.setState(Object.assign({}, this.state, {
          currentPage: menuItem.url
        }));
      }
    }

    /**
     * Settings changed
     *
     * @param ev
     */

  }, {
    key: 'settingsChanged',
    value: function settingsChanged(ev) {

      // Propagate onChange event
      if (this.props.onChange) {
        this.props.onChange(ev);
      }
    }

    /**
     * Handle Formsubmit
     *
     * @param ev
     */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(ev) {
      ev.preventDefault();

      if (this.form) {
        // Retrieve settings via form serialization
        // todo: Create custom form Components and retrieve form data from these components instead of serializing..
        var newSettings = Object.assign({}, this.props.settings, (0, _formSerialize2.default)(this.form, { hash: true }));

        // Update state with new settings
        if (JSON.stringify(newSettings) !== JSON.stringify(this.props.settings)) {
          this.setState(Object.assign(this.state, {
            settings: newSettings
          }));

          // Propagate onPaneLeave
          this.props.onPaneLeave(true, newSettings, this.props.settings);
        } else {
          // Propagate onPaneLeave
          this.props.onPaneLeave(true, this.props.settings, this.props.settings);
        }
      } else {
        //console.error('Unknown error: Form reference to this.form invalid.')
      }
    }

    /**
     * Render this component
     *
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var items = _state.items;
      var settings = _state.settings;
      var currentPage = _state.currentPage;

      // Pass some props to all SettingsPane Children (usualy there are two childs: SettingsMenu and SettingsContent)

      var childrenWithProps = _react.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          items: items,
          settings: settings,
          currentPage: currentPage,

          onPaneLeave: _this2.props.onPaneLeave,
          onMenuItemClick: _this2.props.onMenuItemClick,
          switchContent: _this2.switchContent.bind(_this2),
          onChange: _this2.settingsChanged
        });
      });

      // Return JSX
      return _react2.default.createElement(
        'div',
        { className: 'settings-pane' },
        _react2.default.createElement(
          'form',
          { ref: function ref(_ref) {
              return _this2.form = _ref;
            }, className: 'settings', onSubmit: this._handleSubmit },
          childrenWithProps
        )
      );
    }
  }]);

  return SettingsPane;
}(_react.Component);

SettingsPane.propTypes = {
  children: _react.PropTypes.node.isRequired,
  settings: _react.PropTypes.object.isRequired,
  items: _react.PropTypes.array.isRequired,
  index: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func,
  onPaneLeave: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func,
  closeButtonClass: _react.PropTypes.string,
  saveButtonClass: _react.PropTypes.string
};
exports.default = SettingsPane;