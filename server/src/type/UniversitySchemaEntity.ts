import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface UniversitySchemaEntity extends BaseSchemaEntity {
    adminId: Types.ObjectId;
    universityName: string
    universityState: string,
    email: string,
    website: string,
    colleges: [],
}