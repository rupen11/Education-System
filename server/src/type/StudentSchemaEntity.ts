import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";
import { UserSchemaEntity } from "./UserSchemaEntity";

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

export type CreateStudentPayload = Omit<StudentSchemaEntity & UserSchemaEntity, 'userId' | 'courseId' | 'collegeId' | 'universityId'>

export type UpdateStudentPayload = Partial<CreateStudentPayload>;