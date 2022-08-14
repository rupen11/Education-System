import { connect } from "mongoose";

const connection = async () => {
    try {
        await connect(process.env.MONGODB_URL!);
        console.log("Connection established");
    }
    catch (err) {
        console.log("Somethin went wrong: " + err);
    }
}

export { connection };
