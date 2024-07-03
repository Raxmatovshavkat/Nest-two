import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private readonly blogModel:Model<Blog>){}
  async create(createBlogDto: CreateBlogDto) {
    return await new this.blogModel(createBlogDto).save();
  }

 async findAll() {
    return await this.blogModel.find();
  }

  async findOne(id: string) {
    return await this.blogModel.findById(id);
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    return await this.blogModel.findByIdAndUpdate(id,updateBlogDto);
  }

 async remove(id: string) {
    return await this.blogModel.findByIdAndDelete(id);
  }
}
