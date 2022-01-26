import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Image,
    TouchableOpacity,
    Text, 
    } from 'react-native';

import { LoginButton } from '../../components/LoginButton';
import Logo from '../../assets/logo.png';
import { styles } from './styles';

export function Login(){
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
                    onChangeText={()=> {}}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />
            
                <TouchableOpacity
                    style={styles.botao}
                >
                    <Text style={{
                        color: '#fff'
                    }}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                >
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    );
}