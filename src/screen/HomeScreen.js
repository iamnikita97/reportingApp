import React from 'react';
import {View} from 'react-native';
import CommonTable from '../components/CommonTable';

const UserListScreen = ({navigation}) => {
  const columns = [
    {header: 'Name', accessor: 'name', width: 150},
    {header: 'Email', accessor: 'email', width: 200},
    {header: 'Phone', accessor: 'phone', width: 140},
    {header: 'Role', accessor: 'role', width: 120},
    {header: 'Status', accessor: 'status', width: 120},
  ];

  const users = [
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

  const handleActionPress = user => {
    console.log('Edit user:', user);
  };

  return (
    <View style={{flex: 1}}>
      <CommonTable
        columns={columns}
        data={users}
        onActionPress={handleActionPress}
      />
    </View>
  );
};

export default UserListScreen;
