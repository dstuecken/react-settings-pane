/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export class SettingsFooter extends Component {
  /**
   * PropTypes
   *
   * @type {{settings: *, onPaneLeave: *}}
   */
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onPaneLeave: PropTypes.func.isRequired,
    closeButtonClass: PropTypes.string,
    saveButtonClass: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.closeClicked = this.closeClicked.bind(this);
  }

  /**
   * Close was clicked
   */
  closeClicked(ev) {
    ev.preventDefault();

    this.props.onPaneLeave(false, this.props.settings, this.props.settings);
  }

  /**
   * Render this component
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="settings-footer">
        <div className="settings-close">
          <button
            className={this.props.closeButtonClass || "btn btn-default"}
            onClick={this.closeClicked}
          >
            Close
          </button>
        </div>
        <button className={this.props.saveButtonClass || "btn btn-primary"}>
          Save
        </button>
      </div>
    );
  }
}

export default SettingsFooter;
