import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HelpSupportScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HelpSupportScreen: React.FC<HelpSupportScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Header title="Help & Support" onBackPress={() => navigation.goBack()} />

      <ScrollView style={styles.content}>
        <Text style={[styles.heading, {color: theme.colors.textColor}]}>
          Frequently Asked Questions
        </Text>

        <Text style={[styles.question, {color: theme.colors.textColor}]}>
          1. How do I reset my password?
        </Text>
        <Text style={[styles.answer, {color: theme.colors.subTitle}]}>
          You can reset your password by going to Settings → Security → Change
          Password.
        </Text>

        <Text style={[styles.question, {color: theme.colors.textColor}]}>
          2. How do I contact customer support?
        </Text>
        <Text style={[styles.answer, {color: theme.colors.subTitle}]}>
          You can reach us via email at support@example.com or call us at +123
          456 7890.
        </Text>

        <Text style={[styles.question, {color: theme.colors.textColor}]}>
          3. How do I update my profile information?
        </Text>
        <Text style={[styles.answer, {color: theme.colors.subTitle}]}>
          Navigate to Profile → Edit Profile to update your details.
        </Text>

        <Text style={[styles.heading, {color: theme.colors.textColor}]}>
          Need Further Assistance?
        </Text>
        <Text style={[styles.text, {color: theme.colors.subTitle}]}>
          If you have any other issues, feel free to reach out to us. Our
          support team is available 24/7 to help you with any queries.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={[styles.contactButton, {backgroundColor: theme.colors.primary}]}
        onPress={() => setModalVisible(true)}>
        <Text
          style={[styles.contactButtonText, {color: theme.colors.inputText}]}>
          Contact Support
        </Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View
          style={[
            styles.modalContainer,
            {backgroundColor: theme.colors.textColor},
          ]}>
          <View
            style={[
              styles.modalContent,
              {backgroundColor: theme.colors.textColor},
            ]}>
            <Text style={[styles.modalTitle, {color: theme.colors.primary}]}>
              Contact Support
            </Text>
            <Text style={[styles.modalText, {color: theme.colors.textColor}]}>
              You can contact our support team via email or phone.
            </Text>
            <Text style={[styles.modalDetail, {color: theme.colors.textColor}]}>
              📧 support@example.com
            </Text>
            <Text style={[styles.modalDetail, {color: theme.colors.textColor}]}>
              📞 +123 456 7890
            </Text>

            <TouchableOpacity
              style={[
                styles.modalCloseButton,
                {backgroundColor: theme.colors.primary},
              ]}
              onPress={() => setModalVisible(false)}>
              <Text
                style={[
                  styles.modalCloseButtonText,
                  {color: theme.colors.inputText},
                ]}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
  },
  answer: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  contactButton: {
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalCloseButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HelpSupportScreen;
