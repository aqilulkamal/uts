import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Story = props =>{
    return(
        <View style={{flexDirection:'row',paddingTop:15}}>
        <View style={{height:100, paddingLeft:10}}>
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/ceritaku.png')}style={{width:60,height:60}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>Cerita Anda</Text>  
          </View>
        

        <View style={{height:100,paddingLeft:3}}>
            <View style={{width:70, height:70,justifyContent:'center'}}>
              <Image source={require('../assets/image/story.jpg')}style={{ width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>rrq_xinn</Text>    
          </View>
        
        <View style={{height:100,paddingLeft:8}}>
       
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/story2.jpg')}style={{width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>donkey_yurino</Text>    
          </View>
        
        <View style={{height:100,paddingLeft:3}}>
        
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/story3.jpg')}style={{width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>ekooju</Text>    
          </View>

        <View style={{height:100,paddingLeft:8}}>
       
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/story4.jpg')}style={{width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text>ikhsan_lemon</Text>    
          </View>

          <View style={{height:100,paddingLeft:7}}>
       
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/story5.jpg')}style={{width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>brandonkent</Text>    
          </View>

          <View style={{height:100,paddingLeft:7}}>
       
            <View style={{width:70, height:70,alignItem:'center',justifyContent:'center'}}>
              <Image source={require('../assets/image/story6.jpg')}style={{width:70,height:70,borderRadius:70 / 2,borderColor: 'red'}}></Image>
            </View>
            <Text style={{textAlign:'center'}}>dwiwoii</Text>    
          </View>

        </View>
    )
}
export default Story;

const styles = StyleSheet.create({})
