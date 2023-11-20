import React from 'react';
import {Flatform, StyleSheet, Text, View,Image,style} from 'react-native';

const Like = (props) =>{
    return (
        <View>
            <Text style={{fontWeight:'bold',marginTop:5,marginLeft:8}}>{props.quantity} suka</Text>
            <Text style={{fontWeight:'bold',marginLeft:8}}>ronal_doify </Text>
            <Text style={{marginLeft:8,marginBottom:10}}>The best graphic design of the year  </Text>
        </View>
    )
       
    
}
export default Like;
const styles = StyleSheet.create({})
