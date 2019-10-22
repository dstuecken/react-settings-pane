/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import serialize from "form-serialize";

export class SettingsPane extends Component {
  /**
   * PropTypes
   *
   * @type {{children: *, settings: *, index: *, onChange: *, onPaneLeave: *, onMenuItemClick: *}}
   */
  static propTypes = {
    children: PropTypes.node.isRequired,
    settings: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    index: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onPaneLeave: PropTypes.func,
    onMenuItemClick: PropTypes.func,
    closeButtonClass: PropTypes.string,
    saveButtonClass: PropTypes.string
  };

  /**
   * Construct.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.index,
      items: props.items,
      settings: props.settings
    };

    this._handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Adds an event listener
   *
   * @param node
   * @param event
   * @param handler
   * @returns {{remove: (function())}}
   */
  addEvent(node, event, handler) {
    node.addEventListener(event, handler);

    return {
      remove() {
        node.removeEventListener(event, handler);
      }
    };
  }

  /**
   * Handle keyup and close pane if esc key was pressed
   *
   * @param ev
   */
  handleKeyUp(ev) {
    if (ev.keyCode === 27) {
      this.props.onPaneLeave(false, this.state.settings, this.state.settings);
      this._keyUpListener.remove();
    }
  }

  /**
   * Component was loaded
   */
  load() {
    this._keyUpListener = this.addEvent(
      document,
      "keyup",
      this.handleKeyUp.bind(this)
    );
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate() {
    this.load();
  }

  /**
   * Switch content to another menuitem
   *
   * @param menuItem
   */
  switchContent(menuItem) {
    // Check if currentPage is different than the new urls
    if (this.state.currentPage !== menuItem.url) {
      // Switch to menuItem's url and reload the components
      this.setState(
        Object.assign({}, this.state, {
          currentPage: menuItem.url
        })
      );
    }
  }

  /**
   * Settings changed
   *
   * @param ev
   */
  settingsChanged(ev) {
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
  handleSubmit(ev) {
    ev.preventDefault();

    if (this.form) {
      // Retrieve settings via form serialization
      // todo: Create custom form Components and retrieve form data from these components instead of serializing..
      let newSettings = Object.assign(
        {},
        this.props.settings,
        serialize(this.form, { hash: true })
      );

      // Update state with new settings
      if (JSON.stringify(newSettings) !== JSON.stringify(this.props.settings)) {
        this.setState(
          Object.assign(this.state, {
            settings: newSettings
          })
        );

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
  render() {
    let { items, settings, currentPage } = this.state;

    // Pass some props to all SettingsPane Children (usualy there are two childs: SettingsMenu and SettingsContent)
    let childrenWithProps = Children.map(this.props.children, child =>
      React.cloneElement(child, {
        items,
        settings,
        currentPage,

        onPaneLeave: this.props.onPaneLeave,
        onMenuItemClick: this.props.onMenuItemClick,
        switchContent: this.switchContent.bind(this),
        onChange: this.settingsChanged
      })
    );

    // Return JSX
    return (
      <div className={`settings-pane ${this.props.className}`}>
        <form
          ref={ref => (this.form = ref)}
          className="settings"
          onSubmit={this._handleSubmit}
        >
          {childrenWithProps}
        </form>
      </div>
    );
  }
}

export default SettingsPane;
