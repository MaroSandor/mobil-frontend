import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Schedule from './Schedule'
import AdminOldal from './AdminPage'

function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Schedule({ navigation }) {
  return (
   <Schedule />
  );
}

function SignInbtn({ navigation }) {
  return (
   <AdminOldal />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Főoldal">
        <Drawer.Screen name="Főoldal" component={MainPage} />
        <Drawer.Screen name="Értesítések" component={NotificationsScreen} />
        <Drawer.Screen name="Járatok" component={Schedule} />
        <Drawer.Screen name="Bejelentkezés" component={SignInbtn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
