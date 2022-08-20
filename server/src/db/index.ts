import { connect } from "mongoose";
import { config } from "../config";

const connectMongoDB = async () => {
    try {
        if (!config.mongodbUrl) throw new Error("Mongourl not found");
        await connect(config.mongodbUrl);
        console.log("Connection established");
    }
    catch (error) {
        console.log("Mongoose connection error:" + (error as Error).message);
    }
}

export { connectMongoDB };
