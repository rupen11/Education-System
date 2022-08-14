import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
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
        type: Array,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    }
});

module.exports = model("Users", UserSchema);