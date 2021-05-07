import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import UsersComponent from "./src/components/UsersComponent";
import PostsComponent from "./src/components/PostsComponent";
import UserDetailsComponent from "./src/components/UserDetailsComponent";

let StackNavigator = createStackNavigator()
export default function App() {

    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={UsersComponent}/>
                <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetailsComponent}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
