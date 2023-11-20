import React from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';

const Button = (props) => {
    return(
 <View style={{height: 54, backgroundColor: 'white', flexDirection:'row',marginTop:5}}>
        <View style={{backgroundColor:'white',flex:1, alignIcon:'center', justifyContent:'center',marginLeft:10 }}>
        <View > 
          <TouchableOpacity onPress={props.Klik}>   
          <Image source={require('../assets/image/love.png')}style={{width:30,height:30}}></Image>
          </TouchableOpacity>
        </View>  
      </View>
      <View style={{height: 50, backgroundColor: 'white', flexDirection:'row',marginTop:5}}>

<View style={{backgroundColor:'white',flex:1, alignIcon:'center', justifyContent:'center',marginLeft:-370,marginTop:-5}}>
<View >
<Image source={require('../assets/image/coment.png')}style={{width:25,height:25}}></Image>
</View>
</View>

<View style={{backgroundColor:'white',flex:1, alignIcon:'center', justifyContent:'center',marginLeft:-240,marginTop:-5}}>
<View >
<Image source={require('../assets/image/kirim.png')}style={{width:30,height:30}}></Image>
</View>
</View>

<View style={{marginTop:8,paddingRight:50}}>
<Image source={require('../assets/image/share.png')}style={{width:30,height:30}}></Image>
</View>
</View>

</View>  
      
    )
}
export default Button;
const styles = StyleSheet.create({})
