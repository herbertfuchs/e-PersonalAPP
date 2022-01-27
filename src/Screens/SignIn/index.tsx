import React from 'react';
import {
    View,
    Text,
    Image, 
    TouchableOpacity} from 'react-native';

import { LoginButton } from '../../components/LoginButton';
import Login from '../../assets/login.png';
import { styles } from './styles';
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
                <LoginButton onPress={() => {navigation.navigate('Login')}} />
            </View>
        </View>
    );
}