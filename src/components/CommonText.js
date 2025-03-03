import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const CommonText = ({text, style, variant = 'body'}) => {
  const {colors} = useTheme();

  return (
    <Text style={[styles[variant], {color: colors.textColor}, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
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
});

export default CommonText;
