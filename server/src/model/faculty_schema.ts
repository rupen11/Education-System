import { Schema, model } from 'mongoose';
import { FacultySchemaEntity } from '../type';
import { schema_name } from './schemaName';

const facultySchema = new Schema<FacultySchemaEntity>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user_schema'
    },
    universityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'university_schema'
    },
    collegeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'college_schema'
    },
    qualifications: {
        type: [],
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    streams: {
        type: [],
        required: true,
    },
    courses: {
        type: [],
        required: true,
    },
    subjects: {
        type: [],
        required: true,
    },
    experience: {
        type: String,
        reuqired: true
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

export default model<FacultySchemaEntity>(schema_name.Faculty, facultySchema);