import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import CommonButton from './CommonButton';
import {CustomThemeType} from '../theme/theme';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
  onCreatePress: () => void;
}

const CommonSearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onFilterPress,
  onCreatePress,
}) => {
  const theme = useTheme() as CustomThemeType;
  const [isSearching, setIsSearching] = useState(false);

  const handleBlur = () => {
    if (!value) {
      setIsSearching(false);
    }
  };

  return (
    <View style={styles.container}>
      {!isSearching ? (
        <TouchableOpacity
          onPress={() => setIsSearching(true)}
          style={[
            styles.searchButton,
            {backgroundColor: theme.colors.iconColor},
          ]}>
          <ImageComponent name="searchIcon" style={styles.searchIcon} />
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.searchInputContainer,
            {backgroundColor: theme.colors.iconColor},
          ]}>
          <ImageComponent name="searchIcon" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Users..."
            value={value}
            onChangeText={onChangeText}
            autoFocus
            onBlur={handleBlur}
          />
          <TouchableOpacity
            onPress={() => {
              onChangeText('');
              setIsSearching(false);
            }}>
            <ImageComponent name="closeIcon" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={[styles.filterButton, {backgroundColor: theme.colors.iconColor}]}
        onPress={onFilterPress}>
        <ImageComponent name="filterIcon" style={styles.filterIcon} />
      </TouchableOpacity>

      <CommonButton
        title="Create"
        onPress={onCreatePress}
        icon="createIcon"
        style={styles.createButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchButton: {
    padding: 9,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    width: 100,
    marginLeft: 10,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  closeIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  filterButton: {
    marginLeft: 10,
    padding: 9,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 18,
    height: 18,
  },
});

export default CommonSearchBar;
