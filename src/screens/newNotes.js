import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid'

import NavigationHeader from '../components/NavigationHeader';
import Input from '../components/Input';
import Button from '../components/Button';

const newNotes = () => {
  const navigation = useNavigation();

  const id = uuidv4();
  const [noteName, setNoteName] = useState();
  console.log(noteName);

  const sendItems = () => {
    navigation.navigate('Topic', {
      id: id,
      noteName: noteName
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="New Note" leftIcon leftIconName="chevron-left" onPressLeft={() => navigation.goBack()}  />
      <Input title="Note's Name" value={noteName} newValue={(value) => setNoteName(value)} placeholder="New Note" maxLength={60} />
      <Button title="Save" icon name="check" onPress={() => sendItems()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6'
  }
})

export default newNotes;