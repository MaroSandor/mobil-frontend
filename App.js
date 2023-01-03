import React from "react";
import { Button, View, Text, useWindowDimensions0 } from "react-native";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Schedule from "../frontend-mobil/components/Schedules";
import AdminOldal from "../frontend-mobil/components/AdminPage";
import FoOldal from "../frontend-mobil/components/MainPage";
import Ertesitesek from "../frontend-mobil/components/Notifications";
import Fiok from "../frontend-mobil/components/Profile";
import Ertekeles from "../frontend-mobil/components/Rating";
import Velemenyek from "../frontend-mobil/components/Opinions";
import VectorIcons from "../frontend-mobil/components/VectorIcons";

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
