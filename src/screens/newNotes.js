import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid'

import NavigationHeader from '../components/NavigationHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { saveNote } from '../libs/Storage';

const newNotes = () => {
  const navigation = useNavigation();

  const [noteName, setNoteName] = useState('');
  const [isValidNoteName, setIsValidNoteName] = useState(true);

  // const sendItems = () => {
  //   if (noteName == undefined || noteName == '' || noteName.length < 3) {
  //     setIsValidNoteName(false)
  //   } else {
  //     navigation.navigate('Topic');
  //     saveNote({ noteName });
  //   };
  // };

  // const id = uuidv4();

  const sendItems = () => {
    if (noteName == undefined || noteName == '' || noteName.length < 3) {
          setIsValidNoteName(false)
        } else {
          navigation.navigate('Topic', {
            noteName: noteName
          });
        };
  }

  const newValueInput = (value) => {
    setNoteName(value)
    if (value.length >= 3) {
      setIsValidNoteName(true)
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="New Note" leftIcon leftIconName="chevron-left" onPressLeft={() => navigation.goBack()}  />
      <Input title="Note's Name" value={noteName} newValue={(value) => newValueInput(value)} placeholder="New Note" maxLength={60} />
      {isValidNoteName ? null : <Text style={styles.msgError}>Please, the note name is invalid!</Text>}
      <Button title="Save" icon name="check" onPress={() => sendItems()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6'
  },
  msgError: {
    marginLeft: 15,
    marginBottom: 15,
    color: '#ff305e',
    fontWeight: 'bold'
  }
})

export default newNotes;