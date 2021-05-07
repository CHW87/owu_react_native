import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

})
const getUsers = async () => {
    let {data} = await axiosInstance('/users');
    return data;
};

const getUser = async (id) => {
    let {data} = await axiosInstance(`/users/${id}`);
    return data
};

const getPosts = async () => {
    let {data} = await axiosInstance('/posts');
    return data;
};

const getPost = async (id) => {
    let {data} = await axiosInstance(`/posts/${id}`);
    return data
};

export {getUsers,getUser,getPosts,getPost}
