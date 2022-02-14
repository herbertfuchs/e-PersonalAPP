import React, { useState } from 'react';
import {
    View,
    SafeAreaView, // estava sendo utilizado antes, mas acredito que seja por causa do scroll e aquelas box que tinham antes
    Image,
    TextInput,
    KeyboardAvoidingView } from 'react-native';
import { RouteStackParamList } from '../../Route/RouteParamList';
import { Appwrite } from 'appwrite';

import Logo from '../../../assets/peso.png';
import Registro from '../../../assets/registro.png';
import { LoginButton } from '../../../components/LoginButton';
import { styles } from './styles';

export function Register({ navigation, route }: RouteStackParamList<"Register">){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// ============================== Definindo o SDK e rotas da API ==========================================
        const sdk = new Appwrite();

        sdk
        .setEndpoint('https://king-kong.faladev.org/v1') // Your API Endpoint
        .setProject('61f998e0b23aeb09ff5c') // Your project ID
        ;
// ========================================================================================================

    const Cadastro = () => {
        let promise = sdk.account.create('unique()', `${email}`, `${password}`, `${name}`);

        promise.then(function (response) {
            console.log(response); // Success
            console.log('Cadastrado com sucesso! Redirecionando...');
            navigation.navigate('Login')
        }, function (error) {
            console.log(error); // Failure
            console.log('Não foi possível efetuar o cadastro, tente novamente ou aguarde um instante.')
        }); 
    }

    return(
        <KeyboardAvoidingView style={styles.pai}>
            <View style={styles.header}>
                <Image
                source={Logo}
                style={{width: 30, height: 30, marginTop: 75, marginBottom: 10}}
                />
            </View>

            <View style={styles.container}>

                <Image 
                source={Registro} 
                style={styles.registerImage}
                />

                <TextInput 
                style={styles.input}
                placeholder="Seu Nome"
                autoCorrect={false}
                onChangeText={setName} />

                <TextInput 
                style={styles.input}
                placeholder="Seu E-mail"
                autoCorrect={false}
                onChangeText={setEmail} />

                <TextInput 
                style={styles.input}
                placeholder="Sua Senha"
                autoCorrect={false}
                onChangeText={setPassword} />

            <View style={styles.content}>
                <LoginButton title={'Cadastrar-se'} onPress={() => {Cadastro()}} />
            </View>

            </View>
        </KeyboardAvoidingView>
    );
}