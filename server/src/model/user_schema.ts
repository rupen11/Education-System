import { Schema, model } from 'mongoose';
import { UserSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const user_schema = new Schema<UserSchemaEntity>({
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
        type: [],
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    }
});

module.exports = model<UserSchemaEntity>(schema_name.User, user_schema);