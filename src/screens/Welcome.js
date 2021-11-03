import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Notes from '../assets/notes.svg'

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Notes width={250} height={250} style={styles.image} />
      <Text style={styles.name}>Welcome To MyNotes</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Here you keep your notes in an organized and safe way</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D6D6D6'
  },
  image: {
    marginTop: 30
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2CB1C3',
  },
  content: {
    justifyContent: 'space-evenly',
    backgroundColor: '#2CB1C3',
    width: '100%',
    height: 250,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#D6D6D6'
  },
  button: {
    backgroundColor: '#D6D6D6',
    padding: 14,
    marginHorizontal: 15,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2CB1C3'
  }
});

export default Welcome;