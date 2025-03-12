import React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import AppNavigator from './src/screen/navigation/Navigation';
import {LightTheme, CustomDarkTheme} from './src/theme/theme';
import store from './src/redux/store';

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? CustomDarkTheme : LightTheme;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
