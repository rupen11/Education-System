export const checkByEmail = async (payload: any, mongoModel: any) => {
    const matchData = await mongoModel.findOne({ email: payload });

    console.log(matchData);


    return matchData ? false : true;
}