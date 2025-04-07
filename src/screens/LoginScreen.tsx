import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import {RootStackParamList} from '../navigation/Navigation';
import CommonBackground from '../components/CommonBackground';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [email, setEmail] = useState<string>('demo@example.com');
  const [password, setPassword] = useState<string>('Demo@123');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'demo@example.com' && password === 'Demo@123') {
        navigation.replace('Home');
      } else {
        setPasswordError('Invalid email or password.');
      }
    }, 1500);
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <CommonBackground />
      <CommonText text="Login" variant="title" style={styles.loginTitle} />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        icon="emailIcon"
      />

      {emailError ? (
        <CommonText
          text={emailError}
          style={[styles.errorText, {color: theme.colors.redColor}]}
        />
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <CommonText
            text="Forgot Password?"
            style={[styles.forgotPassword, {color: theme.colors.lightBlue}]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.loginBtn}>
        <CommonButton
          title={loading ? 'LOADING...' : 'LOGIN'}
          onPress={handleLogin}
          disabled={loading}
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
    textAlign: 'right',
  },
  loginBtn: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  errorText: {
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingLeft: 25,
  },
});

export default LoginScreen;
