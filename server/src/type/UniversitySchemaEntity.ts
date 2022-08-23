import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface UniversitySchemaEntity extends BaseSchemaEntity {
    // universityId: DocumentId;
    adminId: Types.ObjectId;
    name: string
    universityState: string,
    email: string,
    website: string,
    colleges: [],
}

export type CreateUniversityPayload = Omit<UniversitySchemaEntity, 'adminId'>

export type UpdateUniversityPayload = Partial<CreateUniversityPayload>;