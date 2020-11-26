import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const FormInput = ({value, text, onChangeText, secureTextEntry}) => {
  const [border, SetBorder] = useState('#37373750');
  const Focus = () => {
    SetBorder('#000000');
  };
  const Blur = () => {
    SetBorder('#37373750');
  };
  return (
    <View>
      <Text style={styles.desc}>{text}</Text>
      <TextInput
        onFocus={Focus}
        onBlur={Blur}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    color: '#373737',
    fontFamily: 'Roboto-Medium',
    marginBottom: 6,
  },
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
