import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import Header from '../components/Header';
import {StackNavigationProp} from '@react-navigation/stack';

type CityScreenProps = {
  navigation: StackNavigationProp<any>;
};

type Country = {id: string; name: string};
type State = {id: string; name: string};
type City = {id: string; name: string; countryId: string; stateId: string};

const countries: Country[] = [
  {id: '1', name: 'India'},
  {id: '2', name: 'USA'},
];

const states: State[] = [
  {id: '1', name: 'Maharashtra'},
  {id: '2', name: 'Gujarat'},
  {id: '3', name: 'California'},
];

const allCities: City[] = [
  {id: '1', name: 'Vadodara', countryId: '1', stateId: '1'},
  {id: '2', name: 'Ahmedabad', countryId: '1', stateId: '1'},
  {id: '3', name: 'Ahmedabad', countryId: '1', stateId: '2'},
  {id: '4', name: 'Los Angeles', countryId: '2', stateId: '3'},
  {id: '5', name: 'San Francisco', countryId: '2', stateId: '3'},
];

const CityScreen: React.FC<CityScreenProps> = ({navigation}) => {
  const theme = useTheme() as CustomThemeType;

  const [cities, setCities] = useState<City[]>([]);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showStateModal, setShowStateModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [selectedState, setSelectedState] = useState<State>(states[0]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    const filtered = allCities.filter(
      city =>
        city.countryId === selectedCountry.id &&
        city.stateId === selectedState.id,
    );
    setCities(filtered);
    setSelectedCity(null); // Reset selected city when country/state changes
  }, [selectedCountry, selectedState]);

  const renderModalItem = (
    item: Country | State,
    onSelect: (item: any) => void,
  ) => (
    <Pressable
      onPress={() => {
        onSelect(item);
        setShowCountryModal(false);
        setShowStateModal(false);
      }}
      style={styles.modalItem}>
      <Text style={{color: theme.colors.textColor}}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Header title="City" onBackPress={() => navigation.goBack()} />
      <View style={styles.dropdownContainer}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Select Country
        </Text>
        <TouchableOpacity
          onPress={() => setShowCountryModal(true)}
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
      <View style={styles.dropdownContainer}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Select State
        </Text>
        <TouchableOpacity
          onPress={() => setShowStateModal(true)}
          style={[
            styles.dropdownButton,
            {
              backgroundColor: theme.colors.inputText,
              borderColor: theme.colors.disabledColor,
            },
          ]}>
          <Text style={[styles.dropdownText, {color: theme.colors.textColor}]}>
            {selectedState.name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={[styles.label, {color: theme.colors.textColor}]}>
          Select City
        </Text>
        <TouchableOpacity
          onPress={() => setShowCityModal(true)}
          style={[
            styles.dropdownButton,
            {
              backgroundColor: theme.colors.inputText,
              borderColor: theme.colors.disabledColor,
            },
          ]}>
          <Text style={[styles.dropdownText, {color: theme.colors.textColor}]}>
            {selectedCity ? selectedCity.name : 'Select City'}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showCountryModal} transparent animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowCountryModal(false)}>
          <View
            style={[
              styles.modalList,
              {
                backgroundColor: theme.colors.inputText,
              },
            ]}>
            {countries.map(item => renderModalItem(item, setSelectedCountry))}
          </View>
        </Pressable>
      </Modal>
      <Modal visible={showStateModal} transparent animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowStateModal(false)}>
          <View
            style={[
              styles.modalList,
              {
                backgroundColor: theme.colors.inputText,
              },
            ]}>
            {states.map(item => renderModalItem(item, setSelectedState))}
          </View>
        </Pressable>
      </Modal>
      <Modal visible={showCityModal} transparent animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowCityModal(false)}>
          <View
            style={[
              styles.modalList,
              {
                backgroundColor: theme.colors.inputText,
              },
            ]}>
            {cities.map(city => (
              <Pressable
                key={city.id}
                onPress={() => {
                  setSelectedCity(city);
                  setShowCityModal(false);
                }}
                style={styles.modalItem}>
                <Text style={{color: theme.colors.textColor}}>{city.name}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  dropdownContainer: {
    marginTop: 20,
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
  modalList: {
    width: '85%',
    padding: 15,
    borderRadius: 10,
    maxHeight: 300,
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
});

export default CityScreen;
