import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

const TermsAndPoliciesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Terms & Policies"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.content}>
        <Text style={styles.heading}>Terms & Conditions</Text>
        <Text style={styles.text}>
          By using this app, you agree to our terms and conditions. These terms
          govern your use of our application and services. Please read them
          carefully.
        </Text>

        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.text}>
          Your privacy is important to us. We collect user data only to improve
          your experience. We do not sell or share your data with third parties.
        </Text>

        <Text style={styles.heading}>Usage Guidelines</Text>
        <Text style={styles.text}>
          You agree not to misuse our services, attempt to hack, or violate any
          laws while using this app.
        </Text>

        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions, contact us at support@example.com.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => alert('You accepted the terms!')}>
        <Text style={styles.acceptButtonText}>Accept & Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  acceptButton: {
    backgroundColor: '#600026',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsAndPoliciesScreen;
