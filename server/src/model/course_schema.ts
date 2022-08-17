import { Schema, model } from 'mongoose';
import { CourseSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const course_schema = new Schema<CourseSchemaEntity>({
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
        tpye: Number,
        required: true,
    },
    stateCode: {
        tpye: Number,
        required: true,
    }
});

module.exports = model<CourseSchemaEntity>(schema_name.Course, course_schema);