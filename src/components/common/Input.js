import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    const {textInputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label} </Text>
            <TextInput
                autoCorrect={false}
                style={textInputStyle}
                value={value}
                onChangeText={onChangeText}
                style={styles.textInputStyle}
            />
        </View>
    );
}

const styles = {
    textInputStyle: {
        width: 100,
        height: 20,
        color: '#000',
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };