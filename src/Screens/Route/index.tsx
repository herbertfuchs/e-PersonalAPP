import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteParamList } from "./RouteParamList";

import { SignIn } from "../SignIn";
import { Login } from "../Register";
import { Register } from "../Register/Cadastro";
import { PageExerc } from "../ExerScreen";
import { VideoPlayer } from "../ExerScreen/src";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const Stack = createNativeStackNavigator<RouteParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exercicios"
          component={PageExerc}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
