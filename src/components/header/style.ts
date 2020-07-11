import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Color.purple,
        fontFamily: "lucida_grande_bold",
        fontSize: 36,
        fontWeight: "bold"
    }
});
