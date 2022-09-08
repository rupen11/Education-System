import { NextFunction, Request, Response } from "express";
import { FailureResponse, responseStatuscode } from "../helper";
import { studentSchema } from "../model";
import { JwtPayload, verify } from 'jsonwebtoken';
import { config } from "../config";

interface CustomRequest extends Request {
    data: string | JwtPayload | null;
}

export const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        if (!token) FailureResponse(responseStatuscode.badRequest, "User not authenticated", res);

        const id = verify(token, config.jwtSecret as string);

        const data = await studentSchema.findOne({ _id: id });

        if (!data) FailureResponse(responseStatuscode.badRequest, "User not found", res);

        (req as CustomRequest).data = data;

        next();
    }
    catch (error) {
        FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}