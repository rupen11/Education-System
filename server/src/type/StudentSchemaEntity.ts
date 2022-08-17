import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface StudentSchemaEntity extends BaseSchemaEntity {
    userId: Types.ObjectId;
    collegeId: Types.ObjectId;
    universityId: Types.ObjectId;
    courseId: Types.ObjectId;
    fatherName: string,
    motherName: string,
    enrollement: string,
    currentStream: string,
    currentSemester: number,
    previousDetails: []
}