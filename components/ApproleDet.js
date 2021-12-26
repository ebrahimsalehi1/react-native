import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

export default function ApproleDet(props){
    
    return (
        <View style={styles.root} >
            <Text key={`2-${props.key}`}>{props.item.displayName}</Text>
            <Text key={`2-${props.key}`}>{props.item.name}</Text>
            
            {
                props.item.description ?
                <Text key={`3-${props.key}`}>{props.item.description}</Text> :
                <Text key={`3-${props.key}`}>.............</Text>
            }
            <View style={styles.buttonPanel}>
                <Button title="ویرایش" />
                <Button title="حذف"/>
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        width:'98%',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:1,
        margin:4,
        padding:4,
        height:200,
    },  
    buttonPanel:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
})
