import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllNotes } from '../libs/Storage';

import NavigationHeader from '../components/NavigationHeader';
import Notes from '../components/Notes';



const Topic = ({ route }) => {
  const navigation = useNavigation();
  
  const [notes, setNotes] = useState([]);

  // const renderNote = async (id) => {
  //   try {
  //     const note = await getAllNotes();
  //     setNotes(note);
  //   } catch (e) {
  //     console.log(e);
  //   };
  // };

  // useEffect(() => {
  //   renderNote()
  // }, [notes])
  
  // const newNote = () => {
  //   navigation.navigate('newNotes')
  // }

  useEffect(() => {
    if (route.params) {
      const { id, noteName } = route.params
      if (noteName == undefined || noteName == '') {
        setNotes([]);
      } else {
        setNotes(oldNote => [ ...oldNote, { id, noteName } ])
      }
    }
  }, [route.params])
  
  const newNote = () => {
    navigation.navigate('newNotes')
  }

  const renderNotes = () => {
    if (notes.length < 1) {
      return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <Text style={styles.title}>No notes here, make a new!</Text>
        </View>
      )
    } else {
      return (
        <View>
          <FlatList 
            data={notes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Notes title={item.noteName} />}
          />
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader 
        title='My Notes'
        leftIcon leftIconName="chevron-left" 
        rightIcon rightIconName="plus" 
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => newNote()}  
      />
      {renderNotes()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2CB1C3',
  }
})

export default Topic