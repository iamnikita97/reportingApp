import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import store from './src/redux/store';
import AppNavigator from './src/screen/navigation/AppNavigator';
import {LightTheme, CustomDarkTheme} from './src/screen/theme/theme';

const App: FC = () => {
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
