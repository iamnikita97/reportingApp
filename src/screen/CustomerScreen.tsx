import React, {useState} from 'react';
import CommonCard from '../components/CommonCard';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import EditDetailsModal from '../components/EditDetailsModal';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
}

const CustomerScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      role: 'Pharmacist',
      status: 'Active',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      role: 'Manager',
      status: 'Inactive',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '456-789-0123',
      role: 'Assistant',
      status: 'Active',
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleSave = (updatedUser: User) => {
    setUsers(prevUsers =>
      prevUsers.map(user => (user.id === updatedUser.id ? updatedUser : user)),
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CommonCard
            title={item.name}
            content={
              <>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
              </>
            }
            extraContent={
              <>
                <Text>Role: {item.role}</Text>
                <Text>Status: {item.status}</Text>
              </>
            }
            onEdit={() => handleEdit(item)}
          />
        )}
      />

      <EditDetailsModal
        visible={isModalVisible}
        userDetails={selectedUser}
        onSave={handleSave}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
});

export default CustomerScreen;
