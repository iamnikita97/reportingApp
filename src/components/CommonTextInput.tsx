import React, {useState, FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';

interface CommonTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: string;
  secureTextEntry?: boolean;
  style?: object;
}

const CommonTextInput: FC<CommonTextInputProps> = ({
  label,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  style,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const theme = useTheme() as CustomThemeType;

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        secureTextEntry={isPasswordVisible}
        left={
          icon ? (
            <TextInput.Icon
              icon={() => <ImageComponent name={icon} style={styles.icon} />}
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
            backgroundColor: theme.colors.inputText,
            color: theme.colors.inputBorder,
          },
        ]}
        textColor={theme.colors.inputBorder}
        theme={{
          roundness: 15,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.inputText,
            outline: theme.colors.inputBorder,
            text: theme.colors.inputBorder,
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
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CommonTextInput;
