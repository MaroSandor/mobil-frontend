import React from "react";
import { Button, View, Text, useWindowDimensions } from "react-native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Schedule from "./components/Schedules";
import AdminOldal from "./components/AdminPage";
import FoOldal from "./components/MainPage";
import Ertesitesek from "./components/Notifications";
import Fiok from "./components/Profile";
import Ertekeles from "./components/Rating";
import Velemenyek from "./components/Opinions";
import VectorIcons from "./components/VectorIcons";

function MainPage({ navigation }) {
  return <FoOldal />;
}

function NotificationsScreen({ navigation }) {
  return <Ertesitesek />;
}

function Buses({ navigation }) {
  return <Schedule />;
}

function Icons({ navigation }) {
  return <VectorIcons />;
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

function Opinions({ navigation }) {
  return <Velemenyek />;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Főoldal">
        <Drawer.Screen
          name="Fiók"
          component={Profil}
          options={{
            drawerLabel: "Fiók",
            drawerIcon: ({ focused }) => (
              <MaterialIcons name="info" size={30} />
            ),
          }}
        />
        <Drawer.Screen name="Főoldal" component={MainPage} />
        <Drawer.Screen name="Értesítések" component={NotificationsScreen} />
        <Drawer.Screen name="Járatok" component={Buses} />
        <Drawer.Screen name="Ikonok" component={Icons} />
        <Drawer.Screen name="Bejelentkezés" component={SignInbtn} />
        <Drawer.Screen name="Értékelés" component={Rating} />
        <Drawer.Screen name="Vélemények" component={Opinions} />
        <Drawer.Screen
          name="Home"
          component={Profil}
          options={{
            drawerLabel: "Valami",
            drawerIcon: ({ focused }) => (
              <MaterialIcons name="home" size={30} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
