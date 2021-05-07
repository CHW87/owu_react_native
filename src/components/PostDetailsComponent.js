import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";

const PostDetailsComponent = ({route,navigation}) => {
    let {params:{data}} = route;
  useEffect(() => {
      navigation.setOptions({title:data.title});
  },[])
    return <View>
        <Text>{data.userId}</Text>
        <Text>{data.body}</Text>
    </View>
};
 export default PostDetailsComponent;

let styles = StyleSheet.create({})
