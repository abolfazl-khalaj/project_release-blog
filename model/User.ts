import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';


export interface IUser extends Document {
    photo: string;
    name: string;
    job: string
    email: string;
    password: string;
    aboutMy: string
    role: 'USER' | 'ADMIN' | 'MANAGER';
    token?: string;
    refreshToken?: string;

}

const SchemaUser = new Schema<IUser>({
    photo: {
        type: SchemaTypes.String,
        minLength: 3,
        required: true, 
    },
    name: {
        type: SchemaTypes.String, 
        required: true, 
    },
    job: {
        type: SchemaTypes.String,
        minLength: 3,
        required: true, 
    },
    email: {
        type: SchemaTypes.String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        required: false,
        unique: true
    },
    password: {
        type: SchemaTypes.String,
        min: 8,
        required: false
    },
    aboutMy: {
        type: SchemaTypes.String,
        required: true,
    },
    role: {
        type: SchemaTypes.String,
        default: 'USER',
        enum: ['USER', 'ADMIN', 'SUPPORT']
    },
    token: {
        type: SchemaTypes.String,
    },


}, { timestamps: true });

const UserModel = mongoose.models.User || mongoose.model<IUser>('User', SchemaUser);

export default UserModel;
