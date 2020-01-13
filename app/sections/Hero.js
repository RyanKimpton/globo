import React from 'react';
import {StyleSheet, Image} from 'react-native';

export class Hero extends React.Component {
    render(){
        return(
            <Image style = {styles.heroImage} source = {require('./img/Shard.jpg')}/>
        )
    }
}

const styles = StyleSheet.create({
    heroImage: {
        flex: 9,
        width: '100%',
        height: '100%'
    }
});