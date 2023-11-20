import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Body = props =>{
    return(
        <View>
        <View style={{height: 54, backgroundColor: 'white', flexDirection:'row'}}>
        <View style={{paddingLeft:10,alignItem:'center',justifyContent:'center'}}>
          <Image source={require('../assets/image/profil.png')}style={{width:35,height:35,borderRadius:35 / 2,borderColor: 'red'}}></Image>
        </View >
        <View style={{marginTop:10,marginLeft:10}}>
          <Text style={{fontSize:14,paddingTop:7}}>ronal_doify</Text>
        </View>
        <View style={{marginTop:20,marginLeft:280}}>
          <Image source={require('../assets/image/tt.png')}></Image>
        </View>
        </View>

        <View>
          <Image source={require('../assets/image/kontent.jpg')}style={{height:350,width:420}}></Image>
        </View > 
        </View>
    )
}

export default Body;

const styles = StyleSheet.create({})
