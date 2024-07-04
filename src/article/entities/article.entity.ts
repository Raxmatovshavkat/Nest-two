import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    authorId: string
}

export const ArticleSchema = SchemaFactory.createForClass(Article);