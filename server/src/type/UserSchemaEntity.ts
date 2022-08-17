import { Date } from "mongoose";
import { BaseSchemaEntity } from "./BaseSchemaEntity";

export interface UserSchemaEntity extends BaseSchemaEntity {
    role: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: [],
    dateOfBirth: Date,
}