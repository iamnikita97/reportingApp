import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#681930',
    background: '#FAFAFA',
    text: '#CCC6C6',
    button: '#681930',
    inputBackground: '#FFFFFF',
    inputBorder: '#CCC6C6',
    textColor: '#000000',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
  },
};

export const CustomDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#FFA500',
    background: '#121212',
    text: '#CCC6C6',
    button: '#FFA500',
    inputBackground: '#333333',
    inputBorder: '#777777',
    textColor: '#000000',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
  },
};
