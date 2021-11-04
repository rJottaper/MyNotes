import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

const Notes = ({ title }) => {
  const leftSwipe = () => {
    return (
      <TouchableOpacity style={styles.ckeckView}>
        <View>
          <Icon name="check" style={styles.icon} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Swipeable
      renderLeftActions={leftSwipe}
    >
      <View style={styles.container}>
        <Icon name="sticky-note" style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2CB1C3',
    height: 90,
    marginHorizontal: 30,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    marginBottom: 20,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D6D6D6'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D6D6D6',
    marginHorizontal: 10
  },
  ckeckView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#00c848',
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    height: '82%',
    width: '85%',
    marginHorizontal: 30
},
});

export default Notes;