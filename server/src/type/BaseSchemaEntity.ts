import { Date, Types } from "mongoose";

export interface BaseSchemaEntity {
    state: number;
    stateCode: number;
}

export interface CourseCodeEntity {
    courseCode?: number;
}

export interface LectureCodeEntity {
    lectureCode?: number;
}

export interface userPayloadEntiy {
    role?: number,
    name?: string,
    password?: string,
    phone?: string,
    address?: string,
    dateOfBirth?: string,
    userId?: Types.ObjectId,
}

export interface BasicPayloadEntity extends CourseCodeEntity, LectureCodeEntity, userPayloadEntiy {
    email?: string;
}
