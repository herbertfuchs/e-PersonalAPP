import React from 'react';
import { View,
    Text,
    TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function LoginButton(){
    return(
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.6}>
            <Text style={styles.title}>Faça login com Google</Text>
        </TouchableOpacity>
    );
}