import React from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  TermsAndPolicies: undefined;
};

const TermsAndPoliciesScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme() as CustomThemeType;
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header
        title="Terms & Policies"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Text style={[styles.heading, {color: theme.colors.subTitle}]}>
          Terms & Conditions
        </Text>
        <Text style={styles.text}>
          By using this app, you agree to our terms and conditions. These terms
          govern your use of our application and services. Please read them
          carefully.
        </Text>

        <Text style={[styles.heading, {color: theme.colors.subTitle}]}>
          Privacy Policy
        </Text>
        <Text style={styles.text}>
          Your privacy is important to us. We collect user data only to improve
          your experience. We do not sell or share your data with third parties.
        </Text>

        <Text style={[styles.heading, {color: theme.colors.subTitle}]}>
          Usage Guidelines
        </Text>
        <Text style={styles.text}>
          You agree not to misuse our services, attempt to hack, or violate any
          laws while using this app.
        </Text>

        <Text style={[styles.heading, {color: theme.colors.subTitle}]}>
          Contact Us
        </Text>
        <Text style={[styles.text, {color: theme.colors.subTitle}]}>
          If you have any questions, contact us at support@example.com.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={[styles.acceptButton, {backgroundColor: theme.colors.secondary}]}
        onPress={() => Alert.alert('You accepted the terms!')}>
        <Text
          style={[styles.acceptButtonText, {color: theme.colors.inputText}]}>
          Accept & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
  },
  acceptButton: {
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  acceptButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsAndPoliciesScreen;
