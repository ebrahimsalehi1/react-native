import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default function Home(){
    return (<View style={styles.root}>
        <Text>HOME</Text>
        </View>)
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
