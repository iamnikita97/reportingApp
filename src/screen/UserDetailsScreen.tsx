import React, {useState} from 'react';
import CommonCard from '../components/CommonCard';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CommonTextInput from '../components/CommonTextInput';
import EditDetailsModal from '../components/EditDetailsModal';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
};

const UserDetailsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
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

  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleSave = (updatedUser: User) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user,
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <CommonTextInput
          label="Search Users..."
          value={searchText}
          onChangeText={handleSearch}
          icon="searchIcon"
        />
      </View>

      {/* User List */}
      <FlatList
        data={filteredUsers}
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

      {/* Edit Modal */}
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
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default UserDetailsScreen;
