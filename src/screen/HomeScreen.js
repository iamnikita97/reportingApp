import React from 'react';
import {View, StyleSheet} from 'react-native';
import CommonText from '../components/CommonText';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CommonText text="Welcome to Home" variant="title" style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
