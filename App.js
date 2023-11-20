import React, {Component, useState } from 'react';
import {StyleSheet, Text, View,Image, ScrollView, ProgressViewIOSComponent, TextPropTypes} from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Body from '../uts/pages/body';
import Footer from '../uts/pages/footer';
import Header0 from './pages/Header0';
import Story from '../uts/pages/story';
import Chatting from '../uts/chatting/index';

const App = () =>{
   const [jmllike, setJmllike] = useState(0)
     return (
       
<View style={{flex: 1}}>
       <Header0/>
     <ScrollView>
       <ScrollView horizontal>
        <Story/>
       </ScrollView>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
       <Body/>
       <Chatting/>
     </ScrollView>
       <Footer/>
       
    </View>

       
       
     );
   }
 export default App;
 
 // skip this line if using Create React Native App
 const styles = StyleSheet.create({
 
 });
