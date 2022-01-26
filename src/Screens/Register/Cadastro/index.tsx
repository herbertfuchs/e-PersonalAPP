import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Logo from '../../../assets/peso.png';
import { styles } from './styles';

export function Register(){
    return(
        <SafeAreaView>
            <View style={styles.Header}>
                <Image
                source={Logo}
                style={{width: 30, height: 30, marginTop: 75, marginBottom: 10}}
                />
            </View>

            <ScrollView>

                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>


            </ScrollView>
        </SafeAreaView>
    );
}