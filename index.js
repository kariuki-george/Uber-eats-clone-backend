const express = require("express");
const app = express();
const restaurantRoute = require("./routes/restaurant/router");
const userRoute = require("./routes/users/router");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  },
  () => {
    console.log("connected to db");
  }
);

//routing to respective dept
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
