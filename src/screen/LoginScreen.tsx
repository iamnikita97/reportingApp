import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootState} from '../redux/store'; // Import RootState type for Redux
import {loginUser} from '../redux/slices/authSlice';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

// Define navigation prop type
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state: RootState) => state.auth);

  // Pre-filled demo credentials
  const [email, setEmail] = useState<string>('demo@example.com');
  const [password, setPassword] = useState<string>('Demo@123');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleLogin = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) return;

    // Static login validation
    if (email === 'demo@example.com' && password === 'Demo@123') {
      navigation.replace('HomeTabs');
    } else {
      setPasswordError('Invalid email or password.');
    }
  };

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
      {emailError ? (
        <CommonText text={emailError} style={styles.errorText} />
      ) : null}

      <CommonTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        icon="lockIcon"
        secureTextEntry
      />
      {passwordError ? (
        <CommonText text={passwordError} style={styles.errorText} />
      ) : null}

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <CommonText text="Forgot Password?" style={styles.forgotPassword} />
        </TouchableOpacity>
      </View>

      <View style={styles.loginBtn}>
        <CommonButton
          title={loading ? 'LOADING...' : 'LOGIN'}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>

      {error && <CommonText text={error} style={styles.errorText} />}
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
  loginTitle: {marginBottom: 30, textAlign: 'center'},
  forgotPasswordContainer: {width: '90%', alignSelf: 'flex-end'},
  forgotPassword: {color: '#007BFF', textAlign: 'right'},
  loginBtn: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingLeft: 25,
  },
});

export default LoginScreen;
