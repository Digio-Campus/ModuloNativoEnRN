/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NativeModules } from 'react-native';

const { CalendarModule } = NativeModules;
const funcionBoton = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
};

export default funcionBoton;

AppRegistry.registerComponent(appName, () => App);
