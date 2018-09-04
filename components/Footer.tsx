import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <FontAwesome5 name="home" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="search" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="bell" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="envelope" size={30} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 0.5,
        paddingHorizontal: 40,
    },
});
