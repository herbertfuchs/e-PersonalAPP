import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image } from 'react-native';
import { RouteStackParamList } from '../Route/RouteParamList';
import { Appwrite } from 'appwrite';

import { LoginButton } from '../../components/LoginButton';
import { GuestButton } from '../../components/GuestButton';

import Login from '../../assets/login.png';
import { styles } from './styles';



export function SignIn({ navigation, route }: RouteStackParamList<"Home">){
// ============================== Definindo o SDK e rotas da API ==========================================
    const sdk = new Appwrite();

    sdk
        .setEndpoint('https://king-kong.faladev.org/v1') // Your API Endpoint
        .setProject('61f998e0b23aeb09ff5c') // Your project ID
    ;
// ========================================================================================================


// Detecta se há uma sessão ativa e redireciona para o APP prático.
    const detectSession = () => {
        let promise = sdk.account.getSessions();

        promise.then(function (response) {
            console.log(response); // Success
            console.log(`Sessão detectada, redirecionando...`)
            navigation.navigate('Exercicios')
        }, function (error) {
            console.log(`Nenhuma sessão encontrada, efetue o Login.`)
            console.log(error); // Failure
        });
    }

// Efetua o Login como um usuário anônimo.
    const continueAsGuest = () => {
        let promise = sdk.account.createAnonymousSession();

        promise.then(function (response) {
            console.log(response); // Success
            console.log(`Conectado como anônimo.`)
            navigation.navigate('Exercicios');
        }, function (error) {
            console.log(error); // Failure
        });
    }

    useEffect (() => {
        detectSession();
    })

  return(
    <View style={styles.container}>
        <Image 
        source={Login}
        style={styles.image}
        />
        <View style={styles.content}>
            <Text style={styles.title}>
                Pratique {'\n'}
                seus exercícios {'\n'}
                da melhor maneira!
            </Text>
            <LoginButton title={'Efetue seu Login'} onPress={() => {navigation.navigate('Login')}}/>
            <GuestButton onPress={() => {continueAsGuest()}}/>
        </View>
    </View>
);
    }