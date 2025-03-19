import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ImageComponent from './ImageComponent';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  rightIcon?: string;
  onRightPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  showBackButton = true,
  rightIcon,
  onRightPress,
}) => {
  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <ImageComponent name="arrowIcon" style={styles.icon} />
        </TouchableOpacity>
      )}

      <Text style={styles.headerText}>{title}</Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.rightButton}>
          <ImageComponent name={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#600026',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  backButton: {
    padding: 10,
  },
  rightButton: {
    padding: 10,
  },
  iconPlaceholder: {
    width: 40,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
});

export default Header;
