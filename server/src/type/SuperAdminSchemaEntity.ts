import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";
import { UserSchemaEntity } from "./UserSchemaEntity";

export interface SuperAdminSchemaEntity extends BaseSchemaEntity {
    userId: Types.ObjectId;
    universityId: Types.ObjectId;
    designation: string
}

export type CreateSuperAdminPayload = Omit<SuperAdminSchemaEntity & UserSchemaEntity, 'userId' | 'universityId'>

export type UpdateSuperAdminPayload = Partial<CreateSuperAdminPayload>;