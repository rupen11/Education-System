import { Date } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface UserSchemaEntity {
    role: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    dateOfBirth: string,
}

export type CreateUserPayload = Omit<UserSchemaEntity, "">

export type UpdateUserPayload = Partial<CreateUserPayload>;