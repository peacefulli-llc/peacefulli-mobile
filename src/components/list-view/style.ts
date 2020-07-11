import { StyleSheet } from 'react-native';
import { Color } from '../../constants/color-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flex: 4,
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -75,
    },
});
