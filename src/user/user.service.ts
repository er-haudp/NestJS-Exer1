import { Body, Injectable, Req } from '@nestjs/common';
import { CreateUserType } from 'src/utils/user.interface';

@Injectable()
export class UserService {
  private sampleUsersInfo = [
    { id: 1, username: 'Duong Hau', age: 20, email: 'hau@hau.com' },
    { id: 2, username: 'Anh Huy', age: 21, email: 'huy@huy.com' },
    { id: 3, username: 'Bi ching', age: 20, email: 'minh@minh.com' },
  ];

  getAllUsers() {
    return this.sampleUsersInfo;
  }

  createUser(usersInfo: CreateUserType) {
    this.sampleUsersInfo.push(usersInfo);
    return usersInfo;
  }
}
