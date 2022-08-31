import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Textos from './Textos'

interface Props {
    color?: 'Green' | 'blue';
    text: string;
    onPress: () => void
    disabled: boolean;
}

const ButtonCalculate = ({ color, text, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.button,
                color === 'Green' ? styles.light : null,
                color === 'blue' ? styles.dark : null,
                disabled ? styles.disabled : null,
            ]}
        >
            <Textos text={text} type='normal'/>
        </TouchableOpacity>
    )
}

export default ButtonCalculate

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        top: 75,
        right: -75,
        borderRadius: 70,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    light: {
        backgroundColor: 'green'
    },
    dark: {
        backgroundColor: 'green'
    },
    disabled: {
        backgroundColor: 'black'
    }
})
