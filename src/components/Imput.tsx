import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from '../pages/login/styles';

interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ label, isPassword, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword}
        placeholderTextColor="#4E5058"
        {...rest}
      />
    </View>
  );
};