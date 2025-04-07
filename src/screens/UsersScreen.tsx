import React, {useState, useEffect, useCallback} from 'react';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import CommonCard from '../components/CommonCard';
import CommonForm from '../components/CommonForm';
import CommonDialog from '../components/CommonDialog';
import {useNavigation} from '@react-navigation/native';
import CommonSearchBar from '../components/CommonSearchBar';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import CommonFilterModal from '../components/CommonFilterModal';

const USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    role: 'Pharmacist',
    gender: 'Male',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    role: 'Manager',
    gender: 'Female',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '456-789-0123',
    role: 'Assistant',
    gender: 'Female',
  },
];

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  gender: string;
};

const UsersScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme() as CustomThemeType;
  const [searchText, setSearchText] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isReadOnly, setIsReadOnly] = useState(false);

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

  const fields = [
    {name: 'name', label: 'Name', placeholder: 'Enter name'},
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter email',
      keyboardType: 'email-address' as const,
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Enter phone',
      keyboardType: 'phone-pad' as const,
    },
    {name: 'role', label: 'Role', placeholder: 'Enter role'},
    {name: 'gender', label: 'Gender', placeholder: 'Enter gender'},
  ];

  const handleSubmit = (data: Record<string, string>) => {
    console.log(isReadOnly ? 'Viewing user:' : 'Updating user:', data);
    setDialogVisible(false);
    setSelectedUser(null);
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="Users" onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <CommonSearchBar
          title="Add User"
          value={searchText}
          onChangeText={setSearchText}
          onFilterPress={() => setFilterVisible(true)}
          onCreatePress={() => {
            setSelectedUser(null);
            setIsReadOnly(false);
            setDialogVisible(true);
          }}
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
            extraContent={
              <View>
                <Text>{`Role: ${item.role}`}</Text>
                <Text>{`Gender: ${item.gender}`}</Text>
              </View>
            }
            onView={() => {
              setSelectedUser(item);
              setIsReadOnly(true);
              setDialogVisible(true);
            }}
            onEdit={() => {
              setSelectedUser(item);
              setIsReadOnly(false);
              setDialogVisible(true);
            }}
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
        ]}
        onClose={() => setFilterVisible(false)}
      />

      <CommonDialog
        visible={dialogVisible}
        title={
          isReadOnly ? 'View User' : selectedUser ? 'Edit User' : 'Add New User'
        }
        content={
          <CommonForm
            fields={fields}
            initialValues={selectedUser || {}}
            readOnly={isReadOnly}
            onSubmit={handleSubmit}
            onCancel={() => setDialogVisible(false)}
          />
        }
        onDismiss={() => {
          setDialogVisible(false);
          setSelectedUser(null);
        }}
        onSubmit={() => console.log('Submit button clicked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    padding: 20,
  },
});

export default UsersScreen;
