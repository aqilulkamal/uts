import React, {useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Button from '../component/button';
import Like from '../component/like';

const chatting = () => {
    const [jmllike,setJmllike] = useState(0);
    return(
        <View>
            <Button Klik={() => setJmllike(jmllike +1)}/>
            <Like quantity={jmllike}/>
        </View>
    )
}
export default chatting;
const styles = StyleSheet.create({})