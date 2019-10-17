import React from "react";
import ReactDOM from "react-dom";
import {
  SettingsPane,
  SettingsPage,
  SettingsContent,
  SettingsMenu
} from "../src";
import assert from "assert";

describe("SettingsPane", function() {
  it("renders into a node", function() {
    const App = function() {
      const settings = {
        "mysettings.general.name": "Dennis Stücken",
        "mysettings.general.username": "dstuecken",
        "mysettings.general.color-theme": "purple",
        "mysettings.general.email": "dstuecken@react-settings-pane.com",
        "mysettings.general.picture": "earth",
        "mysettings.profile.firstname": "Dennis",
        "mysettings.profile.lastname": "Stücken"
      };

      // Save settings after close
      function _leavePaneHandler(wasSaved, newSettings, oldSettings) {
        // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

        if (wasSaved && newSettings !== oldSettings) {
          // do something with the settings, e.g. save via ajax.
          this.setState(newSettings);
        }
      }

      // React if a single setting changed
      function _settingsChanged(ev) {}

      // Define your menu
      const _menu = [
        {
          title: "General", // Title that is displayed as text in the menu
          url: "/settings/general" // Identifier (url-slug)
        },
        {
          title: "Profile",
          url: "/settings/profile"
        }
      ];

      return (
        <div className="reactSettingsPane">
          <SettingsPane
            items={_menu}
            index="/settings/general"
            settings={settings}
            onChange={_settingsChanged}
            onPaneLeave={_leavePaneHandler}
          >
            <SettingsMenu headline="General Settings" />
            <SettingsContent header={true}>
              <SettingsPage handler="/settings/general">
                <fieldset className="form-group">
                  <label htmlFor="generalName">Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.general.name"
                    placeholder="Name"
                    id="generalName"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.general.name"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="generalUsername">Username: </label>
                  <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">
                      @
                    </span>
                    <input
                      type="text"
                      name="mysettings.general.username"
                      className="form-control"
                      placeholder="Username"
                      aria-describedby="basic-addon1"
                      onChange={_settingsChanged}
                      defaultValue={settings["mysettings.general.username"]}
                    />
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="generalMail">E-Mail address: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.general.email"
                    placeholder="E-Mail Address"
                    id="generalMail"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.general.email"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="generalPic">Picture: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.general.picture"
                    placeholder="Picture"
                    id="generalPic"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.general.picture"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="profileColor">Color-Theme: </label>
                  <select
                    name="mysettings.general.color-theme"
                    id="profileColor"
                    className="form-control"
                    defaultValue={settings["mysettings.general.color-theme"]}
                  >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                  </select>
                </fieldset>
              </SettingsPage>
              <SettingsPage handler="/settings/profile">
                <fieldset className="form-group">
                  <label htmlFor="profileFirstname">Firstname: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.profile.firstname"
                    placeholder="Firstname"
                    id="profileFirstname"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.profile.firstname"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="profileLastname">Lastname: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mysettings.profile.lastname"
                    placeholder="Lastname"
                    id="profileLastname"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.profile.lastname"]}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="profileBiography">Biography: </label>
                  <textarea
                    className="form-control"
                    name="mysettings.profile.biography"
                    placeholder="Biography"
                    id="profileBiography"
                    onChange={_settingsChanged}
                    defaultValue={settings["mysettings.profile.biography"]}
                  />
                </fieldset>
              </SettingsPage>
            </SettingsContent>
          </SettingsPane>
        </div>
      );
    };

    let node = document.createElement("div");
    ReactDOM.render(<App />, node);

    let settingsParent = node.querySelector(".reactSettingsPane").parentNode;
    assert.equal(settingsParent, node);

    ReactDOM.unmountComponentAtNode(node);
  });
});
