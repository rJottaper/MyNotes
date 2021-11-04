import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ title, value, newValue, placeholder, maxLength }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} value={value} onChangeText={newValue} placeholder={placeholder} maxLength={maxLength} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2CB1C3',
    marginTop: 15,
    marginLeft: 15,
  },
  input: {
    marginLeft: 15,
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#2CB1C3',
    color: '#2CB1C3'
  }
});

export default Input;