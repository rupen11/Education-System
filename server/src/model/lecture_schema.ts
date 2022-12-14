import { Schema, model } from 'mongoose';
import { LectureSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const lectureSchema = new Schema<LectureSchemaEntity>({
    collegeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'college_schema'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'course_schema'
    },
    facultyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'faculty_schema'
    },
    name: {
        type: String,
        required: true,
    },
    joinStudents: {
        type: Number,
        required: true,
    },
    enrollStudents: {
        type: Number,
        required: true,
    },
    // startTime: {
    //     type: Date,
    //     required: true,
    // },
    // endTime: {
    //     type: Date,
    //     required: true,
    // },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    reschedule: {
        type: Boolean,
        reuqired: true
    },
    lectureCode: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        required: true,
    },
    stateCode: {
        type: Number,
        required: true,
    }
});

export default model<LectureSchemaEntity>(schema_name.Lecture, lectureSchema);