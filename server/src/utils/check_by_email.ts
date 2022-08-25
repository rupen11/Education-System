export const checkByEmail = async (payload: any, mongoModel: any) => {
    const matchData = await mongoModel.findOne({ email: payload });

    return matchData ? false : true;
}