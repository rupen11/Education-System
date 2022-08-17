import { Schema, model } from 'mongoose';
import { CollegeSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const college_schema = new Schema<CollegeSchemaEntity>({
    adminId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'super_admin_schema'
    },
    universityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'university_schema'
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
        type: [],
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

module.exports = model<CollegeSchemaEntity>(schema_name.College, college_schema);