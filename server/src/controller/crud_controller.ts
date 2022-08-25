import { BaseResponseHandler, responseStatuscode } from "../helper";
import { userSchema } from "../model";
import { BasicPayloadEntity } from "../type/BaseSchemaEntity";
import { checkByCourseCode, checkByEmail } from "../utils";
import { createUser, deleteUser, getUser, updateUser } from "./user_controller";

//Create Data
export async function createData<T extends BasicPayloadEntity>(payload: T, mongoModel: any, exists: string, checker: boolean, isUser: boolean): Promise<BaseResponseHandler<T>> {
    if (checker) {
        if (exists === "email") {
            if (isUser) {
                const matchData = await checkByEmail(payload.email, userSchema);

                if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
            }
            else {
                const matchData = await checkByEmail(payload.email, mongoModel);

                if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
            }
        }

        else if (exists === "courseCode") {
            const matchData = await checkByCourseCode(payload.courseCode, mongoModel);

            if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
        }
    }

    if (isUser) {
        const { role, name, email, password, phone, address, dateOfBirth, ...rest } = payload;
        const userObj = {
            role, name, email, password, phone, address, dateOfBirth
        };

        const userData = await createUser(userObj);

        if (!userData.success) return { data: null, success: userData.success, statusCode: userData.statusCode };

        rest.userId = userData.id;

        const createStudentData = new mongoModel(rest);

        let saveStudentData = await createStudentData.save();

        if (!saveStudentData) return { data: null, success: false, statusCode: responseStatuscode.internalServerError }

        const data = { studentData: saveStudentData, personalData: userData.data };

        return { data, success: true, statusCode: responseStatuscode.success };
    }
    else {
        const createData = new mongoModel(payload);

        const saveData = await createData.save();

        if (!saveData) return { data: null, success: false, statusCode: responseStatuscode.internalServerError };

        return { data: saveData, success: true, statusCode: responseStatuscode.success };
    }
}

//Read Data
export async function readData<T>(id: any, mongoModel: any, isUser: boolean): Promise<BaseResponseHandler<T>> {
    const getData = await mongoModel.findOne({ _id: id });

    if (!getData) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    if (isUser) {
        const getUserData = await getUser(getData.userId);

        if (!getUserData.success) return { data: null, success: false, statusCode: getUserData.statusCode };

        const data = { studentData: getData, personalData: getUserData.data };

        return { data, success: true, statusCode: responseStatuscode.success };
    }

    return { data: getData, success: true, statusCode: responseStatuscode.success };
}

//Read Data by Selected ids
export async function readDataByIds<T>(payload: T[], mongoModel: any): Promise<BaseResponseHandler<T>> {
    const alldata = await mongoModel.find({ _id: { $in: payload } });

    if (alldata.length === 0) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    return { data: alldata, success: true, statusCode: responseStatuscode.success };
}

//Retrive Data
export async function retriveData<T>(mongoModel: any): Promise<BaseResponseHandler<T>> {
    const getData = await mongoModel.find();

    if (getData.length === 0) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    return { data: getData, success: true, statusCode: responseStatuscode.success };
}

//Update Data
export async function updateData<T extends BasicPayloadEntity>(payload: T, mongoModel: any, id: any, isUser: boolean): Promise<BaseResponseHandler<T>> {
    if (isUser) {
        const { role, name, email, password, phone, address, dateOfBirth, ...rest } = payload;
        // if (role || name || address || dateOfBirth || email || password || phone) {
        const userObj = {
            role, name, email, password, phone, address, dateOfBirth
        };

        if (payload.email) {
            const matchData = await checkByEmail(payload.email, userSchema);

            if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
        }

        const updateUserData = await updateUser(userObj, id, mongoModel);

        if (!updateUserData.success) return { data: null, success: false, statusCode: updateUserData.statusCode };

        const updateData = await mongoModel.findOneAndUpdate({ _id: id }, rest, { new: true, runValidators: true });

        if (!updateData) return { data: null, success: false, statusCode: responseStatuscode.internalServerError };

        const data = { studentData: updateData, personalData: updateUserData.data };

        return { data, success: true, statusCode: responseStatuscode.success };
        // }
    }

    if (payload.email) {
        const matchData = await checkByEmail(payload.email, mongoModel);

        if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
    }

    const updateData = await mongoModel.findOneAndUpdate({ _id: id }, payload, { new: true, runValidators: true });

    if (!updateData) return { data: null, success: false, statusCode: responseStatuscode.internalServerError };

    return { data: updateData, success: true, statusCode: responseStatuscode.success };
}

//Delete Data
export async function deleteData<T>(id: any, mongoModel: any, isUser: boolean): Promise<BaseResponseHandler<T>> {
    const deleteData = await mongoModel.findOneAndDelete({ _id: id });

    if (!deleteData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };

    if (isUser) {
        const deleteUserData = await deleteUser(deleteData.userId);

        if (!deleteUserData.success) return { data: null, success: false, statusCode: deleteUserData.statusCode };

        const data = { studentData: deleteData, personalData: deleteUserData.data };

        return { data, success: true, statusCode: responseStatuscode.success };
    }

    return { data: deleteData, success: true, statusCode: responseStatuscode.success };
}