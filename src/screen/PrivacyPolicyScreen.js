import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';

const PrivacyPolicyScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Header
            title="Privacy Policy"
            onBackPress={() => navigation.goBack()}
          />

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Introduction</Text>
            <Text style={styles.text}>
              Welcome to our Privacy Policy page. Your privacy is critically
              important to us.
            </Text>

            <Text style={styles.heading}>Information We Collect</Text>
            <Text style={styles.text}>
              We collect information that you provide directly to us, such as
              when you create an account, update your profile, or contact
              support.
            </Text>

            <Text style={styles.heading}>How We Use Your Information</Text>
            <Text style={styles.text}>
              We use your information to provide, maintain, and improve our
              services, as well as to communicate with you regarding important
              updates.
            </Text>

            <Text style={styles.heading}>Sharing Your Information</Text>
            <Text style={styles.text}>
              We do not sell or rent your personal information to third parties.
              We may share your information with trusted partners to provide
              services on our behalf.
            </Text>

            <Text style={styles.heading}>Security of Your Data</Text>
            <Text style={styles.text}>
              We take security measures to protect your data from unauthorized
              access, alteration, disclosure, or destruction.
            </Text>

            <Text style={styles.heading}>Your Rights</Text>
            <Text style={styles.text}>
              You have the right to access, update, or delete your personal data
              at any time.
            </Text>

            <Text style={styles.heading}>Changes to This Policy</Text>
            <Text style={styles.text}>
              We may update this Privacy Policy from time to time. Please review
              it periodically for any changes.
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.navigate('Home');
              }
            }}>
            <Text style={styles.acceptButtonText}>Accept & Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
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
    lineHeight: 20,
    marginBottom: 15,
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

export default PrivacyPolicyScreen;
