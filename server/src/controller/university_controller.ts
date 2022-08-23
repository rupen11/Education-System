import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse } from "../helper";
import { universitySchema } from "../model";
import { CreateUniversityPayload, UpdateUniversityPayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createUniversity = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createUniversity = await createData<CreateUniversityPayload>(req.body, universitySchema, "email", true);

        if (createUniversity.success && createUniversity.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.created, createUniversity.data, res);

        if (createUniversity.statusCode === responseStatuscode.badRequest) return FailureResponse(createUniversity.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createUniversity.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getUniversity = async (req: Request, res: Response) => {
    try {
        const UniversityData = await readData(req.params.id, universitySchema);

        if (UniversityData.success && UniversityData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, UniversityData.data, res);

        return FailureResponse(UniversityData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getUniversities = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, universitySchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveUniversity = async (req: Request, res: Response) => {
    try {
        const allUniversityData = await retriveData(universitySchema);

        if (allUniversityData.success && allUniversityData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allUniversityData.data, res);

        return FailureResponse(allUniversityData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateUniversity = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateUniversity = await updateData<UpdateUniversityPayload>(req.body, universitySchema, req.params.id);

        if (updateUniversity.success && updateUniversity.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.updated, updateUniversity.data, res);

        return FailureResponse(updateUniversity.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteUniversity = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteUniversity = await deleteData(req.params.id, universitySchema);

        if (deleteUniversity.success && deleteUniversity.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteUniversity.data, res);

        return FailureResponse(deleteUniversity.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}