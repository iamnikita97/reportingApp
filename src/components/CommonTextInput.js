import React, {useState} from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {LightTheme, CustomDarkTheme} from '../theme/theme';

const CommonTextInput = ({
  label,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? CustomDarkTheme : LightTheme;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        secureTextEntry={isPasswordVisible}
        left={
          icon ? (
            <TextInput.Icon
              icon={() => (
                <ImageComponent name={icon} style={styles.icon} />
              )}
            />
          ) : null
        }
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={() => (
                <ImageComponent
                  name={isPasswordVisible ? 'visbleOnIcon' : 'visbleOffIcon'}
                  style={styles.icon}
                />
              )}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          ) : null
        }
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
          },
        ]}
        textColor={theme.colors.text}
        theme={{
          roundness: 15,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.inputBackground,
            outline: theme.colors.inputBorder,
            text: theme.colors.text,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
  },
  icon: {
    width: 29, 
    height: 29, 
    resizeMode: 'contain',
  },
});

export default CommonTextInput;
