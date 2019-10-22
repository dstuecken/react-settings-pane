/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    return (
      <input
        type={this.props.type || "text"}
        className={this.props.className}
        name={this.props.name}
        value={this.props.value}
      />
    );
  }
}

export default Input;
