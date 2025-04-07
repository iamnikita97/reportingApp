import React from 'react';
import ImageComponent from './ImageComponent';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import {RootStackParamList} from '../navigation/Navigation';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  onRightIconPress?: () => void;
  showRightIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  showBackButton = true,
  onRightIconPress,
  showRightIcon = false,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();

  return (
    <View style={[styles.header, {backgroundColor: theme.colors.primary}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MenuPage')}
        style={styles.menuButton}>
        <ImageComponent
          name="menuIcon"
          style={[styles.icon, {tintColor: theme.colors.onPrimary}]}
        />
      </TouchableOpacity>

      <Text style={[styles.headerText, {color: theme.colors.onPrimary}]}>
        {title}
      </Text>

      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <ImageComponent
            name="arrowIcon"
            style={[styles.icon, {tintColor: theme.colors.onPrimary}]}
          />
        </TouchableOpacity>
      )}

      {showRightIcon && onRightIconPress && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
          <ImageComponent
            name="moreIcon"
            style={[styles.icon, {tintColor: theme.colors.onPrimary}]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  menuButton: {
    padding: 10,
  },
  backButton: {
    padding: 10,
  },
  rightIcon: {
    padding: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default Header;
