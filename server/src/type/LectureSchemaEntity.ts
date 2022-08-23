import { Date, Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface LectureSchemaEntity extends BaseSchemaEntity {
    collegeId: Types.ObjectId;
    courseId: Types.ObjectId;
    facultyId: Types.ObjectId;
    subjectName: string,
    joinStudents: [],
    enrollStudents: [],
    startTime: Date,
    endTime: Date,
    reschedule: boolean,
    lectureCode: number
}

export type CreateLecturePayload = Omit<LectureSchemaEntity, 'collegeId' | 'courseId' | 'facultyId'>

export type UpdateLecturePayload = Partial<CreateLecturePayload>;