import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(createUserDto)
    await newUser.save()
    return newUser
  }

  async login(createLogin:Partial<CreateUserDto>):Promise<User> {
    return await this.userModel.create(createLogin);
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

}