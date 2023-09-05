const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/route");

const app = express();
app.use(express.json());
// const cookieParser = require("cookie-parser");
// const authRoute = require("./routes/route");


// app.use(
//   cors({
//     origin: ["http://localhost:3001"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());

app.use(express.json());

// app.use("/", authRoute);
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", route);

// DB Connection
mongoose
  .connect(
    "mongodb+srv://shreyakulal55:shreyakulal55@foodrecipe.jxauwfp.mongodb.net/recipe"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("Server Connected on 3001");
});
