import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ title, name, icon, onPress }) => {
  if (icon) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Icon style={styles.icon} name={name}  />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2CB1C3',
    padding: 14,
    marginHorizontal: 15,
    borderRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
  },
  icon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
    marginTop: 4,
    marginLeft: 5
  }
});

export default Button;