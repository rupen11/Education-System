import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface CollegeSchemaEntity extends BaseSchemaEntity {
    adminId: Types.ObjectId;
    universityId: Types.ObjectId;
    name: string;
    studentsCapacity: number;
    currentStudents: number;
    courses: [];
    city: string;
    email: string;
    website: string;
}

export type CreateCollegePayload = Omit<CollegeSchemaEntity, 'adminId' | 'universityId'>;

export type UpdateCollegePayload = Partial<CreateCollegePayload>;