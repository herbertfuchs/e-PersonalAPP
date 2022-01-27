import React from 'react';
import { View,
    Button,
    Text,
    Image,
    TouchableOpacity, 
    TouchableOpacityProps} from 'react-native';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-icon.png';

type Props = TouchableOpacityProps

export function LoginButton({...rest}){
    return(
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.6}
        {...rest}>
            <Text style={styles.title}>Faça login com Google</Text>
        </TouchableOpacity>
    );
}