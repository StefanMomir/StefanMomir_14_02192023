const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/Users.js");
const app = express();
const port = 3001;
const db = require("./config/dbseq.js");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
