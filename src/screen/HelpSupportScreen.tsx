import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import Header from '../components/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HelpSupportScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HelpSupportScreen: React.FC<HelpSupportScreenProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header title="Help & Support" onBackPress={() => navigation.goBack()} />

      <ScrollView style={styles.content}>
        <Text style={styles.heading}>Frequently Asked Questions</Text>

        <Text style={styles.question}>1. How do I reset my password?</Text>
        <Text style={styles.answer}>
          You can reset your password by going to Settings → Security → Change
          Password.
        </Text>

        <Text style={styles.question}>
          2. How do I contact customer support?
        </Text>
        <Text style={styles.answer}>
          You can reach us via email at support@example.com or call us at +123
          456 7890.
        </Text>

        <Text style={styles.question}>
          3. How do I update my profile information?
        </Text>
        <Text style={styles.answer}>
          Navigate to Profile → Edit Profile to update your details.
        </Text>

        <Text style={styles.heading}>Need Further Assistance?</Text>
        <Text style={styles.text}>
          If you have any other issues, feel free to reach out to us. Our
          support team is available 24/7 to help you with any queries.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.contactButtonText}>Contact Support</Text>
      </TouchableOpacity>

      {/* Modal Popup for Support */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Support</Text>
            <Text style={styles.modalText}>
              You can contact our support team via email or phone.
            </Text>
            <Text style={styles.modalDetail}>📧 support@example.com</Text>
            <Text style={styles.modalDetail}>📞 +123 456 7890</Text>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
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
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 15,
  },
  answer: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    marginBottom: 10,
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#600026',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#600026',
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  modalCloseButton: {
    backgroundColor: '#600026',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HelpSupportScreen;
