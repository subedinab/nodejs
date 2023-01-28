const express = require("express");
const mongoose = require("mongoose");
const userroute = require("./routes/userroute");
const reviewroute = require("./routes/reviewroute");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
  });
});
// app.use("/get");
app.use("/user", userroute);
app.use("/review", reviewroute);

mongoose
  .connect(
    "mongodb+srv://natours-tours:dynocOFyOWsg2i8a@cluster0.7dcp6yg.mongodb.net/Natours?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running");
});
