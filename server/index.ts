import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectMongoDB } from './src/db'
import { config } from './src/config';
import { collegeRouter, courseRouter, facultyRouter, lectureRouter, studentRouter, superAdminRouter, universityRouter } from "./src/router"
import { validators } from './src/middleware';

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

const { error } = validators.validate({
    name: "abc",
    email: 'abc@gmail.com',
    password: "Abc1234",
    confirmPassword: "Abc@1234",
    studentCapacity: 10,
    currentStudents: 9,
    courses: "lvnfn",
    city: "ahmedabad",
    website: "regexr.com",
    state: true,
    stateCode: 1,
    courseCode: 123456,
    streams: "vnsn",
    qualifications: "knbkndf",
    permanentAddress: "vsjkjb vkjbjkfdjk v dus g",
    subject: "knbkndf",
    experience: "4 bfkb",
    joinStudents: 14,
    enrollStudents: 11,
    startTime: "bfdnfbnd",
    endTime: "fbdngnd",
    reschedule: false,
    lectureCode: 1234, //
    fatherName: "Rameshbhai",
    motherName: "Pragnaben",
    enrollement: 35454, //
    currentStream: "fbdj",
    currentSemester: 8,
    designation: "HOD",
    role: 1,
    phone: 1234567890,
    address: "bfdknbnd gsksjkbs vds",
    dateOfBirth: "11-12-2001"
});
console.log(error?.details);


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
