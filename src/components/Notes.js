import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Notes = ({ title }) => {
  return (
    <View style={styles.container}>
      <Icon name="sticky-note" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2CB1C3',
    height: 90,
    marginHorizontal: 30,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    marginBottom: 20,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D6D6D6'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
    marginHorizontal: 10
  }
});

export default Notes;