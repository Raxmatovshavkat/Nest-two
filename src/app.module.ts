import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';


@Module({
  imports: [AuthModule,BlogModule,CommentModule,
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-two'),
    ArticleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
