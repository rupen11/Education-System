import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse, SuccessWithCookie } from "../helper";
import { studentSchema } from "../model";
import { CreateUserPayload, UpdateUserPayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createStudent = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createStudent = await createData<CreateUserPayload>(req.body, studentSchema, "email", true, true);

        if (createStudent.success && createStudent.statusCode === responseStatuscode.success) return SuccessWithCookie(responseMessage.created, createStudent.data, createStudent.token, res);

        if (createStudent.statusCode === responseStatuscode.badRequest) return FailureResponse(createStudent.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createStudent.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getStudent = async (req: Request, res: Response) => {
    try {
        const StudentData = await readData(req.params.id, studentSchema, true);

        if (StudentData.success && StudentData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, StudentData.data, res);

        return FailureResponse(StudentData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getStudents = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, studentSchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveStudent = async (req: Request, res: Response) => {
    try {
        const allStudentData = await retriveData(studentSchema);

        if (allStudentData.success && allStudentData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allStudentData.data, res);

        return FailureResponse(allStudentData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateStudent = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateStudent = await updateData<UpdateUserPayload>(req.body, studentSchema, req.params.id, true);

        if (updateStudent.success) return SuccessResponse(responseMessage.updated, updateStudent.data, res);

        if (updateStudent.statusCode === responseStatuscode.badRequest) return FailureResponse(updateStudent.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(updateStudent.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteStudent = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteStudent = await deleteData(req.params.id, studentSchema, true);

        if (deleteStudent.success && deleteStudent.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteStudent.data, res);

        return FailureResponse(deleteStudent.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}