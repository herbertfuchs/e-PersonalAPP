import React, { useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Image,
    Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appwrite } from 'appwrite';

import Logo from '../../assets/peso.png';
import { styles } from './styles';

export function PageExerc(){
    const [userName, setUserName] = useState<any>();

// ============================== Definindo o SDK e rotas da API ==========================================
    const sdk = new Appwrite();

    sdk
    .setEndpoint('https://king-kong.faladev.org/v1') // Your API Endpoint
    .setProject('61f998e0b23aeb09ff5c') // Your project ID
    ;
// ========================================================================================================

    const getAccount = () => {
        let promise = sdk.account.get();

        promise.then(function (response) {
            console.log(response); // Success
        if (response.name === ""){
            setUserName('convidado')
        } else {
            console.log('Dados da conta encontrados, definindo nome para exibição...')
            setUserName(response.name);
        }
        }, function (error) {
            console.log(error); // Failure
        });
    }

    useEffect(() => {
        getAccount();
    });

    return(
        <SafeAreaView>
            <View style={styles.Header}>
                <Image
                source={Logo}
                style={{width: 30, height: 30, marginTop: 75, marginBottom: 10}}
                />
            </View>

            <Text style={styles.greetings}>
                Olá <Text style={styles.name}>{userName}</Text>! Escolha um exercício.
            </Text>
            
            <ScrollView>

                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>

            </ScrollView>
        </SafeAreaView>
    );
};