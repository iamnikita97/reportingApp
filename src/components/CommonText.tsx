import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme, MD3Theme} from 'react-native-paper';

type CustomThemeType = MD3Theme & {
  colors: MD3Theme['colors'] & {
    textColor: string;
    subTitle: string;
    lightColor: string;
    iconColor: string;
    inputText: string;
    inputBorder: string;
  };
};

interface CommonTextProps {
  text: string;
  style?: TextStyle | TextStyle[];
  variant?: 'title' | 'subtitle' | 'body';
}

const CommonText: FC<CommonTextProps> = ({text, style, variant = 'body'}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <Text style={[styles[variant], {color: theme.colors.textColor}, style]}>
      {text}
    </Text>
  );
};

const styles = {
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
} as const;

export default CommonText;
