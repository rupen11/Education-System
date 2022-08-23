import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectMongoDB } from './src/db'
import { config } from './src/config';
import { collegeRouter, courseRouter } from "./src/router"

dotenv.config();
connectMongoDB();

const app: Express = express();
const port: string | number = config.serverPort;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/college/v1", collegeRouter);
app.use("/api/course/v1", courseRouter);

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
