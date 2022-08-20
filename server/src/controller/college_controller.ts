import { Request, Response } from "express";
import { responseStatuscode, SuccessResponse, FailureResponse, responseMessage } from "../helper";
import { collegeSchema } from "../model"
import { CreateCollegePayload, UpdateCollegePayload } from "../type";
import { createData, retriveData, readData, updateData, deleteData, readDataByIds } from "./crud_controller";

export const createCollege = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createCollege = await createData<CreateCollegePayload>(req.body, collegeSchema);

        if (createCollege.success && createCollege.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.created, createCollege.data, res);

        if (createCollege.statusCode === responseStatuscode.badRequest) return FailureResponse(createCollege.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createCollege.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getCollege = async (req: Request, res: Response) => {
    try {
        const collegeData = await readData(req.params.id, collegeSchema);

        if (collegeData.success && collegeData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, collegeData.data, res);

        return FailureResponse(collegeData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getColleges = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, collegeSchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveColleges = async (req: Request, res: Response) => {
    try {
        const allCollegeData = await retriveData(collegeSchema);

        if (allCollegeData.success && allCollegeData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allCollegeData.data, res);

        return FailureResponse(allCollegeData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateCollege = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateCollege = await updateData<UpdateCollegePayload>(req.body, collegeSchema, req.params.id);

        if (updateCollege.success && updateCollege.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.updated, updateCollege.data, res);

        return FailureResponse(updateCollege.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteCollege = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteCollege = await deleteData(req.params.id, collegeSchema);

        if (deleteCollege.success && deleteCollege.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteCollege.data, res);

        return FailureResponse(deleteCollege.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}