import { Schema, model } from 'mongoose';
import { UniversitySchemaEntity } from '../type';
import { schema_name } from './schemaName';

const universitySchema = new Schema<UniversitySchemaEntity>({
    adminId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'super_admin_schema'
    },
    universityName: {
        type: String,
        required: true,
    },
    universityState: {
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
    colleges: {
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

export default model<UniversitySchemaEntity>(schema_name.University, universitySchema);