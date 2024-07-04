import express from 'express';
import usersRouter from "./routes/users.routes.js";

const app = express();
app.use(express.json());


app.use("/api/users", usersRouter )


app.listen("3000", () => {
    console.log("The server is running on port 3000...")
})