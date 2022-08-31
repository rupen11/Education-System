import { Response } from "express";
import { responseStatuscode } from "./response_statuscode";

export interface BaseResponseHandler<T> {
    data: T | null | object;
    success: boolean;
    statusCode: number;
    token?: string;
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

export const SuccessWithCookie = (message: string, data: any, token: any, res: Response) => {
    const options = {
        httpOnly: true,
        expireIn: '10h'
    }
    res.status(responseStatuscode.success)
        .cookie("token", token, options)
        .json({
            success: true,
            message,
            data,
            token
        })
}
