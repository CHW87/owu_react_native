import React, {useEffect, useState} from "react";
import {View,FlatList,StyleSheet,Text,Button,TouchableOpacity} from "react-native";
import {getPosts} from "../api/API";
import PostComponent from "./PostComponent";

const PostsComponent = (props) => {
    const {navigation} = props;
    let [posts,setPosts] = useState([]);
    async function fetchData() {
        let posts = await getPosts();
        setPosts([...posts])
    }
    useEffect(() => {
        fetchData();
        return () => {
            console.log('hello');
        }
        
        },[])
    return <View>
        <FlatList data={posts} 
                  renderItem={({item}) =><PostComponent nav = {navigation} item ={item}/>} 
                  keyExtractor={item => '' + item.id}/>
    </View>
};
 export default PostsComponent;

let styles = StyleSheet.create({})

