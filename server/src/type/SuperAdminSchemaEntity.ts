import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface SuperAdminSchemaEntity extends BaseSchemaEntity {
    userId: Types.ObjectId;
    universityId: Types.ObjectId;
    designation: string
}