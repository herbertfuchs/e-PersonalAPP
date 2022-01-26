import React from 'react';
import { View,
    Button,
    Text,
    TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function LoginButton(){
    return(
        <Button>
            <Text style={styles.title}>Faça login com Google</Text>
        </Button>
    );
}