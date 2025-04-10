const countries = ['India', 'USA', 'Canada'];

const CountryScreen = () => {
  const theme = useTheme() as CustomThemeType;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.whiteSmoke}]}>
      <Text style={[styles.title, {color: theme.colors.textColor}]}>
        Countries
      </Text>

      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[styles.item, {backgroundColor: theme.colors.inputText}]}>
            <Text style={{color: theme.colors.textColor}}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.addButton, {backgroundColor: theme.colors.primary}]}>
        <Text style={{color: theme.colors.inputText}}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryScreen;
