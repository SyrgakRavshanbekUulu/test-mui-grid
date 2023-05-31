import { client } from 'service/axios';
import { IPhoto } from 'shared/types/users';

class Photos {
  getPhotos() {
    return client.get<IPhoto[]>('photos?_limit=10')
  }
}

export default Photos;