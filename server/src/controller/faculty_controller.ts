import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse, SuccessWithCookie } from "../helper";
import { facultySchema } from "../model";
import { CreateUserPayload, UpdateUserPayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createFaculty = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createFaculty = await createData<CreateUserPayload>(req.body, facultySchema, "email", true, true);

        if (createFaculty.success && createFaculty.statusCode === responseStatuscode.success) return SuccessWithCookie(responseMessage.created, createFaculty.data, createFaculty.token, res);

        if (createFaculty.statusCode === responseStatuscode.badRequest) return FailureResponse(createFaculty.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createFaculty.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getFaculty = async (req: Request, res: Response) => {
    try {
        const FacultyData = await readData(req.params.id, facultySchema, true);

        if (FacultyData.success && FacultyData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, FacultyData.data, res);

        return FailureResponse(FacultyData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getFaculties = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, facultySchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveFaculty = async (req: Request, res: Response) => {
    try {
        const allFacultyData = await retriveData(facultySchema);

        if (allFacultyData.success && allFacultyData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allFacultyData.data, res);

        return FailureResponse(allFacultyData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateFaculty = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateFaculty = await updateData<UpdateUserPayload>(req.body, facultySchema, req.params.id, true);

        if (updateFaculty.success) return SuccessResponse(responseMessage.updated, updateFaculty.data, res);

        if (updateFaculty.statusCode === responseStatuscode.badRequest) return FailureResponse(updateFaculty.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(updateFaculty.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteFaculty = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteFaculty = await deleteData(req.params.id, facultySchema, true);

        if (deleteFaculty.success && deleteFaculty.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteFaculty.data, res);

        return FailureResponse(deleteFaculty.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}