import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Topic = ({ title, onPress }) => {
  const navigation = useNavigation();

  const sendItems = () => {
    navigation.navigate('Topic', { title })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => sendItems()}>
      <View style={styles.cardDesign} />
      <Text style={styles.title}>{title}</Text>
      <Icon name="angle-right" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 18,
    width: '80%',
    marginHorizontal: 40,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#2CB1C3',
    
  },
  cardDesign: {
    borderWidth: 1,
    borderColor: '#D6D6D6'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D6D6D6'
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D6D6D6',
    marginTop: 1
  },
});

export default Topic;