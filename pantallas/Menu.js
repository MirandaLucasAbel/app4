import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Login from './Login';
import About from './About';

export default function Menu() {

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
              <Drawer.Screen name="login" component={Login} />
                  <Drawer.Screen name="home" component={Home} />
                  <Drawer.Screen name="about" component={About} />
    </Drawer.Navigator>
  );
}