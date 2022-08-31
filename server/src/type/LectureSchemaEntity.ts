import { Date, Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface LectureSchemaEntity extends BaseSchemaEntity {
    collegeId: Types.ObjectId;
    courseId: Types.ObjectId;
    facultyId: Types.ObjectId;
    name: string,
    joinStudents: number,
    enrollStudents: number,
    // startTime: Date,
    // endTime: Date,
    startTime: string,
    endTime: string,
    reschedule: boolean,
    lectureCode: number
}

export type CreateLecturePayload = Omit<LectureSchemaEntity, 'collegeId' | 'courseId' | 'facultyId'>

export type UpdateLecturePayload = Partial<CreateLecturePayload>;