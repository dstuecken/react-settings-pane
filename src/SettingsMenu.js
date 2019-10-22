/**
 * @react-settings-pane
 *
 * @copyright Dennis Stücken
 * @licence MIT
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

export class SettingsMenu extends Component {
  /**
   * PropTypes
   *
   * @type {{items: *, headline: *, currentPage: *, switchContent: *, onMenuItemClick: *}}
   */
  static propTypes = {
    headline: PropTypes.string.isRequired,
    items: PropTypes.array,
    currentPage: PropTypes.string,
    switchContent: PropTypes.func,
    onMenuItemClick: PropTypes.func
  };

  /**
   * Itearate through all items and return an array of MenuItems
   *
   * @returns array
   */
  menuItems() {
    let props;

    return this.props.items.map((item, i) => {
      // Define all props for this MenuItem
      props = {
        item,
        active: this.props.currentPage === item.url,
        onMenuItemClick: this.props.onMenuItemClick,
        switchContent: this.props.switchContent,
        key: i
      };

      return <MenuItem {...props} />;
    });
  }

  /**
   * Render this component
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="settings-left">
        <ul className="settings-menu">
          {this.props.headline ? (
            <li className="headline">{this.props.headline}</li>
          ) : (
            ""
          )}
          {this.menuItems()}
        </ul>
      </div>
    );
  }
}

export default SettingsMenu;
