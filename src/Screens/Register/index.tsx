import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Image,
    } from 'react-native';
import { RouteStackParamList } from '../Route/RouteParamList';
import { Appwrite } from 'appwrite';

import Logo from '../../assets/logo.png';
import { styles } from './styles';
import { AccessButton } from './components/AccessButton';
import { NewAccountButton } from './components/NewAccountButton';

export function Login({navigation, route}: RouteStackParamList<"Login">){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        const sdk = new Appwrite();

        sdk
            .setEndpoint('https://king-kong.faladev.org/v1') // Your API Endpoint
            .setProject('61f998e0b23aeb09ff5c') // Your project ID
        ;

        let promise = sdk.account.createSession(`${email}`, `${password}`);

        promise.then(function (response) {
            console.log(response); // Success
            navigation.navigate('Exercicios')
            console.log('Conta encontrada e conectada com sucesso. Redirecionando...')
        }, function (error) {
            console.log(error); // Failure
            console.log(`Não foi possível efetuar conexão, erro: ${error}`)
        });
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.image}>
                <Image 
                style={{
                    height: 350,
                    width: 350,
                }}
                source={Logo}
                 />
            </View>

            <View   style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={setPassword}
                />
            
                <AccessButton onPress={() => {Login()}}/>

                <NewAccountButton onPress={() => {navigation.navigate('Register')}}/>
            </View>

        </KeyboardAvoidingView>

    );
}