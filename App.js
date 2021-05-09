import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import UsersComponent from "./src/components/UsersComponent";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostDrawer from "./src/components/PostDrawer";
import CameraComponent from "./src/components/CameraComponent";

let BottomTabNavigator = createBottomTabNavigator()

export default function App() {

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator 
                tabBarOptions={{tabStyle:{justifyContent:'center',alignItems:'center',fontsize:'25'}}}>
                <BottomTabNavigator.Screen name = {'users'} component = {UsersComponent}/>
                <BottomTabNavigator.Screen name = {'posts'} component = {PostDrawer}/>
                <BottomTabNavigator.Screen name = {'camera'} component = {CameraComponent} options={{unmountOnBlur:true}}/>
            </BottomTabNavigator.Navigator>
            
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
