import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavigationHeader = ({ title, leftIcon, leftIconName, rightIcon, rightIconName, onPressLeft, onPressRight }) => {
  if (leftIcon && rightIcon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeft} >
          <Icon name={leftIconName} style={styles.icon} />
        </TouchableOpacity>
        <Text style={[styles.title, { marginRight: 14 }]}>{title}</Text>
        <TouchableOpacity onPress={onPressRight} >
          <Icon name={rightIconName} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  } else if (leftIcon) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLeft} >
          <Icon name={leftIconName} style={styles.icon} />
        </TouchableOpacity>
        <Text style={[styles.title, { marginRight: 14 }]}>{title}</Text>
      </View>
    )
  } else if (rightIcon) {
      return (
        <View style={styles.container}>
          <Text style={[styles.title, { marginLeft: 14 }]}>{title}</Text>
          <TouchableOpacity onPress={onPressRight} >
            <Icon name={rightIconName} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2CB1C3',
    padding: 15,
    marginBottom: 15
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
    
  },
  icon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
    marginTop: 3,
    
  }
});

export default NavigationHeader;