const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db")
const apiRouter = require("./routes")


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api',apiRouter);

app.get('/',(req,res) => { 
    res.send('My Nj Project');
});
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;


db.authenticate()
.then( () => {
   console.log('Connected to postgresSQL');
   return db.sync();
})
.then( () => {
   console.log('Database synchronized, starting server.')
   app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
})
.catch(err => {
   console.error("Unable to connect to DB")
   console.error(err)
});


