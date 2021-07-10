import * as React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 30,
        width: '100%',
        marginTop: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        marginVertical: 15,
        marginBottom: 0,
    },
    avatarContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        opacity: 0.7,
    },
    avatarIcon: {
        position: 'absolute',
        fontSize: 25,
        color: 'grey',
        top: "26%",
        left: "60%"
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#EAA443',
        paddingBottom: 1,
        marginBottom: 10,
        color: 'rgb(74, 15, 15)',
    },
    label: {
        color: 'red',
        fontSize: 14,
    },
    image: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
        borderRadius: 20,
        width: '100%',
        height: 150,
    },
    button: {
        marginTop: 20
    },
})

export default styles;

