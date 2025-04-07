// ForgotPasswordScreen.tsx
import React from 'react';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import ImageComponent from '../components/ImageComponent';
import {RootStackParamList} from '../navigation/Navigation';
import CommonBackground from '../components/CommonBackground';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme() as CustomThemeType;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <CommonBackground />
      <CommonText text="Forgot Password" variant="title" style={styles.title} />
      <CommonText
        text="Where would you like to receive a Verification Code?"
        style={[styles.subtitle, {color: theme.colors.subTitle}]}
      />

      {/* SMS Option */}
      <TouchableOpacity
        style={[styles.optionBox, {borderColor: theme.colors.primary}]}>
        <ImageComponent name="messageIcon" style={styles.iconStyle} />
        <View style={styles.textContainer}>
          <CommonText
            text="via SMS:"
            variant="body"
            style={[styles.subtitle, {color: theme.colors.lightColor}]}
          />
          <CommonText
            text="+91 123*******99"
            variant="body"
            style={{color: theme.colors.textColor}}
          />
        </View>
      </TouchableOpacity>

      {/* Email Option */}
      <TouchableOpacity
        style={[styles.optionBox, {borderColor: theme.colors.primary}]}>
        <ImageComponent name="mailIcon" style={styles.iconStyle} />
        <View style={styles.textContainer}>
          <CommonText
            text="via Email:"
            variant="body"
            style={[styles.subtitle, {color: theme.colors.lightColor}]}
          />
          <CommonText
            text="abc***@gmail.com"
            variant="body"
            style={{color: theme.colors.textColor}}
          />
        </View>
      </TouchableOpacity>

      {/* Next Button */}
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
