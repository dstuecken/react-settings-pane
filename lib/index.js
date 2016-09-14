'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsContent = exports.SettingsPage = exports.SettingsMenu = exports.SettingsPane = undefined;

var _SettingsPane2 = require('./SettingsPane');

var _SettingsPane3 = _interopRequireDefault(_SettingsPane2);

var _SettingsMenu2 = require('./SettingsMenu');

var _SettingsMenu3 = _interopRequireDefault(_SettingsMenu2);

var _SettingsPage2 = require('./SettingsPage');

var _SettingsPage3 = _interopRequireDefault(_SettingsPage2);

var _SettingsContent2 = require('./SettingsContent');

var _SettingsContent3 = _interopRequireDefault(_SettingsContent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SettingsPane = _SettingsPane3.default; /**
                                                * @react-settings-pane
                                                *
                                                * @copyright Dennis Stücken
                                                * @licence MIT
                                                */

exports.SettingsMenu = _SettingsMenu3.default;
exports.SettingsPage = _SettingsPage3.default;
exports.SettingsContent = _SettingsContent3.default;