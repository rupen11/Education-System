import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectMongoDB } from './src/db'
import { config } from './src/config';

dotenv.config();
connectMongoDB();

const app: Express = express();
const port = config.serverPort;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
