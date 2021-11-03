import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavigationHeader from '../components/NavigationHeader';
import Topic from '../components/Topic';

const Home = ({ route }) => {
  const navigation = useNavigation();

  const [topic, setTopic] = useState([]);

  

  useEffect(() => {
    if (route.params) {
      const { id, topicName } = route.params
      setTopic(oldTopics => [ ...oldTopics, { id, topicName } ])
    }
  }, [route.params])

  const renderTopics = () => {
    if (topic.length < 1) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>No topics found, please add one to start</Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList 
            data={topic}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Topic title={item.topicName} />}
          />
        </View>
      )
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader title="Home" rightIcon rightIconName="plus" onPressRight={() => navigation.navigate('newTopic')} />
      {renderTopics()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D6D6D6'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2CB1C3'
  }
})

export default Home;