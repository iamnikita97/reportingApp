import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CommonCard from '../components/CommonCard';
import ImageComponent from '../components/ImageComponent';
import CommonTextInput from '../components/CommonTextInput';
import CommonFilterModal from '../components/CommonFilterModal';

// Move users array outside the component to avoid re-creation
const USERS = [
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
];

const UserDetailsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    status: string;
  };

  // ✅ Include `users` in useCallback since it's now stable
  const filterUsers = useCallback(() => {
    let filtered = USERS.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (selectedRole !== 'All') {
      filtered = filtered.filter(user => user.role === selectedRole);
    }
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(user => user.status === selectedStatus);
    }
    setFilteredUsers(filtered);
  }, [searchText, selectedRole, selectedStatus]);

  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <CommonTextInput
          label="Search Users..."
          value={searchText}
          onChangeText={setSearchText}
          icon="searchIcon"
          style={styles.searchInput}
        />
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={() => setFilterVisible(true)}>
          <ImageComponent name="filterIcon" style={styles.filterIconStyle} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
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
                <Text>{`Role: ${item.role}`}</Text>
                <Text>{`Status: ${item.status}`}</Text>
              </>
            }
          />
        )}
      />
      <CommonFilterModal
        visible={isFilterVisible}
        title="Filter Users"
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
          {
            label: 'Status',
            values: [
              {label: 'All', value: 'All'},
              {label: 'Active', value: 'Active'},
              {label: 'Inactive', value: 'Inactive'},
            ],
            selectedValue: selectedStatus,
            onSelect: value => setSelectedStatus(value),
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
  container: {flex: 1, padding: 10, backgroundColor: COLORS.background},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {width: 290},
  filterIconContainer: {
    padding: 9,
    backgroundColor: COLORS.searchBg,
    borderRadius: 8,
    marginLeft: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIconStyle: {width: 18, height: 18},
});

export default UserDetailsScreen;
