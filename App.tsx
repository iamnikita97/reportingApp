import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/Navigation';
import {LightTheme} from './src/theme/theme';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={LightTheme}>
        <AppNavigator />
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
