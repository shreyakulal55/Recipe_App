const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/", route);
app.use(cors());

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
