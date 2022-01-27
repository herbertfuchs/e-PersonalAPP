import React from 'react';
import { View,
    TouchableOpacity,
    TouchableOpacityProps,
    Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps

export function GuestButton({...rest}){
    return(
            <TouchableOpacity style={styles.container} {...rest}>
                    <Text style={styles.title}>Continuar como convidado</Text>
            </TouchableOpacity>
    );
};