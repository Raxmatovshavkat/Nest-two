import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './entities/article.entity';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private readonly articleModel:Model<Article>){}
  async create(createArticleDto: CreateArticleDto) {
    return await new this.articleModel(createArticleDto).save();
  }

  async findAll() {
    return await this.articleModel.find()
  }

  async findOne(id: string) {
    return await this.articleModel.findById(id);
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return await this.articleModel.findByIdAndUpdate(id,updateArticleDto);
  }

  async remove(id: string) {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
