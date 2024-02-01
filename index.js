import express from "express";
import bodyParser from "body-parser";

//Constants
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    loggedIn: loggedIn
  });
});
app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`);
});

var loggedIn = false;

app.post("/login", (req, res)=>{

    loggedIn = true;
    res.render("index.ejs", {
      loggedIn: loggedIn
    });
})
app.post("/logout", (req, res)=>{
    loggedIn = false;
    res.render("index.ejs", {
        loggedIn: loggedIn
      });
})

