import './global.css';
import React from 'react';

import {setIOSKeyboardSetup} from './app/setup/setIOSKeyboardSetup';

import {StackNavigator} from './app/router/StackNavigator';

function App(): React.JSX.Element {
  setIOSKeyboardSetup();

  return <StackNavigator />;
}

export default App;
