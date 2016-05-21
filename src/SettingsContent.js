/*
 * @react-settings-pane
 */
import React, { PropTypes, Component, Children} from 'react'
import SettingsFooter from './SettingsFooter'

export default class SettingsContent extends Component {

  /**
   * PropTypes
   *
   * @type {{currentPage: *, items: *, currentPage: *, settings: (string|string|*|Type.object|string), onChange: *, switchContent: *, onPaneLeave: *, onMenuItemClick: *}}
   */
  static propTypes = {
    currentPage: PropTypes.string,
    header: PropTypes.bool,
    items: PropTypes.array,
    settings: PropTypes.object,
    onChange: PropTypes.func,
    switchContent: PropTypes.func,
    onPaneLeave: PropTypes.func,
    onMenuItemClick: PropTypes.func
  };

  /**
   * Renders a page that is defined as a handler for 'url'.
   *
   * @param url
   * @returns array
   */
  renderPage(url) {
    let page = []

    if (url) {

      // Search for a matching url handler
      page = Children.map(this.props.children, (child) => {

        if (child.props.handler && child.props.handler === url) {

          return React.cloneElement(child, {
            settings: this.props.settings,
            onChange: this.props.onChange,
            onPaneLeave: this.props.onPaneLeave,
            onMenuItemClick: this.props.onMenuItemClick,
            currentPage: this.props.currentPage
          })

        }
      })
    }

    // There was no page found, so show a page not defined message
    if (page.length === 0) {
      page = [
        (
          <div key="settingsEmptyMessage" className="empty-message">
            <p>
              Page not defined
            </p>
          </div>
        )
      ];
    }

    return page
  }

  /**
   * Main renderer
   *
   * @returns {XML}
   */
  render() {

    let page = this.props.currentPage ? this.props.currentPage : '', header = '';

    if (this.props.header) {

      if (this.props.header === true) {
        let currentItem = this.props.items.reduce((prev, item) => item.url === page ? item : prev)
        header = <div className="headline"><h3>{currentItem.title}</h3></div>
      }
      else {
        header = this.props.header;
      }

    }

    return (
      <div className="settings-content">
        {header}
        <div className="settings-page">
          <div className="scroller-wrap">
            {this.renderPage(page)}
          </div>
        </div>

        <SettingsFooter {...this.props} />
      </div>
    )
  }
}
