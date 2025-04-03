import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {CustomThemeType} from '../theme/theme';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

const InviteScreen: React.FC = () => {
  const theme = useTheme() as CustomThemeType;
  const [email, setEmail] = useState<string>('');

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <CommonBackground />

      <CommonText
        text="Invite User"
        variant="title"
        style={styles.inviteTitle}
      />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        icon="emailIcon"
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
  },
  inviteTitle: {
    marginBottom: 30,
    textAlign: 'center',
  },
  submitBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
});

export default InviteScreen;
