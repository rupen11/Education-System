import mongoose, { Schema, model } from 'mongoose';

const CollegeSchema = new Schema({
    adminId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'SuperAdmins'
    },
    universityId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    collegeName: {
        type: String,
        required: true,
    },
    studentsCapacity: {
        type: Number,
        required: true,
    },
    currentStudents: {
        type: Number,
        required: true,
    },
    courses: {
        type: Array,
        required: true,
    },
    city: {
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
    state: {
        tpye: Number,
        required: true,
    },
    stateCode: {
        tpye: Number,
        required: true,
    }
});

module.exports = model("Colleges", CollegeSchema);