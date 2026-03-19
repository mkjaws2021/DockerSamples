const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.get('/',(req,res) => {
    res.send(`Hello Project through Dockerfile ${process.env.NODE_ENV}`)
});

