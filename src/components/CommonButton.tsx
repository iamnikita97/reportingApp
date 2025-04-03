import React, {FC, ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';

interface CommonButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  icon?: string;
  style?: ViewStyle;
}

const CommonButton: FC<CommonButtonProps> = ({
  title,
  onPress,
  disabled,
  icon,
  style,
}) => {
  const theme = useTheme() as CustomThemeType;

  const iconComponent: ReactNode = icon ? (
    <ImageComponent
      name="createIcon"
      style={[styles.icon, {tintColor: theme.colors.iconColor}]}
    />
  ) : undefined;

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
        style,
      ]}
      contentStyle={styles.content}
      icon={() => iconComponent}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 20,
  } as ViewStyle,
  content: {
    paddingVertical: 6,
  },
  icon: {
    width: 16,
    height: 18,
    marginRight: 5,
  },
});

export default CommonButton;
