/*
 * @react-settings-pane
 */
import React, { PropTypes, Component } from 'react'

export default class SettingsPage extends Component {

  /**
   * PropTypes
   *
   * @type {{settings: *, onPaneLeave: *}}
   */
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onPaneLeave: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)

    this._closeClicked = this.closeClicked.bind(this)
  }

  /**
   * Close was clicked
   */
  closeClicked(ev) {
    ev.preventDefault()

    this.props.onPaneLeave(false, this.props.settings, this.props.settings)
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
          <button className="btn btn-default" onClick={this._closeClicked}>Close</button>
        </div>
        <button className="btn btn-primary">Save</button>
      </div>
    )
  }
}
