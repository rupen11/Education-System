import { Schema, model } from 'mongoose';
import { schema_name } from './schemaName';
import { StudentSchemaEntity } from '../type';

const student_schema = new Schema<StudentSchemaEntity>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    collegeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Colleges'
    },
    universityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    courseId: {
        type: Schema.Types.ObjectId,
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
        type: [],
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

module.exports = model<StudentSchemaEntity>(schema_name.Student, student_schema);