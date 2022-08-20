import { Response } from "express";
import { responseStatuscode } from "./response_statuscode";

export interface BaseResponseHandler<T> {
    data: T | null;
    success: boolean;
    statusCode: number;
}

export const SuccessResponse = (message: string, data: any, res: Response) => {
    res.status(responseStatuscode.success).json({
        success: true,
        message,
        data
    })
}

export const FailureResponse = (statusCode: number, message: string, res: Response) => {
    res.status(statusCode).json({
        success: false,
        message,
    })
}
