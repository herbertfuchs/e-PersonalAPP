import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.temaColor
    },
    title: {
        flex: 1,
        fontSize: 28,
        textAlign: 'center',
        marginLeft: -15,
        color: 'black',
        fontFamily: theme.fonts.title400
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: 'white'
    },
    icon: {
        width: 24,
        height: 24
    }
});