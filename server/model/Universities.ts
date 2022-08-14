import mongoose, { Schema, model } from 'mongoose';

const UniversitySchema = new Schema({
    adminId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'SuperAdmins'
    },
    universityName: {
        type: String,
        required: true,
    },
    state_: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    colleges: {
        type: Array,
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

module.exports = model("Universities", UniversitySchema);