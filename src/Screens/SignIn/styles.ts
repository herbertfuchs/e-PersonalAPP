// guizão esteve aqui :D
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 400,
        height: 400,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 45,
        fontFamily: theme.fonts.title700,
        lineHeight: 45,
        marginBottom: 30,
        marginTop: 50,
    },
        botao: {
        marginBottom: 10,
        padding: 10,
        color: theme.colors.alwaysWhite,
        borderRadius: 9,
        backgroundColor: theme.colors.temaColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
});