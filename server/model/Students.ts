import mongoose, { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    collegeId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Colleges'
    },
    universityId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    courseId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Courses'
    },
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    enrollement: {
        type: String,
        required: true,
    },
    currentStream: {
        type: String,
        required: true,
    },
    currentSemester: {
        type: Number,
        required: true,
    },
    previousDetails: {
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

module.exports = model("Students", StudentSchema);