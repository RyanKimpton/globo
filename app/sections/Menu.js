import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';

export class Menu extends React.Component {
    onPress = () => {
        Alert.alert('You pressed the button!');
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            LESSONS 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>

                
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            BLOG 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyles} onPress = {()=>this.props.navigate('ContactRT')}>
                        <Text style = {styles.buttonText}>
                            CONTACT
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.buttonRow}>
                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            QUIZ 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            ABOUT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        flex: 2,
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#000000',
        fontSize: 18
    }

})

