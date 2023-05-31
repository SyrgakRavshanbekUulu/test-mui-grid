import Photos from './photo';
import Post from './post';
import Users from './users';

class ApiService {
  public users = new Users();
  public posts = new Post();
  public photos = new Photos();
}

export default new ApiService();