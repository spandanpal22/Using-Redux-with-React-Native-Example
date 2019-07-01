import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



import {createStackNavigator, createAppContainer} from 'react-navigation';


class AnswersScreen extends React.Component{
  static navigationOptions = {
      title: 'Answers',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <Text style={{textAlign:"center"}}>This is answer screen</Text>
          <View>
        <Button
          title="Go to Questions"
          onPress={() => navigate('Questions')}
        />
        </View>
        </View>
      );
    }
}





export default AnswersScreen;