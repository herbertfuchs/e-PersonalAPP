import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { RouteStackParamList } from "../Route/RouteParamList";

import { LoginButton } from "../../components/LoginButton";
import { GuestButton } from "../../components/GuestButton";

import Login from "../../assets/login.png";
import { styles } from "./styles";
import useSession from "../../Hooks/Session/useSession";

export function SignIn({ navigation }: RouteStackParamList<"Home">) {
  const { detectSession, continueAsGuest } = useSession(navigation);

  useEffect(() => {
    detectSession();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Login} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Pratique {"\n"}
          seus exercícios {"\n"}
          da melhor maneira!
        </Text>
        <LoginButton
          title={"Efetue seu Login"}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <GuestButton
          onPress={() => {
            continueAsGuest();
          }}
        />
      </View>
    </View>
  );
}
