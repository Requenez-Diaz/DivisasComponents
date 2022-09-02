import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    type: 'titulo' | 'comment' | 'normal'
}

const Textos = ({ text, type }: Props) => {
    return (
        
        <Text 
            style={[
                type === 'titulo' ? styles.titulo : null,
                type === 'comment' ? styles.comment : null,
                type === 'normal' ? styles.normal : null
            ]}
        >
            {text}
        </Text>
        
    )
}

export default Textos

const styles = StyleSheet.create({
    titulo: {
        fontSize: 45,
        position: 'absolute',
        top: 30,
        left: 20,
        color: 'Skyblue'
    },
    comment: {
        fontSize: 12,
        textAlign: 'center',
        color: 'Skyblue'
    },
    normal: {
        color: 'Skyblue',
        padding: 2
    }
})
