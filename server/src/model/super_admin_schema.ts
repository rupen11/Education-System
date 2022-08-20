import { Schema, model } from 'mongoose';
import { SuperAdminSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const superAdminSchema = new Schema<SuperAdminSchemaEntity>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    universityId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Universities'
    },
    designation: {
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
});

export default model<SuperAdminSchemaEntity>(schema_name.Superadmin, superAdminSchema);