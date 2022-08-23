export interface BaseSchemaEntity {
    state: number;
    stateCode: number;
}

export interface CourseCodeEntity {
    courseCode?: number;
}

export interface BasicPayloadEntity extends CourseCodeEntity {
    email?: string;
}
