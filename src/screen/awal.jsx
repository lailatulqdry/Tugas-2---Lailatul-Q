import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


export default class awal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('/Users/Diyah/belajarkuy/Tugas2/src/images/background.png')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Quran')}>
                        <Text style={styles.text}>Start</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'hotpink',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 535,
    },
});
