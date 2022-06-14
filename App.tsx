import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Dongle_700Bold,
  Dongle_400Regular,
} from "@expo-google-fonts/dongle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./src/Screens/Route";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Dongle_700Bold,
    Dongle_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    );
  }
}
