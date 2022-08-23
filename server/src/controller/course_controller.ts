import { Request, Response } from "express";
import { FailureResponse, responseMessage, responseStatuscode, SuccessResponse } from "../helper";
import { courseSchema } from "../model";
import { CreateCoursePayload, UpdateCoursePayload } from "../type";
import { createData, deleteData, readData, readDataByIds, retriveData, updateData } from "./crud_controller";

export const createCourse = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const createCourse = await createData<CreateCoursePayload>(req.body, courseSchema, "courseCode");

        if (createCourse.success && createCourse.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.created, createCourse.data, res);

        if (createCourse.statusCode === responseStatuscode.badRequest) return FailureResponse(createCourse.statusCode, responseMessage.alreadyExists, res);

        return FailureResponse(createCourse.statusCode, responseMessage.creatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getCourse = async (req: Request, res: Response) => {
    try {
        const courseData = await readData(req.params.id, courseSchema);

        if (courseData.success && courseData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, courseData.data, res);

        return FailureResponse(courseData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const getCourses = async (req: Request, res: Response) => {
    try {
        const data = await readDataByIds(req.body, courseSchema);

        if (data.success && data.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, data.data, res);

        return FailureResponse(data.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const retriveCourse = async (req: Request, res: Response) => {
    try {
        const allcourseData = await retriveData(courseSchema);

        if (allcourseData.success && allcourseData.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.fetched, allcourseData.data, res);

        return FailureResponse(allcourseData.statusCode, responseMessage.fetchingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const updateCourse = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const updateCourse = await updateData<UpdateCoursePayload>(req.body, courseSchema, req.params.id);

        if (updateCourse.success && updateCourse.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.updated, updateCourse.data, res);

        return FailureResponse(updateCourse.statusCode, responseMessage.updatingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}


export const deleteCourse = async (req: Request, res: Response) => {
    try {
        // super admin must have enter password if password is correct then good to go otherwise not allowed
        const deleteCourse = await deleteData(req.params.id, courseSchema);

        if (deleteCourse.success && deleteCourse.statusCode === responseStatuscode.success) return SuccessResponse(responseMessage.deleted, deleteCourse.data, res);

        return FailureResponse(deleteCourse.statusCode, responseMessage.deletingFail, res);
    }
    catch (error) {
        return FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}