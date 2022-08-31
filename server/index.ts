import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectMongoDB } from './src/db'
import { config } from './src/config';
import { collegeRouter, courseRouter, facultyRouter, lectureRouter, studentRouter, superAdminRouter, universityRouter } from "./src/router"

dotenv.config();
connectMongoDB();

const app: Express = express();
const port: string | number = config.serverPort;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/college/v1", collegeRouter);
app.use("/api/course/v1", courseRouter);
app.use("/api/university/v1", universityRouter);
app.use("/api/lecture/v1", lectureRouter);
app.use("/api/student/v1", studentRouter);
app.use("/api/faculty/v1", facultyRouter);
app.use("/api/superadmin/v1", superAdminRouter);

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
