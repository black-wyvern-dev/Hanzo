import * as React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        alignSelf: 'center'
    },
    editbtn: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
    }
})

export default styles;