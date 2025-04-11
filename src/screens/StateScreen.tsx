import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../components/Header';

type StateScreenProps = {
  navigation: StackNavigationProp<any>;
};

type CountryItem = {
  id: string;
  name: string;
};

const countries: CountryItem[] = [
  {id: '1', name: 'USA'},
  {id: '2', name: 'India'},
  {id: '3', name: 'Canada'},
];

const StateScreen: React.FC<StateScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryList, setShowCountryList] = useState(false);

  const handleSelectCountry = (item: CountryItem) => {
    setSelectedCountry(item);
    setShowCountryList(false);
  };

  const renderCountry = ({item}: {item: CountryItem}) => (
    <Pressable
      onPress={() => handleSelectCountry(item)}
      style={styles.countryItem}>
      <Text style={[styles.countryText, {color: theme.colors.textColor}]}>
        {item.name}
      </Text>
    </Pressable>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="State" onBackPress={() => navigation.goBack()} />
      <View style={styles.dropdownContainer}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Select Country
        </Text>
        <TouchableOpacity
          onPress={() => setShowCountryList(true)}
          style={[
            styles.dropdownButton,
            {
              backgroundColor: theme.colors.inputText,
              borderColor: theme.colors.disabledColor,
            },
          ]}>
          <Text style={[styles.dropdownText, {color: theme.colors.textColor}]}>
            {selectedCountry.name}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={showCountryList}
        onRequestClose={() => setShowCountryList(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowCountryList(false)}>
          <View
            style={[
              styles.modalContainer,
              {
                backgroundColor: theme.colors.inputText,
                borderColor: theme.colors.disabledColor,
              },
            ]}>
            <FlatList
              data={countries}
              keyExtractor={item => item.id}
              renderItem={renderCountry}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    backgroundColor: theme.colors.disabledColor,
                  }}
                />
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  dropdownContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  dropdownButton: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1.2,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    borderRadius: 10,
    paddingVertical: 10,
    borderWidth: 1,
    maxHeight: 250,
  },
  countryItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  countryText: {
    fontSize: 16,
  },
});

export default StateScreen;
