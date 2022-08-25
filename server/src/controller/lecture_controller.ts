import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse } from "../helper";
import { lectureSchema } from "../model";
import { CreateLecturePayload, UpdateLecturePayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createLecture = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createLecture = await createData<CreateLecturePayload>(req.body, lectureSchema, "", false, false);

        if (createLecture.success && createLecture.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.created, createLecture.data, res);

        if (createLecture.statusCode === responseStatuscode.badRequest) return FailureResponse(createLecture.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createLecture.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getLecture = async (req: Request, res: Response) => {
    try {
        const LectureData = await readData(req.params.id, lectureSchema, false);

        if (LectureData.success && LectureData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, LectureData.data, res);

        return FailureResponse(LectureData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getLectures = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, lectureSchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveLecture = async (req: Request, res: Response) => {
    try {
        const allLectureData = await retriveData(lectureSchema);

        if (allLectureData.success && allLectureData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allLectureData.data, res);

        return FailureResponse(allLectureData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateLecture = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateLecture = await updateData<UpdateLecturePayload>(req.body, lectureSchema, req.params.id, false);

        if (updateLecture.success && updateLecture.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.updated, updateLecture.data, res);

        return FailureResponse(updateLecture.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteLecture = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteLecture = await deleteData(req.params.id, lectureSchema, false);

        if (deleteLecture.success && deleteLecture.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteLecture.data, res);

        return FailureResponse(deleteLecture.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}