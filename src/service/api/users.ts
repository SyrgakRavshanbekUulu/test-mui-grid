import { client } from 'service/axios';
import { IUser } from 'shared/types/users';

class Users {
  getAllUsers() {
    return client.get<IUser[]>('users')
  }
  getUser(id: number | string) {
    return client.get<IUser>(`users/${id}`)
  }
}

export default Users;