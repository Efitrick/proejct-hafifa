import * as cors from "cors";
import { type Express } from "express";
import * as express from 'express';
import idRouter from "./routes/idRouter";
import { dataSource } from "./dataSource";

const ConnectServer = async() => {
    try {
        await dataSource.initialize();
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
   
}



const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/ids',idRouter);
app.listen(8080);

ConnectServer();
export { app };
