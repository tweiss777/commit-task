import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    id?: string;
    @Prop()
    name: string;
    @Prop()
    phone: string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
