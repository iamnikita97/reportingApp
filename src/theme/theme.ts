import {MD3LightTheme, MD3DarkTheme, MD3Theme} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      textColor: string;
      subTitle: string;
      lightColor: string;
      iconColor: string;
      inputText: string;
      inputBorder: string;
      disabledColor: string;
      lightBlue: string;
      redColor: string;
      lightPink: string;
      roseColor: string;
      whiteSmoke: string;
      overlayColor: string;
    }
    interface Theme {
      colors: ThemeColors;
    }
  }
}

export type CustomThemeType = MD3Theme & {
  colors: MD3Theme['colors'] & {
    textColor: string;
    subTitle: string;
    lightColor: string;
    iconColor: string;
    inputText: string;
    inputBorder: string;
    disabledColor: string;
    lightBlue: string;
    redColor: string;
    lightPink: string;
    roseColor: string;
    whiteSmoke: string;
    overlayColor: string;
  };
};

export const LightTheme: CustomThemeType = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#681930',
    secondary: '#600026',
    background: '#FAFAFA',
    textColor: '#000000',
    inputText: '#FFFFFF',
    inputBorder: '#CCC6C6',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
    disabledColor: '#CCCCCC',
    lightBlue: '#007BFF',
    redColor: '#FF0000',
    lightPink: '#FAD2E1',
    roseColor: '#D88ABF',
    whiteSmoke: '#f5f5f5',
    overlayColor: '#00000080',
  },
};

export const DarkTheme: CustomThemeType = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#681930',
    secondary: '#600026',
    background: '#121212',
    textColor: '#000000',
    inputText: '#FFFFFF',
    inputBorder: '#777777',
    subTitle: '#544C4C',
    lightColor: '#868686',
    iconColor: '#D9D9D9',
    disabledColor: '#444444',
    lightBlue: '#007BFF',
    redColor: '#FF0000',
    lightPink: '#FAD2E1',
    roseColor: '#D88ABF',
    whiteSmoke: '#f5f5f5',
    overlayColor: '#00000080',
  },
};
