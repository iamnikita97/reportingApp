import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import AppNavigator from './src/screen/navigation/Navigation';
import {LightTheme, CustomDarkTheme} from './src/theme/theme';

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? CustomDarkTheme : LightTheme;

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
