import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = props =>{
    return(
        <View style={{height: 54, backgroundColor: 'white', flexDirection:'row'}}>
        <View style={{ marginTop:10,backgroundColor:'white',marginLeft:8}}>
        <Image source={require('../assets/image/ig.png')}style={{width:115,height:35,marginLeft:5}}></Image>
            </View>
            <View style={{ marginTop:15,backgroundColor:'white',marginLeft:200}}>
              <Image source={require('../assets/image/love.png')}style={{width:30,height:30}}></Image>
            </View>
            <View style={{ marginTop:15,backgroundColor:'white',marginLeft:15}}>
              <Image source={require('../assets/image/kirim.png')}style={{width:30,height:30}}></Image>
            </View>
        </View>
    )
} 
export default Header;
const styles = StyleSheet.create({})
