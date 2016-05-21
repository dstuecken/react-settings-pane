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

<img src="https://raw.githubusercontent.com/dstuecken/react-settings-pane/master/examples/demo.png" width="500">


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
 //let settings = settings;

 // But here is an example of how it should look like:
 let settings = {
   'mysettings.general.name': 'Dennis Stücken',
   'mysettings.general.color-theme': 'purple',
   'mysettings.general.email': 'dstuecken@react-settings-pane.com',
   'mysettings.general.picture': 'earth',
   'mysettings.profile.firstname': 'Dennis',
   'mysettings.profile.lastname': 'Stücken',
 };


 // Define your menu
 const menu = [
   {
     title: 'General',          // Title that is displayed as text in the menu
     url: '/settings/general'  // Identifier (url-slug)
   },
   {
     title: 'Profile',
     url: '/settings/profile'
   },
   {
     title: 'Notifications',
     url: '/settings/notifications'
   },
   {
     title: 'Language',
     url: '/settings/language'
   },
   {
     title: 'Appearance',
     url: '/settings/appearance'
   },
   {
     title: 'Plugins',
     url: '/settings/plugins'
   },
   {
     title: 'About',
     url: '/settings/about'
   }
 ];

 // Define one of your Settings pages
/*
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
     type: 'custom',
     component: <select><option value="blue">Blue</option><option value="red">Red</option></select>,
   }
 ];
 */

 // Save settings after close
 let leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
   // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

   if (wasSaved && newSettings !== oldSettings) {
     // do something with the settings, e.g. save via ajax.

     //console.log(oldSettings);
     //console.log(newSettings);
   }

   this.prefs.className = 'modal'
 };

let settingsChanged = (ev) => {
  //alert(React.findDOMNode(this.refs).value);
}

console.log('rerendering App')

 // <SettingsPage handler="/settings/general" options={dynamicOptionsForGeneralPage} />
 // Return your Settings Pane
 return (
   <div>
     <button onClick={this.showPrefs.bind(this)} className="btn btn-primary">Show Preferences</button>
     <div ref={(ref) => this.overlay = ref} className="overlay" />

     <div ref={(ref) => this.prefs = ref} className="modal">
       <SettingsPane items={menu} index="/settings/general" settings={settings} onChange={settingsChanged} onPaneLeave={leavePaneHandler}>
         <SettingsMenu headline="General Settings" />
         <SettingsContent header={true}>
           <SettingsPage handler="/settings/general">
              <fieldset className="form-group">
                <label for="profileName">Name: </label>
                <input type="text" className="form-control" name="mysettings.general.name" placeholder="Name" id="general.ame" onChange={settingsChanged} defaultValue={settings['mysettings.general.name']} />
              </fieldset>
              <fieldset className="form-group">
                <label for="generalMail">E-Mail address: </label>
                <input type="text" className="form-control" name="mysettings.general.email" placeholder="E-Mail Address" id="generalMail" onChange={settingsChanged} defaultValue={settings['mysettings.general.email']} />
              </fieldset>
              <fieldset className="form-group">
                <label for="generalPic">Picture: </label>
                <input type="text" className="form-control" name="mysettings.general.picture" placeholder="Picture" id="generalPic" onChange={settingsChanged} defaultValue={settings['mysettings.general.picture']} />
              </fieldset>
              <fieldset className="form-group">
                <label for="profileColor">Color-Theme: </label>
                <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={settings['mysettings.general.color-theme']}>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="purple">Purple</option>
                  <option value="orange">Orange</option>
                </select>
              </fieldset>
           </SettingsPage>
           <SettingsPage handler="/settings/profile">
               <fieldset className="form-group">
                 <label for="profileFirstname">Firstname: </label>
                 <input type="text" className="form-control" name="mysettings.profile.firstname" placeholder="Firstname" id="profileFirstname" onChange={settingsChanged} defaultValue={settings['mysettings.profile.firstname']} />
               </fieldset>
               <fieldset className="form-group">
                 <label for="profileLastname">Lastname: </label>
                 <input type="text" className="form-control" name="mysettings.profile.lastname" placeholder="Lastname" id="profileLastname" onChange={settingsChanged} defaultValue={settings['mysettings.profile.lastname']} />
               </fieldset>
               <fieldset className="form-group">
                 <label for="profileBiography">Biography: </label>
                 <textarea className="form-control" name="mysettings.profile.biography" placeholder="Biography" id="profileBiography" onChange={settingsChanged} defaultValue={settings['mysettings.profile.biography']} />
               </fieldset>
           </SettingsPage>
         </SettingsContent>
       </SettingsPane>
     </div>
   </div>
 )
}
```

## Formal API
#### &lt;SettingsPane />

- `settings: object`: Key/value object with your settings. Pased down to all SettingsPages.
- `items: array`: The menu items for the left menu
- `index: string`: The index Page (url-slug of it) 
- `onPaneLeave: function`: Callback function that is emitted after closing the pane
- `onMenuItemClick: function`: (optional) Callback function for each menu-item click. Could be used to push current url state to browser History.

#### &lt;SettingsMenu />

- `headline: string`: Window Title on top of the left menu 

#### &lt;SettingsContent />

- `header: bool|React.Component`: true = Title of current menu Item is displayed as an h2, can also be a React.Component for a custom headline. 

#### &lt;SettingsPage />

- `handler: string`: URL handler, this has to match with your menu url property.
- `options: array`: (optional) Options for a programattically generated settings page. See dynamicOptionsForGeneralPage for an example.

### Custom Styling

These are the default css classes: 

* div.settings-pane
* form.settings
* div.settings-left
* ul.settings-menu
* ul.settings-menu li.active
* div.settings-content
* div.headline
* div.settings-page
* div.scroller
* div.settings-innerpage
* div.settings-footer
* div.settings.close

### History callbacks

It is possible to push the url state to the browser history using react-router or whatever you feel like. This can be handled with a callback function that is passed to the SettingsPane component.

*Example*

```js
// Import browser history from react router
import { browserHistory } from 'react-router'

// Pass a callback function to the SettingsPane property "onMenuItemClick"
<SettingsPane onMenuItemClick={(menuItem) => browserHistory.push(menuItem.identifier)} />
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
