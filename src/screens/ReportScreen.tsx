import React from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {View, Text, StyleSheet} from 'react-native';

const ReportScreen: React.FC = () => {
  const theme = useTheme() as CustomThemeType;
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.lightColor}]}>
      <Text style={styles.text}>Report Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportScreen;
