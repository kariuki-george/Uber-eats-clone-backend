const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.status(200).json("Hello you");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
