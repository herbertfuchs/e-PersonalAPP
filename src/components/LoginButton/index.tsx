import React from 'react';
import { View,
    Button,
    Text,
    Image,
    TouchableOpacity, 
    TouchableOpacityProps} from 'react-native';

import { styles } from './styles';
import PesoIcon from '../../assets/peso.png';

type Props = TouchableOpacityProps & {
    title: string;
}

export function LoginButton({ title, ...rest }){
    return(
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.6}
        {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={PesoIcon} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}