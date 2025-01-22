import * as cors from "cors";
import { type Express } from "express";
import * as express from 'express';
import idRouter from "./routes/idRouter";
import { dataSource } from "./dataSource";
import 'dotenv/config'

const ConnectServer = async() => {
    try {
        await dataSource.initialize();
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
   
}

const app: Express = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/ids',idRouter);
app.listen(process.env.PORT);

ConnectServer();
export { app };
