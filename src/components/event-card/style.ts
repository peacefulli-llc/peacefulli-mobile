import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 5,
    },
    textPrimary: {
        color: Color.black,
        fontFamily: 'lucida_grande_bold',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    textSecondary: {
        color: Color.black,
        fontFamily: 'lucida_grande_regular',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
    },
});
