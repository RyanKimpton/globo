import React from 'react';
import {Home} from './app/views/Home.js';
import {Contact} from './app/views/Contact.js'
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
  {
    initialRouteName: 'HomeRT'
  }
)

const App = createAppContainer(MyRoutes);

export default App;
