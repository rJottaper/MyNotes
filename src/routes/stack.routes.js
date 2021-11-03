import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import newTopic from '../screens/newTopic';
import Topic from '../screens/Topic'
import newNotes from '../screens/newNotes';

const StackRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="newTopic" component={newTopic} />
      <Screen name="Topic" component={Topic} />
      <Screen name="newNotes" component={newNotes} />
    </Navigator>
  );
};

export default StackRoutes;