import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

const CreatePasswordScreen: React.FC = () => {
  const theme = useTheme();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
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
