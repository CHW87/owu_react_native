import React from "react";
import {StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";

const PostsComponent = (props) => {
    const {item,nav} = props
    return <View style={[styles.box]}>
        <Text> title: {item.id}</Text>
        <Text> body: {item.title}</Text>
        <Button title={'post details'} onPress={() => {
            nav.navigate('PostDetails',{data : item})
        }}></Button>
    </View>
};
 export default PostsComponent;

let styles = StyleSheet.create({
    box: {
        height:100,
        backgroundColor: 'silver',
        marginBottom:3
    }
})
