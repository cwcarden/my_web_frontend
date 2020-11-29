import axios from 'axios';

const apiBaseUrl = ''

export default class PostService {
    getAllPosts(){
        return axios.get(`${apiBaseUrl}/posts`);
    }
}