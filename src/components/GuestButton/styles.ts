import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 26,
        fontFamily: theme.fonts.title400,
        lineHeight: 46
    }
});