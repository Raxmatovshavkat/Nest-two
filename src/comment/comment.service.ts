import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private readonly commentModel: Model<Comment>) { }
  async create(createCommentDto: CreateCommentDto) {
    return await new this.commentModel(createCommentDto).save();
  }

  async findAll() {
    return await this.commentModel.find();
  }

  async findOne(id: string) {
    return await this.commentModel.findById(id);
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.commentModel.findByIdAndUpdate(id,updateCommentDto);
  }

  async remove(id: string) {
    return await this.commentModel.findByIdAndDelete(id);
  }
}
