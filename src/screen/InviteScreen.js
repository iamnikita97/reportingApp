import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CommonText from '../components/CommonText';
import CommonButton from '../components/CommonButton';
import CommonTextInput from '../components/CommonTextInput';
import CommonBackground from '../components/CommonBackground';

const InviteScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <CommonBackground />

      <CommonText
        text="Invite User"
        variant="title"
        style={styles.inviteTitle}
      />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
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
    backgroundColor: '#F5F5F5',
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
