import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandlerMiddleware } from "./middlewares/errorHandle.middleware";
import { usersRoutes } from "./routers/users.routes";
import { loginRoutes } from "./routers/login.routes";
import { categoriesRoutes } from "./routers/categories.routes";
import { realEstatesRoutes } from "./routers/realEstate.routes";
import { schedulesRoutes } from "./routers/schedules.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstatesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(errorHandlerMiddleware);

export default app;
