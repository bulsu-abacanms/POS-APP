import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import { inputStyles } from '../../utilities/components/inputStyles';

interface InputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  ...rest
}) => {
  return (
    <View style={inputStyles.container}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      <TextInput
        style={inputStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A3A3A3"
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};

