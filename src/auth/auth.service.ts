import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from "src/auth/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

  async register(createAuthDto: CreateAuthDto) {
    return  await  this.userService.create({...createAuthDto})
   
  }

  async login(createAuthDto: CreateAuthDto) {
    return await this.userService.login({...createAuthDto})
  }

  async getMe(id: string) {
    return await this.userService.findOne(id)
  }
}