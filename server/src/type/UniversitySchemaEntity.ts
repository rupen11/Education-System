import { Types } from "mongoose";
import { DocumentId } from ".";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface UniversitySchemaEntity extends BaseSchemaEntity {
    // universityId: DocumentId;
    adminId: Types.ObjectId;
    universityName: string
    universityState: string,
    email: string,
    website: string,
    colleges: [],
}

export type CreateUniversityPayload = Omit<UniversitySchemaEntity, 'adminId' | 'state' | 'stateCode'>

export type UpdateUniversityPayload = Partial<CreateUniversityPayload>;