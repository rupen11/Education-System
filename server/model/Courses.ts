import mongoose, { Schema, model } from 'mongoose';

const CoursesSchema = new Schema({
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
    courseName: {
        type: String,
        required: true,
    },
    streams: {
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

module.exports = model("Courses", CoursesSchema);