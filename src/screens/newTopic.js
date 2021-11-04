import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import NavigationHeader from '../components/NavigationHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { saveTopic } from '../libs/Storage';

const newTopic = () => {
  const navigation = useNavigation();

  const [topicName, setTopicName] = useState('');
  const [isValidTopicName, setIsValidTopicName] = useState(true)
  
  // const createTopic = () => {
  //   if (topicName == undefined || topicName == '' || topicName.length < 3) {
  //     setIsValidTopicName(false)
  //   } else {
  //     navigation.navigate('Home');
  //     saveTopic({ topicName });
  //   };
  // };

  const newTopicName = (value) => {
    setTopicName(value)
    if (value.length >= 3) {
      setIsValidTopicName(true)
    };
  };

  // const id = uuidv4();
  
  const sendItems = () => {
    if (topicName == undefined || topicName == '' || topicName.length < 3) {
          setIsValidTopicName(false)
        } else {
          navigation.navigate('Home', {
            topicName: topicName
          });
        };
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="New Topic" leftIcon name="chevron-left" onPress={() => navigation.goBack()} />
      <Input title="Topic's Name" value={topicName} newValue={(value) => newTopicName(value)} placeholder="Example: Work" maxLength={25} />
      {isValidTopicName ? null : <Text style={styles.msgError}>Please, place a topic name!</Text>}
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

export default newTopic;