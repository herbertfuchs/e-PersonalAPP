import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    iconWrapper:{
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.textColor
    },
    icon: {
        width: 40,
        height: 40
    },
    title: {
        flex: 1,
        fontSize: 26,
        textAlign: 'center',
        color: theme.colors.textColor,
        fontFamily: theme.fonts.title400
    }
});