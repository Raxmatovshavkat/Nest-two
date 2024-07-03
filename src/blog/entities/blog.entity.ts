import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/user/schemas/user.schema';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {   
    @Prop()
    title: String;
    @Prop()
    description: String;
    @Prop()
    body: String;
    @Prop()
    author: String;
    @Prop()
    date_posted: Date;
    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    authorId:String
}

export const BlogSchema = SchemaFactory.createForClass(Blog);