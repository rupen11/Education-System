import { Schema, model } from 'mongoose';
import { CourseSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const courseSchema = new Schema<CourseSchemaEntity>({
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
    courseName: {
        type: String,
        required: true,
    },
    streams: {
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

export default model<CourseSchemaEntity>(schema_name.Course, courseSchema);