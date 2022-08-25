import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse } from "../helper";
import { superAdminSchema } from "../model";
import { CreateUserPayload, UpdateUserPayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createSuperAdmin = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createSuperAdmin = await createData<CreateUserPayload>(req.body, superAdminSchema, "email", true, true);

        if (createSuperAdmin.success && createSuperAdmin.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.created, createSuperAdmin.data, res);

        if (createSuperAdmin.statusCode === responseStatuscode.badRequest) return FailureResponse(createSuperAdmin.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createSuperAdmin.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getSuperAdmin = async (req: Request, res: Response) => {
    try {
        const SuperAdminData = await readData(req.params.id, superAdminSchema, true);

        if (SuperAdminData.success && SuperAdminData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, SuperAdminData.data, res);

        return FailureResponse(SuperAdminData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getSuperAdmins = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, superAdminSchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveSuperAdmin = async (req: Request, res: Response) => {
    try {
        const allSuperAdminData = await retriveData(superAdminSchema);

        if (allSuperAdminData.success && allSuperAdminData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allSuperAdminData.data, res);

        return FailureResponse(allSuperAdminData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateSuperAdmin = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateSuperAdmin = await updateData<UpdateUserPayload>(req.body, superAdminSchema, req.params.id, true);

        if (updateSuperAdmin.success) return SuccessResponse(responseMessage.updated, updateSuperAdmin.data, res);

        if (updateSuperAdmin.statusCode === responseStatuscode.badRequest) return FailureResponse(updateSuperAdmin.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(updateSuperAdmin.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteSuperAdmin = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteSuperAdmin = await deleteData(req.params.id, superAdminSchema, true);

        if (deleteSuperAdmin.success && deleteSuperAdmin.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteSuperAdmin.data, res);

        return FailureResponse(deleteSuperAdmin.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}