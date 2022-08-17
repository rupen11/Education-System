import { Schema, model } from 'mongoose';
import { SuperAdminSchemaEntity } from '../type';
import { schema_name } from './schemaName';

const super_admin_schema = new Schema<SuperAdminSchemaEntity>({
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
        tpye: Number,
        required: true,
    },
    stateCode: {
        tpye: Number,
        required: true,
    }
});

module.exports = model<SuperAdminSchemaEntity>(schema_name.Superadmin, super_admin_schema);