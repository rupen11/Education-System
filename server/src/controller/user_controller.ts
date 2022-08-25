import { responseStatuscode } from "../helper";
import { userSchema } from "../model";

export const createUser = async (data: any) => {
    const createUser = new userSchema(data);

    const saveUser = await createUser.save();

    if (!saveUser) return { data: null, success: false, statusCode: responseStatuscode.internalServerError };

    return { data: saveUser, id: saveUser._id, success: true, statusCode: responseStatuscode.success };
}


export const getUser = async (id: any) => {
    const getUserData = await userSchema.findOne({ _id: id });

    if (!getUserData) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    return { data: getUserData, success: true, statusCode: responseStatuscode.success };
}


export const getUsers = async (data: any) => {
    const alldata = await userSchema.find({ _id: { $in: data } });

    if (alldata.length === 0) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    return { data: alldata, success: true, statusCode: responseStatuscode.success };
}


export const retriveUser = async () => {
    const getData = await userSchema.find();

    if (getData.length === 0) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    return { data: getData, success: true, statusCode: responseStatuscode.success };
}


export const updateUser = async (data: any, id: any, mongoModel: any) => {
    const user = await mongoModel.findOne({ _id: id });

    if (!user) return { data: null, success: false, statusCode: responseStatuscode.notFound };

    const updateUser = await userSchema.findOneAndUpdate({ _id: user.userId }, data, { new: true });

    if (!updateUser) return { data: null, success: false, statusCode: responseStatuscode.badRequest };

    return { data: updateUser, success: true, statusCode: responseStatuscode.success };
}


export const deleteUser = async (id: any) => {
    const deleteUserData = await userSchema.findOneAndDelete({ _id: id });

    if (!deleteUserData) return { data: null, success: false, statusCode: responseStatuscode.badRequest };

    return { data: deleteUserData, success: true, statusCode: responseStatuscode.success };
}