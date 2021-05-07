import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";

const UserDetailsComponent = ({route,navigation}) => {
    let {params:{data}} = route;
  useEffect(() => {
      navigation.setOptions({title:data.name});
  },[])
    return <View>
        <Text>{data.username}-{data.email}</Text>
    </View>
};
 export default UserDetailsComponent;

let styles = StyleSheet.create({})
