// guizão esteve aqui :D
import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';

export const styles = StyleSheet.create({
    pai: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: theme.colors.temaColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        marginTop: 3
    },
    registerImage: {
        width: '90%',
        height: 258
    },
    input: {
        marginTop: 20,
        padding: 5,
        color: '#000',
        backgroundColor: theme.colors.textColor,
        borderRadius: 10,
        width: '90%',
    },
    content: {
        width: '75%',
        marginTop: 25,
        paddingHorizontal: 20
    }
});
