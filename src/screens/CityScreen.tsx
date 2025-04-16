import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Header from '../components/Header';
import {CustomThemeType} from '../theme/theme';

const CityScreen = () => {
  const theme = useTheme() as CustomThemeType;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="City" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CityScreen;
