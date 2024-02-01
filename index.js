import express from "express";
import bodyParser from "body-parser";

//Constants
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", (req,res) => {
    res.render("index.ejs");
})
app.listen(PORT, () =>{
    console.log(`Server runnning on ${PORT}`);
})

