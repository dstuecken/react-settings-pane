import React from 'react'
import ReactDOM from 'react-dom'
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from '../dist/ReactSettingsPane'

class App extends React.Component {
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
         type: 'custom',
         component: <select><option value="blue">Blue</option><option value="red">Red</option></select>,
       }
     ];

     // Save settings after close
     let leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
       // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

       if (wasSaved && newSettings !== oldSettings) {
         // do something with the settings, e.g. save via ajax.
       }
     };

     // Return your Settings Pane
     return (
       <SettingsPane index="/settings/general" settings={settings} onPaneLeave={leavePaneHandler}>
         <SettingsMenu items={menu} />
         <SettingsContent>
           <SettingsPage handler="/settings/general" options={dynamicOptionsForGeneralPage} />
           <SettingsPage handler="/settings/profile">
               <div>
                   <label for="profileName">Name</label>
                   <input type="text" name="mysettings.profile.name" id="profileName" value="{this.props.settings['mysettings.profile.name']}" />
               </div>
           </SettingsPage>
         </SettingsContent>
       </SettingsPane>
     )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);