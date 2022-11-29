import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from './Schedules'
import AdminOldal from './AdminPage'
import FoOldal from './MainPage'
import Ertesitesek from './Notifications'
import Fiok from './Profile'

function MainPage({ navigation }) {
  return (
    <FoOldal />
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <Ertesitesek />
  );
}

function Buses({ navigation }) {
  return (
    <Schedule />
  );
}

function SignInbtn({ navigation }) {
  return (
    <AdminOldal />
  );
}

function Profil({ navigation }) {
  return (
    <Fiok />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Főoldal">
        <Drawer.Screen name="Fiók" component={Profil} />
        <Drawer.Screen name="Főoldal" component={MainPage} />
        <Drawer.Screen name="Értesítések" component={NotificationsScreen} />
        <Drawer.Screen name="Járatok" component={Buses} />
        <Drawer.Screen name="Bejelentkezés" component={SignInbtn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
