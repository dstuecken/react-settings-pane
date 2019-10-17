/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MenuItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    switchContent: PropTypes.func.isRequired,
    onMenuItemClick: PropTypes.func
  };

  constructor(props) {
    super(props);

    this._clicked = this.clicked.bind(this);
  }

  /**
   * MenuItem was clicked
   *
   * @param ev
   */
  clicked(ev) {
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
  render() {
    let { title, url } = this.props.item,
      itemsClassName = this.props.active ? "menu-item active" : "menu-item";

    return (
      <li title={title} className={itemsClassName}>
        <a href={url} onClick={this._clicked}>
          {title}
        </a>
      </li>
    );
  }
}
