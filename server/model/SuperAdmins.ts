import mongoose, { Schema, model } from 'mongoose';

const SuperAdminSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    universityId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    designation: {
        type: String,
        required: true,
    },
    state: {
        tpye: Number,
        required: true,
    },
    stateCode: {
        tpye: Number,
        required: true,
    }
});

module.exports = model("SuperAdmins", SuperAdminSchema);