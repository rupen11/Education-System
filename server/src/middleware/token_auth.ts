import { NextFunction, Request, Response } from "express";
import { FailureResponse, responseStatuscode } from "../helper";
import { userSchema } from "../model";
import { verify } from 'jsonwebtoken';
import { config } from "../config";

export const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.get('token');

        if (!token) FailureResponse(responseStatuscode.badRequest, "User not authenticated", res);

        const id = verify(config.jwtSecret as string, token);

        const data = await userSchema.findOne({ _id: id });

        if (!data) FailureResponse(responseStatuscode.badRequest, "User not found", res);

        // req.data = data;

        next();
    }
    catch (error) {
        FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}