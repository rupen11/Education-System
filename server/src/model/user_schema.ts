import { Schema, model } from 'mongoose';
import { UserSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const userSchema = new Schema<UserSchemaEntity>({
    role: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    }
});

userSchema.virtual('id').get(function () {
    return this._id.toString();
});

export default model<UserSchemaEntity>(schema_name.User, userSchema);