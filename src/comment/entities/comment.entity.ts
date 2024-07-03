import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/user/schemas/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop()
    text: String;
    @Prop()
    description: String;
    @Prop()
    author: String;
    @Prop()
    date_posted: Date;
    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    authorId: User
}

export const CommentSchema = SchemaFactory.createForClass(Comment);