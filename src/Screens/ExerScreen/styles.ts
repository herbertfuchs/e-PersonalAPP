// guizão esteve aqui :D
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    Header: {
        backgroundColor: theme.colors.temaColor,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    box: {
        height: 300,
        backgroundColor: theme.colors.textColor,
        margin: 7,
        borderRadius: 5,
    }
});
