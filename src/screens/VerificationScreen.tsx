import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import CommonText from '../components/CommonText';
import {RouteProp} from '@react-navigation/native';
import CommonButton from '../components/CommonButton';
import CommonBackground from '../components/CommonBackground';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

type RootStackParamList = {
  VerificationScreen: undefined;
  CreatePasswordScreen: undefined;
};

type VerificationScreenProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'VerificationScreen'
  >;
  route: RouteProp<RootStackParamList, 'VerificationScreen'>;
};

const VerificationScreen: React.FC<VerificationScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme() as CustomThemeType;
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.lightColor}]}>
      <CommonBackground />
      <CommonText text="Verify" variant="title" style={styles.title} />
      <CommonText
        text="Please enter the code we sent you to email"
        style={[styles.subtitle, {color: theme.colors.subTitle}]}
      />
      <View style={styles.otpContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, {color: theme.colors.subTitle}]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
      <CommonText
        text="Didn't Receive the Code?"
        style={[styles.resendText, {color: theme.colors.subTitle}]}
      />
      <TouchableOpacity>
        <CommonText
          text="Resend Code"
          style={[styles.resendCode, {backgroundColor: theme.colors.subTitle}]}
        />
      </TouchableOpacity>
      <View style={styles.verifyBtn}>
        <CommonButton
          title="VERIFY"
          onPress={() => navigation.navigate('CreatePasswordScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  resendText: {
    fontSize: 15,
  },
  resendCode: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  verifyBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
});

export default VerificationScreen;
