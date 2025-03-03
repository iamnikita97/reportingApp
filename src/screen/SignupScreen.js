import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <CommonBackground />
      <CommonText
        text="Registration"
        variant="title"
        style={styles.loginTitle}
      />
      <CommonTextInput
        label="UserName"
        value={mobile}
        onChangeText={setMobile}
        icon="userIcon"
      />
      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        icon="emailIcon"
      />
      <CommonTextInput
        label="Mobile Number"
        value={userName}
        onChangeText={setUserName}
        icon="phoneIcon"
      />
      <CommonTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        icon="lockIcon"
        secureTextEntry
      />
      <View style={styles.signUpBtn}>
        <CommonButton
          title="SIGN UP"
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
  loginTitle: {
    marginBottom: 30,
    textAlign: 'center',
  },
  signUpBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
});

export default SignupScreen;
