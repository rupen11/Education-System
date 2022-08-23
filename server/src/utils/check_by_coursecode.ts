export const checkByCourseCode = async (payload: any, mongoModel: any) => {
    const matchData = await mongoModel.findOne({ courseCode: payload });

    return matchData ? false : true;
}