import axios from 'axios'
import { IComments } from '../models/IComments';
import { IPosts } from '../models/IPosts';
export class PostsService {
    private static  URL:string = 'https://jsonplaceholder.typicode.com';

    public static getAllPosts(){
      let postUrl:string = `${this.URL}/posts`;
      return axios.get<IPosts[]>(postUrl).then(response => response.data);
    }

    public static getAllCommentsFromPost(postID:number){
        let commentsUrl:string = `${this.URL}/posts/${postID}/comments`;
        return axios.get<IComments[]>(commentsUrl);
    }
}