import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import NavigationHeader from '../components/NavigationHeader';
import Input from '../components/Input';
import Button from '../components/Button';

const newTopic = () => {
  const navigation = useNavigation();

  const id = uuidv4();
  const [topicName, setTopicName] = useState();
  
  const sendItems = () => {
    navigation.navigate('Home', {
      id: id,
      topicName: topicName
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="New Topic" leftIcon name="chevron-left" onPress={() => navigation.goBack()} />
      <Input title="Topic's Name" value={topicName} newValue={(value) => setTopicName(value)} placeholder="Example: Work" maxLength={25} />
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

export default newTopic;