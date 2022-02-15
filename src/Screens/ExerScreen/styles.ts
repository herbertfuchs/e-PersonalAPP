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
    },
    greetings: {
        fontSize: 26,
        fontFamily: theme.fonts.title400,
        marginTop: 8,
        marginLeft: 8
    },
    name: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.secondaryColor
    }
});
