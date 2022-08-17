import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

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