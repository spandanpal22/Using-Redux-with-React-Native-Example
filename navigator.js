import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import QuestionsScreen from "./screens/question";
import AnswersScreen from './screens/answer'
import ProfileScreen from "./screens/profile";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  SafeAreaView,
  DrawerItems,
} from "react-navigation";4

import { Header, Card, Icon, SearchBar, Button, Divider,  } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Emoji from 'react-native-emoji';


class SideMenu extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ImageIN}>
                    <Image source={require("./assets/snack-icon.png")} style={{width:200,height:200}}  />
                </View>
                
                <View style={styles.innerContainer}>
                <ScrollView>
                    <SafeAreaView>
                    <DrawerItems {...this.props} />
                
                    </SafeAreaView>
                    
                    </ScrollView>
                    </View>
                    <View style={{paddingTop:10,backgroundColor:"#12d3cf",}}>
                        <Text 
                        style={{
                            fontWeight:"bold",
                            textAlign:"center",
                            marginBottom:20,
                            
                        }}>
                            Made by Spandan Pal <Emoji name="smiley" style={{fontSize: 20}} />
                        </Text>
                    </View>
            </View>
        );
    }
}

export const Navigator = createDrawerNavigator(
  {
    Questions: createStackNavigator({
        Questions: { screen: QuestionsScreen,
          navigationOptions: () => ({
            title: 'Questions',
            //headerBackTitle: null
          }),  },
        Answers: { screen: AnswersScreen }
      },
      
      ),
    Profile: { screen: ProfileScreen }
  },
  
  {  drawerBackgroundColor: "#b0f4e6",
    contentComponent: SideMenu,
    contentOptions: {
        activeTintColor: '#3c8f36',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        activeBackgroundColor:"#45ff38",
    },
    
}
);

const Nav=createAppContainer(Navigator)

export default Nav;

const styles=StyleSheet.create({
    item:{
        color:"black",
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        fontWeight:"bold",
    },
    container:{
        flex:1,
        marginTop:50,
    },
    innerContainer:{
        flex:1,
    },
    ImageIN:{
        flex:0.5,
        marginLeft:35,
        width:80,
        height:80,
        marginBottom:30,
        marginTop:10,
    }
})