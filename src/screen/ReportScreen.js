import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportScreen;
