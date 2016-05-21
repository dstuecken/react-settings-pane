# react-settings-pane

[![npm version](https://img.shields.io/npm/v/react-settings-pane.svg?style=flat-square)](https://www.npmjs.com/package/react-settings-pane) 

> *React Component to display a neat settings page that enables customizable configuration in your app. It should easily integrate into popup components to also display it as a popup.*

## Installation

```
npm i react-settings-pane --save
```

## Demo

[Coming Soon](http://www.dvlpr.de/react/settings-pane/examples/index.html)

Demo file in repository: ./examples/index.html

## Usage Example

./examples/app.jsx


#### Import into your react project

```js
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane'
```

```js
// Render function of any of your components:
render() {
  // You will maybe receive your settings from this.props or do a fetch request in your componentWIllMount
  //let settings = this.props.settings;
  
  // But here is an example of how it should look like:
  let settings = {
    'mysettings.general.email': 'example@react-settings-pane.com', 
    'mysettings.general.color-theme': 'blue', 
    'mysettings.profile.name': 'Dennis Stücken'
  };
  
  
  // Define your menu
  const menu = [
    {
      title: 'General',          // Title that is displayed as text in the menu
      url: '/settings/general',  // Identifier (url-slug)
      history: true              // Push the identifier to browser history (You have to define a history callback function for this, see History Callbacks). Default is false.
    },
    {
      title: 'Profile',
      url: '/settings/profile'
    }
  ];
  
  // Define one of your Settings pages
  const dynamicOptionsForGeneralPage = [
    {
      label: 'Account',
      type: 'headline',
    },
    {
      id: 'mysettings.general.email',
      label: 'E-Mail address',
      type: 'text',
    },
    {
      id: 'mysettings.general.password',
      label: 'Password',
      type: 'password',
    },
    {
      id: 'mysettings.general.password-repeat',
      label: 'Password repeat',
      type: 'password',
    },
    {
      label: 'Appearance',
      type: 'headline',
    },
    {
      id: 'mysettings.general.color-theme',
      label: 'Color Theme',
      type: 'custom'
      component: <select><option value="blue">Blue</option><option value="red">Red</option></</select>,
    }
  ];
  
  // Return your Settings Pane
  return (
    <SettingsPane>
      <SettingsMenu items={menu} settings={settings} />
      <SettingsContent index="/settings/general">
        <SettingsPage handler="/settings/general" options={dynamicOptionsForGeneralPage} />
        <SettingsPage handler="/settings/profile">
            <div>
                <label for="profileName">Name</label>
                <input type="text" name="mysettings.profile.name" id="profileName" value="" />
            </div>
        </SettingsPage>
      </SettingsContent>
    </SettingsPane>
  )
}
```

#### Properites

*SettingsMenu*
- @items: The menu items for the left menu

*SettingsContent*
- @index: The index Page (url-slug of it) 

*SettingsPage*
- @handler: URL handler, this has to match with your menu url property.
- @options: (optional) Options for a programattically generated settings page. See dynamicOptionsForGeneralPage for an example.

### Custom Styling

These are the default css classes: 

* div.settings-pane
* ul.settings-menu
* ul.settings-menu
* li.active
* div.settings-content
* div.settings-page

### History callbacks

It is possible to push the url state to the browser history using react-router or whatever you feel like. This can be handled with a callback function that is passed to the SettingsPane component.

*Example*

```js
// Import browser history from react router
import { browserHistory } from 'react-router'

// Pass a callback function to the SettingsPane property "historyCallback"
<SettingsPane historyCallback={(menuItem) => browserHistory.push(menuItem.identifier)} />
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)