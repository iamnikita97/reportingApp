import React, {useState, FC, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import ImageComponent from './ImageComponent';
import {CustomThemeType} from '../theme/theme';
import {TextInput, useTheme} from 'react-native-paper';

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
        left={icon ? <LeftIcon icon={icon} /> : null}
        right={
          secureTextEntry ? (
            <RightIcon
              isVisible={isPasswordVisible}
              onToggle={() => setIsPasswordVisible(!isPasswordVisible)}
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

const LeftIcon: FC<{icon: string}> = memo(({icon}) => {
  const renderIcon = () => <ImageComponent name={icon} style={styles.icon} />;
  return <TextInput.Icon icon={renderIcon} />;
});

const RightIcon: FC<{isVisible: boolean; onToggle: () => void}> = memo(
  ({isVisible, onToggle}) => {
    const renderIcon = () => (
      <ImageComponent
        name={isVisible ? 'visbleOnIcon' : 'visbleOffIcon'}
        style={styles.icon}
      />
    );
    return <TextInput.Icon icon={renderIcon} onPress={onToggle} />;
  },
);

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
