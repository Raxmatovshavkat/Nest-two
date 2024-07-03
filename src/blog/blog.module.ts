import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './entities/blog.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Blog.name,schema:BlogSchema}])
  ],
  controllers: [BlogController],
  providers: [BlogService],
})

export class BlogModule {}
