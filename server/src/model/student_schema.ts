import { Schema, model } from 'mongoose';
import { schema_name } from './schemaName';
import { StudentSchemaEntity } from '../type';

const studentSchema = new Schema<StudentSchemaEntity>({
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
        type: Number,
        required: true,
    },
    stateCode: {
        type: Number,
        required: true,
    }
});

export default model<StudentSchemaEntity>(schema_name.Student, studentSchema);