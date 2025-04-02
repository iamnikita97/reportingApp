import React from 'react';
import {useTheme} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

interface Props {
  navigation: any;
}

const CustomSidebar: React.FC<Props> = ({navigation}) => {
  const theme = useTheme();

  return (
    <DrawerContentScrollView>
      <View style={[styles.header, {backgroundColor: theme.colors.primary}]}>
        <Text style={[styles.headerText, {color: theme.colors.onPrimary}]}>
          📋 Menu
        </Text>
      </View>

      <DrawerItem label="🏠 Home" onPress={() => navigation.navigate('Home')} />
      <DrawerItem
        label="👤 Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <DrawerItem
        label="⚙️ Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <DrawerItem
        label="ℹ️ About"
        onPress={() => navigation.navigate('About')}
      />

      <View style={styles.footer}>
        <Text style={[styles.footerText, {color: theme.colors.error}]}>
          🚪 Logout
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 18,
  },
});

export default CustomSidebar;
