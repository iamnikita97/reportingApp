import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonBackground from '../components/CommonBackground';

const {width, height} = Dimensions.get('screen');

const VerificationScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <CommonBackground />
      <CommonText text="Verify" variant="title" style={styles.title} />
      <CommonText
        text="Please enter the code we sent you to email"
        style={[styles.subtitle, {color: colors.subTitle}]}
      />
      <View style={styles.otpContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, {color: colors.subTitle}]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
      <CommonText
        text="Didn't Receive the Code ?"
        style={[styles.resendText, {color: colors.subTitle}]}
      />
      <TouchableOpacity>
        <CommonText text="Resend Code" style={styles.resendCode} />
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
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  topVector: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  bottomVector: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 160,
    height: 160,
    resizeMode: 'contain',
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
    color: '#666',
  },
  resendCode: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  topImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  topImage: {
    width: width * 0.6,
    height: height * 0.18,
    resizeMode: 'contain',
  },
  iconImage: {
    width: height * 0.12,
    height: height * 0.12,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 30,
    elevation: 5,
  },
  bottomImage: {
    position: 'absolute',
    bottom: -height * 0.05,
    left: 0,
    width: width * 0.8,
    height: height * 0.25,
    resizeMode: 'cover',
  },
  verifyBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
});

export default VerificationScreen;
