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
    title: {
        flex: 1,
        fontSize: 26,
        textAlign: 'center',
        color: theme.colors.textColor,
        fontFamily: theme.fonts.title400
    }
});