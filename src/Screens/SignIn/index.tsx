import React from 'react';
import {
    View,
    Button,
    Text,
    Image, 
    TouchableOpacity} from 'react-native';

import { LoginButton } from '../../components/LoginButton';
import Login from '../../assets/login.png';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteStackParamList } from '../Route/RouteParamList';


export function SignIn({ navigation, route }: RouteStackParamList<"Home">){
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
                <TouchableOpacity style={styles.botao}>
                <Button color='rbga(255,0,0,0.0)' onPress={() => navigation.navigate('Login')}
                title={"Continue"}/>
                </TouchableOpacity>
                <Button color='rbga(255,0,0,0.0)' onPress={() => navigation.navigate('Exercicios')}
                title={"Page"}/>
            </View>
        </View>

    );
}