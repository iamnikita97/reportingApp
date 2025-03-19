import {MD3LightTheme, MD3DarkTheme, MD3Theme} from 'react-native-paper';

export const LightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#681930',
    secondary: '#600026',
    background: '#FAFAFA',
    // button: '#681930',
    inputBackground: '#FFFFFF',
    inputBorder: '#CCC6C6',
    textColor: '#000000',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
  },
};

export const CustomDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#681930',
    secondary: '#600026',
    background: '#121212',
    // button: '#681930',
    inputBackground: '#FFFFFF',
    inputBorder: '#777777',
    textColor: '#000000',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
  },
};
