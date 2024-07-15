import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConn-config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

//Connecting Database and Server
connectDB().
then(() =>{ 
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}).
catch(error => console.error('[Server]: Error Occured',error.message));
