import React, {FC} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';

interface CommonButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CommonButton: FC<CommonButtonProps> = ({title, onPress, disabled}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <Button
      mode="contained"
      onPress={onPress}
      disabled={disabled}
      rippleColor="rgba(255, 255, 255, 0.3)"
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? theme.colors.disabledColor
            : theme.colors.primary,
        },
      ]}
      contentStyle={styles.content}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    borderRadius: 25,
    marginTop: 10,
  } as ViewStyle,
  content: {
    paddingVertical: 8,
  },
});

export default CommonButton;
