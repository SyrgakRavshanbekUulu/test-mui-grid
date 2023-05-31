import { client } from "service/axios";
import { AddPost, IPost } from "shared/types/post";

class Post {
  getAllPosts() {
    return client.get<IPost[]>('posts');
  }
  getPost(id: number | string) {
    return client.get<IPost>(`posts/${id}`);
  }
  addPost(body: AddPost) {
    return client.post<AddPost>(`posts`, body);
  }
  updatePost(id: number | string, body: IPost) {
    return client.put<IPost>(`posts/${id}`, body);
  }
  deletePost(id: number | string) {
    return client.delete<IPost>(`posts/${id}`);
  }
}

export default Post;