import mongoose, { Schema, model } from 'mongoose';

const FacultySchema = new Schema({
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
    collegeId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Colleges'
    },
    qualifications: {
        type: Array,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    streams: {
        type: Array,
        required: true,
    },
    courses: {
        type: Array,
        required: true,
    },
    subjects: {
        type: Array,
        required: true,
    },
    experience: {
        type: String,
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

module.exports = model("Faculties", FacultySchema);