import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <CommonBackground />
      <CommonText
        text="Create New Password"
        variant="title"
        style={styles.createPasswordTitle}
      />
      <CommonTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        icon="lockIcon"
        secureTextEntry
      />
      <CommonTextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        icon="lockIcon"
        secureTextEntry
      />
      <View style={styles.submitBtn}>
        <CommonButton
          title="SUBMIT"
          onPress={() => console.log('Verify Pressed')}
        />
      </View>
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
  createPasswordTitle: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 25,
  },
  submitBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
});

export default CreatePasswordScreen;
