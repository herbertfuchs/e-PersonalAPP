// guizão esteve aqui :D
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 360,
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
        marginTop: 80
    }
});
