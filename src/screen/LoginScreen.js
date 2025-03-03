import React, {useState} from 'react';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <CommonBackground />

      <CommonText text="Login" variant="title" style={styles.loginTitle} />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        icon="emailIcon"
      />
      <CommonTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        icon="lockIcon"
        secureTextEntry
      />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <CommonText text="Forgot Password?" style={styles.forgotPassword} />
        </TouchableOpacity>
      </View>
      <View style={styles.loginBtn}>
        <CommonButton
          title="LOGIN"
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
  forgotPasswordContainer: {
    width: '90%',
    alignSelf: 'flex-end',
  },
  forgotPassword: {
    color: '#007BFF',
    textAlign: 'right',
  },

  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
});

export default LoginScreen;
