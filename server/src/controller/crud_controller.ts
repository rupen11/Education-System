import { BaseResponseHandler, responseStatuscode } from "../helper";
import { BasicPayloadEntity } from "../type/BaseSchemaEntity";
import { checkByCourseCode, checkByEmail } from "../utils";

//Create Data
export async function createData<T extends BasicPayloadEntity>(payload: T, mongoModel: any, exists: string): Promise<BaseResponseHandler<T>> {
    if (exists === "email") {
        const matchData = await checkByEmail(payload.email, mongoModel);

        if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
    }

    else if (exists === "coursename") {
        const matchData = await checkByCourseCode(payload.courseCode, mongoModel);

        if (!matchData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };
    }

    const createData = new mongoModel(payload);

    const saveData = await createData.save();

    if (!saveData) return { data: null, success: false, statusCode: responseStatuscode.internalServerError };

    return { data: saveData, success: true, statusCode: responseStatuscode.success };
}

//Read Data
export async function readData<T>(id: any, mongoModel: any): Promise<BaseResponseHandler<T>> {
    const getData = await mongoModel.findOne({ _id: id });

    if (!getData) return { data: null, success: false, statusCode: responseStatuscode.notFound };

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
export async function updateData<T>(payload: T, mongoModel: any, id: any): Promise<BaseResponseHandler<T>> {
    const updateData = await mongoModel.findOneAndUpdate({ _id: id }, payload, { new: true });

    if (!updateData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };

    return { data: updateData, success: true, statusCode: responseStatuscode.success };
}

//Delete Data
export async function deleteData<T>(id: any, mongoModel: any): Promise<BaseResponseHandler<T>> {
    const deleteData = await mongoModel.findOneAndDelete({ _id: id });

    if (!deleteData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };

    return { data: deleteData, success: true, statusCode: responseStatuscode.success };
}