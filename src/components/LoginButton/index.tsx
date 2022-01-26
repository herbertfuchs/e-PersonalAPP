import React from 'react';
import { View,
    Button,
    Text,
    Image,
    TouchableOpacity } from 'react-native';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-icon.png';

export function LoginButton(){
    return(
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.6}>
            <View style={styles.iconWrapper}>
                <Image source={GoogleIcon} style={styles.icon}/>
            </View>
            <Text style={styles.title}>Faça login com Google</Text>
        </Button>
    );
}