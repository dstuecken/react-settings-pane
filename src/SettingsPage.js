/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export class SettingsPage extends Component {
  /**
   * PropTypes
   *
   * @type {{handler: *, options: (string|string|*|Type.object|string), settings: (string|string|*|Type.object|string), onChange: *, switchContent: *, onPaneLeave: *, onMenuItemClick: *}}
   */
  static propTypes = {
    handler: PropTypes.string.isRequired,
    options: PropTypes.object,
    settings: PropTypes.object,
    onChange: PropTypes.func,
    switchContent: PropTypes.func,
    onPaneLeave: PropTypes.func,
    onMenuItemClick: PropTypes.func
  };

  /**
   * Render page with dynamic options object
   *
   * @returns {XML}
   */
  renderWithOptions(/*options*/) {
    // todo: set onChange={this.props.onChange} to all form elements.

    return <div>Render With Options (not implemented, yet)</div>;
  }

  /**
   * Render with content (Childs of <SettingsPage />)
   *
   * @param content
   * @returns {*}
   */
  renderWithContent(content) {
    return content;
  }

  /**
   * Update form in a very dirty way..
   *
   * @todo find a better way or disable custom forms via children
   */
  updateForm() {
    if (this.props.children) {
      let settings = this.props.settings,
        key,
        elements;
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

  componentDidMount() {
    this.updateForm();
  }

  componentDidUpdate() {
    this.updateForm();
  }

  /**
   * Return content for this page
   *
   * @returns {*}
   */
  content() {
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
  render() {
    return <div className="scroller settings-innerpage">{this.content()}</div>;
  }
}

export default SettingsPage;
