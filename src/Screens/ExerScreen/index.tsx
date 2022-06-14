import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appwrite } from "appwrite";
import { RouteStackParamList } from "../Route/RouteParamList";

import Logo from "../../assets/peso.png";
import ImgPrincipal from "../../assets/funcionalTempo.png";
import Musculo from "../../assets/musculacaoTempo.png";

import { styles } from "./styles";

export function PageExerc({
  navigation,
  route,
}: RouteStackParamList<"Exercicios">) {
  const [userName, setUserName] = useState<any>();

  const sdk = new Appwrite();

  sdk
    .setEndpoint("https://king-kong.faladev.org/v1") // Your API Endpoint
    .setProject("61f998e0b23aeb09ff5c"); // Your project ID

  const getAccount = () => {
    let promise = sdk.account.get();
    promise.then(
      function (response) {
        console.log(response); // Success
        if (response.name === "") {
          setUserName("convidado");
        } else {
          console.log(
            "Dados da conta encontrados, definindo nome para exibição..."
          );
          setUserName(response.name);
        }
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAccount();
  });

  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Image
          source={Logo}
          style={{ width: 30, height: 30, marginTop: 75, marginBottom: 10 }}
        />
      </View>

      <Text style={styles.greetings}>
        Olá <Text style={styles.name}>{userName}</Text>! Escolha um exercício.
      </Text>

      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoPlayer");
          }}
        >
          <View style={styles.box}>
            <Image source={ImgPrincipal} style={styles.boxImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoPlayer");
          }}
        >
          <View style={styles.box}>
            <Image source={Musculo} style={styles.boxImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoPlayer");
          }}
        >
          <View style={styles.box}>
            <Image source={ImgPrincipal} style={styles.boxImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoPlayer");
          }}
        >
          <View style={styles.box}>
            <Image source={ImgPrincipal} style={styles.boxImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoPlayer");
          }}
        >
          <View style={styles.box}>
            <Image source={ImgPrincipal} style={styles.boxImage} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
