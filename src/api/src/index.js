import express from "express";
import cors from "cors";

// routes
import AuthRouter from "./routes/AuthRoutes.js";
import UserRouter from "./routes/UserRoutes.js";
import GameRouter from "./routes/GameRoutes.js";
import GamePlatformRouter from "./routes/GamePlatformRoutes.js";
import UserGameRouter from "./routes/UserGameRoutes.js";
import UserGameCategoryRouter from "./routes/UserGameCategoryRoutes.js";
import GameCategoryRouter from "./routes/GameCategoryRoutes.js";

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use(AuthRouter);
app.use(UserRouter);
app.use(GameRouter);
app.use(GamePlatformRouter);
app.use(UserGameRouter);
app.use(UserGameCategoryRouter);
app.use(GameCategoryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
