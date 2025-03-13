import React from 'react';
import {useTheme} from 'react-native-paper';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import ImageComponent from '../components/ImageComponent';
import CommonBackground from '../components/CommonBackground';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <CommonBackground />
      <CommonText text="Forgot Password" variant="title" style={styles.title} />
      <CommonText
        text="Where would you like to receive a Verification Code?"
        style={[styles.subtitle, {color: colors.subTitle}]}
      />
      <TouchableOpacity
        style={[styles.optionBox, {borderColor: colors.primary}]}>
        <ImageComponent name="messageIcon" style={styles.iconStyle} />
        <View style={styles.textContainer}>
          <CommonText
            text="via SMS:"
            variant="label"
            style={[styles.label, {color: colors.lightColor}]}
          />
          <CommonText text="+91 123*******99" variant="body" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionBox, {borderColor: colors.primary}]}>
        <ImageComponent name="mailIcon" style={styles.iconStyle} />
        <View style={styles.textContainer}>
          <CommonText
            text="via Email:"
            variant="label"
            style={[styles.label, {color: colors.lightColor}]}
          />
          <CommonText text="abc***@gmail.com" variant="body" />
        </View>
      </TouchableOpacity>
      <View style={styles.nextBtn}>
        <CommonButton
          title="NEXT"
          onPress={() => navigation.navigate('VerificationScreen')}
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
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionBox: {
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  nextBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
});

export default ForgotPasswordScreen;
