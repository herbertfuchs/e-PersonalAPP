import React from 'react';
import {
    View,
    Text,
    Image } from 'react-native';

import { LoginButton } from '../../components/LoginButton';
import StatsImage from '../../assets/stats.png';
import { styles } from './styles';

export function SignIn(){
    return(
        <View style={styles.container}>
            <Image 
            source={StatsImage}
            style={styles.image}
             />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Pratique {'\n'}
                    seus exercícios {'\n'}
                    da melhor maneira
                </Text>
                <LoginButton />
            </View>
        </View>

    );
}