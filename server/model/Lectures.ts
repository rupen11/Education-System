import mongoose, { Schema, model } from 'mongoose';

const LectureSchema = new Schema({
    collegeId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Colleges'
    },
    courseId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Courses'
    },
    facutlyId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Faculties'
    },
    subjectName: {
        type: String,
        required: true,
    },
    joinStudents: {
        type: Array,
        required: true,
    },
    enrollStudents: {
        type: Array,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    reschedule: {
        type: Boolean,
        reuqired: true
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

module.exports = model("Lectures", LectureSchema);