import express from "express";
import { config } from "dotenv";
import cors from "cors";
import usersRouter from "./routes/users.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import vehicleRouter from "./routes/vehicle.route.js";
import paymentRouter from "./routes/payment.routes.js";
import driverRouter from "./routes/drivers.routes.js";
import categoryRouter from "./routes/category.routes.js";
import inquiryRouter from "./routes/inquiry.routes.js";
import signupRouter from "./routes/signup.routes.js";
import loginRouter from "./routes/login.routes.js";

config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"]
}));

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/vehicle", vehicleRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/driver", driverRouter);
app.use("/api/category", categoryRouter);
app.use("/api/inquiry", inquiryRouter);
app.use("/api/auth/signup", signupRouter);
app.use("/api/auth/login", loginRouter);

app.listen("3000", () => {
  console.log("The server is running on port 3000...");
});
