import React, {useState} from 'react';
import Header from '../components/Header';
import {useTheme} from 'react-native-paper';
import {CustomThemeType} from '../theme/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import ImageComponent from '../components/ImageComponent';

const STPScreen = () => {
  const theme = useTheme() as CustomThemeType;
  const [financialYear, setFinancialYear] = useState<string | null>(null);
  const [addedDate, setAddedDate] = useState<string | null>(null);
  const [updatedDate, setUpdatedDate] = useState<string | null>(null);
  const [selectingDate, setSelectingDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const yearsDiff = (from: string | null): number => {
    if (!from) return 0;
    const fromDate = new Date(from);
    const today = new Date();
    return today.getFullYear() - fromDate.getFullYear();
  };

  const isEditable = !financialYear || yearsDiff(addedDate) < 4;

  const handleDateChange = (_: any, selected?: Date) => {
    if (Platform.OS === 'android') setSelectingDate(false);
    if (selected) {
      setSelectedDate(selected);
      const year = selected.getFullYear();
      const fy = `${year}-${year + 1}`;
      setFinancialYear(fy);
      const now = new Date().toISOString().split('T')[0];
      setAddedDate(prev => prev || now);
      setUpdatedDate(now);
    }
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Header title="STP" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.heading, {color: theme.colors.primary}]}>
          Standard Tour Plan
        </Text>

        {/* Financial Year Card */}
        <View style={[styles.card, getCardStyle(theme)]}>
          <Text style={[styles.label, {color: theme.colors.subTitle}]}>
            Financial Year
          </Text>
          {isEditable ? (
            <TouchableOpacity
              onPress={() => setSelectingDate(true)}
              style={[styles.inputBox, getInputBoxStyle(theme)]}>
              <View style={styles.inputRow}>
                <Text style={[styles.inputText, {color: theme.colors.primary}]}>
                  {financialYear || 'Select FY'}
                </Text>
                <ImageComponent name="calendarIcon" />
              </View>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.staticText, {color: theme.colors.textColor}]}>
              {financialYear}
            </Text>
          )}
        </View>

        {/* Added Date */}
        <View style={[styles.card, getCardStyle(theme)]}>
          <Text style={[styles.label, {color: theme.colors.subTitle}]}>
            Added Date
          </Text>
          <Text style={[styles.staticText, {color: theme.colors.textColor}]}>
            {addedDate || 'N/A'}
          </Text>
        </View>

        {/* Last Updated */}
        <View style={[styles.card, getCardStyle(theme)]}>
          <Text style={[styles.label, {color: theme.colors.subTitle}]}>
            Last Updated
          </Text>
          <Text style={[styles.staticText, {color: theme.colors.textColor}]}>
            {updatedDate || 'N/A'}
          </Text>
        </View>
      </ScrollView>

      {selectingDate && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
};

// Card design helper
const getCardStyle = (theme: CustomThemeType) => ({
  borderColor: theme.colors.inputBorder,
  backgroundColor: theme.colors.inputText,
  shadowColor: theme.colors.textColor,
});

// Input style helper
const getInputBoxStyle = (theme: CustomThemeType) => ({
  backgroundColor: theme.colors.whiteSmoke,
  borderColor: theme.colors.inputBorder,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    fontWeight: '500',
  },
  staticText: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 4,
  },
});

export default STPScreen;
