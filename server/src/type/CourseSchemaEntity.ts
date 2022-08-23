import { Types } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface CourseSchemaEntity extends BaseSchemaEntity {
    adminId: Types.ObjectId;
    universityId: Types.ObjectId;
    courseName: string;
    courseCode: number;
    streams: [];
}

export type CreateCoursePayload = Omit<CourseSchemaEntity, 'adminId' | 'universityId'>;

export type UpdateCoursePayload = Partial<CreateCoursePayload>;