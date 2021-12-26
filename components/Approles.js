import axios from 'axios';
import React from 'react';
import {Text, View, StyleSheet, Image, Alert,FlatList} from 'react-native';
import ApproleDet from './ApproleDet';
import db from '../data/db.json';

//const db = React.lazy(()=>import('../data/db.json'));

export default function Approles(){
    const [data,setData] = React.useState([]);

    React.useEffect(()=>{
        axios.get('http://bidev.msc.ir/OBISEC/api/v1.0/ApplicationRoleMng/list/obi')
        .then(response=>{
            if(response.status==200)
                setData(response.data)   
            else
                alert(`Status is ${response.status}`,'approle')                
        })
        .catch(error=>{
            setData(db.approles);

            alert(`برنامه با خطا مواجه شده است.\n  ${error}`,'approle')
        })
    },[]);

    return (
        <View style={styles.root}>
            {/* {
                data?.length>0 &&
                data.map((item,index)=><ApproleDet item={item} key={index}/>)                
            } */}

            <FlatList 
                keyExtractor={item=>item.gUID}
                data={data}
                renderItem={({item})=>(<ApproleDet item={item}/>)}
                />

        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        justifyContent:'center',
        alignItems:'center',
    }


});