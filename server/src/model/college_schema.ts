import { Schema, model } from 'mongoose';
import { CollegeSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const collegeSchema = new Schema<CollegeSchemaEntity>({
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
    name: {
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
        unique: true
    },
    website: {
        type: String,
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
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

collegeSchema.virtual('id').get(function () {
    return this._id.toString();
});

export default model<CollegeSchemaEntity>(schema_name.College, collegeSchema);