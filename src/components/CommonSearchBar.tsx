import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
  onCreatePress: () => void;
  title: string;
}

const CommonSearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onFilterPress,
  onCreatePress,
}) => {
  const theme = useTheme() as CustomThemeType;
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {isSearching && (
          <View
            style={[
              styles.searchInputContainer,
              {backgroundColor: theme.colors.iconColor},
            ]}>
            <ImageComponent name="searchIcon" style={styles.searchIcon} />
            <TextInput
              ref={inputRef}
              style={styles.searchInput}
              placeholder="Search Users..."
              placeholderTextColor={theme.colors.subTitle}
              value={value}
              onChangeText={onChangeText}
              onBlur={() => {
                if (!value) setIsSearching(false);
              }}
              autoFocus
            />
            {value !== '' && (
              <TouchableOpacity onPress={() => onChangeText('')}>
                <ImageComponent name="closeIcon" style={styles.closeIcon} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      <View style={styles.iconGroup}>
        {!isSearching && (
          <TouchableOpacity
            onPress={() => {
              setIsSearching(true);
              setTimeout(() => inputRef.current?.focus(), 100);
            }}
            style={[
              styles.iconButton,
              {backgroundColor: theme.colors.iconColor},
            ]}>
            <ImageComponent name="searchIcon" style={styles.searchIcon} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.iconButton, {backgroundColor: theme.colors.iconColor}]}
          onPress={onFilterPress}>
          <ImageComponent name="filterIcon" style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onCreatePress}
          style={[
            styles.roundCreateButton,
            {backgroundColor: theme.colors.primary},
          ]}>
          <ImageComponent
            name="PlusIcon"
            style={[styles.plusIcon, {tintColor: theme.colors.inputText}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    marginLeft: 6,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  closeIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconButton: {
    padding: 9,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 18,
    height: 18,
  },
  roundCreateButton: {
    width: 42,
    height: 42,
    marginLeft: 10,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
});

export default CommonSearchBar;
