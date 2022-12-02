import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Schedule from "./components/Schedules";
import AdminOldal from "./components/AdminPage";
import FoOldal from "./components/MainPage";
import Ertesitesek from "./components/Notifications";
import Fiok from "./components/Profile";
import Ertekeles from "./components/Rating";

function MainPage({ navigation }) {
  return <FoOldal />;
}

function NotificationsScreen({ navigation }) {
  return <Ertesitesek />;
}

function Buses({ navigation }) {
  return <Schedule />;
}

function SignInbtn({ navigation }) {
  return <AdminOldal />;
}

function Profil({ navigation }) {
  return <Fiok />;
}

function Rating({ navigation }) {
  return <Ertekeles />;
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
        <Drawer.Screen name="Értékelés" component={Rating} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
