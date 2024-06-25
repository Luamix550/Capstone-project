import express from "express";
import morgan from "morgan";
import authRouter from "../routes/auth.routes.js";
import feedRouter from "../routes/feedbacks.routes.js";
import adminRouter from "../routes/admin.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swaggerDocument.js";

const app = express();

// swagger Ui
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use("/api", authRouter);
app.use("/api/feedbacks", feedRouter);
app.use("/api/admin", adminRouter);

export default app;
