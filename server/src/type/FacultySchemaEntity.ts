import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";
import { UserSchemaEntity } from "./UserSchemaEntity";

export interface FacultySchemaEntity extends BaseSchemaEntity {
    userId: Types.ObjectId;
    universityId: Types.ObjectId;
    collegeId: Types.ObjectId;
    qualifications: [],
    permanentAddress: string,
    streams: [],
    courses: [],
    subjects: [],
    experience: string,
}

export type CreateFacultyPayload = Omit<FacultySchemaEntity & UserSchemaEntity, "">

export type UpdateFacultyPayload = Partial<CreateFacultyPayload>;