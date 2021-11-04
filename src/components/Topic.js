import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Topic = ({ title, onPress }) => {
  const navigation = useNavigation();

  const sendItems = () => {
    navigation.navigate('Topic', { title })
  }

  const rightSwipe = () => {
    return (
      <TouchableOpacity style={styles.deleteView}>
        <View>
          <Icon name="trash" style={styles.trash} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Swipeable
      renderRightActions={rightSwipe}
    >
      <TouchableOpacity style={styles.container} onPress={() => sendItems()}>
        <View style={styles.cardDesign} />
        <Text style={styles.title}>{title}</Text>
        <Icon name="angle-right" style={styles.icon} />
      </TouchableOpacity>
    </Swipeable>
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
  deleteView: {
    backgroundColor: '#ff4f57',
    marginHorizontal: 40,
    height: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    width: '20%',
    alignItems: 'center',
    
},
trash: {
    fontSize: 28,
    color: '#E0E5EF',   
},
});

export default Topic;