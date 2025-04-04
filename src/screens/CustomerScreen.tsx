import React, {useState, useEffect, useCallback} from 'react';
import Header from '../components/Header';
import CommonCard from '../components/CommonCard';
import {useNavigation} from '@react-navigation/native';
import CommonSearchBar from '../components/CommonSearchBar';
import CommonFilterModal from '../components/CommonFilterModal';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    role: 'Pharmacist',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    role: 'Manager',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '456-789-0123',
    role: 'Assistant',
  },
];

const CustomerScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  };

  const filterUsers = useCallback(() => {
    let filtered = USERS.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (selectedRole !== 'All') {
      filtered = filtered.filter(user => user.role === selectedRole);
    }

    setFilteredUsers(filtered);
  }, [searchText, selectedRole]);

  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  return (
    <View style={styles.container}>
      <Header title="Customers" onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <CommonSearchBar
          value={searchText}
          onChangeText={setSearchText}
          onFilterPress={() => setFilterVisible(true)}
        />
      </View>
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CommonCard
            title={item.name}
            email={item.email}
            phone={item.phone}
            extraContent={<Text>{`Role: ${item.role}`}</Text>}
          />
        )}
      />

      <CommonFilterModal
        visible={isFilterVisible}
        title="Filter Customers"
        options={[
          {
            label: 'Role',
            values: [
              {label: 'All', value: 'All'},
              {label: 'Pharmacist', value: 'Pharmacist'},
              {label: 'Manager', value: 'Manager'},
              {label: 'Assistant', value: 'Assistant'},
            ],
            selectedValue: selectedRole,
            onSelect: value => setSelectedRole(value),
          },
        ]}
        onClose={() => setFilterVisible(false)}
      />
    </View>
  );
};

const COLORS = {
  background: '#fff',
  searchBg: '#ddd',
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  mainContainer: {
    padding: 10,
  },
});

export default CustomerScreen;
