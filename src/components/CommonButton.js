import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

const CommonButton = ({title, onPress}) => {
  const {colors} = useTheme();

  return (
    <Button
      mode="contained"
      onPress={onPress}
      rippleColor="rgba(255, 255, 255, 0.3)"
      style={[styles.button, {backgroundColor: colors.button}]}
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
  },
  content: {
    paddingVertical: 8,
  },
});

export default CommonButton;
