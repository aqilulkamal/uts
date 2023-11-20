import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Footer = props =>{
    return(
        <View style={{height: 54,  flexDirection:'row',marginTop:-5,marginLeft:10}}>
        <View style={{flex:1, alignIcon:'center', justifyContent:'center',marginLeft:25 }}>
          <View >
            <Image source={require('../assets/image/beranda.png')}style={{width:30,height:30}}></Image>
          </View>  
        </View>

        <View style={{flex:1, alignIcon:'center', justifyContent:'center',marginLeft:12}}>
        <View >
        <Image source={require('../assets/image/cari.png')}style={{width:28,height:28}}></Image>
        </View>
        </View>

        <View style={{flex:1, alignIcon:'center', justifyContent:'center',marginLeft:15}}>
        <View >
        <Image source={require('../assets/image/plus.png')}style={{width:28,height:28}}></Image>
        </View>
        </View>

        <View style={{flex:1, alignIcon:'center', justifyContent:'center',marginLeft:10}}>
        <View >
        <Image source={require('../assets/image/tas.png')}style={{width:28,height:28}}></Image>
        </View>
         </View>

        <View style={{flex:1, alignIcon:'center', justifyContent:'center',marginLeft:10}}>
        <View >
        <Image source={require('../assets/image/profil.png')}style={{width:30,height:30}}></Image>
        </View>
        </View>
     </View>
    )
}
export default Footer;
const styles = StyleSheet.create({})

