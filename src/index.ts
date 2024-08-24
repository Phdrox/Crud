import express from "express";
import { router } from "./routes/route";

const app=express();
app.use(express.json());
app.use('/',router);
app.listen(8080)

export default app