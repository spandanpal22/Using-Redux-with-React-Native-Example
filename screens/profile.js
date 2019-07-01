import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'About Me',
    };

    
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{marginTop:30,}}>
        <Text>This is Me hii.</Text>
        </View>
      );
    }
  }