import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async insert(user: User) {
    const newUser = await this.userModel.create(user);
    newUser.save();
    return newUser._id
  }

  public async getById(id: string) {
    const userToGet = await this.userModel.findOne({ _id: id });
    return userToGet;
  }

  public async removeOne(id: string) {
    const result = await this.userModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}
