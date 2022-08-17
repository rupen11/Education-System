import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface CollegeSchemaEntity extends BaseSchemaEntity {
    adminId: Types.ObjectId;
    universityId: Types.ObjectId;
    collegeName: string;
    studentsCapacity: number;
    currentStudents: number;
    courses: [];
    city: string;
    email: string;
    website: string;
}