import express from "express";
import bodyParser from "body-parser";

//Constants
const PORT = 3000;
const app = express();

//All Posts 
var posts = [{
  title: "Mate",
  content: "Hey, australian Mate"
},
{
  title: "Not a mate",
  content: "I am indian"
}]

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    loggedIn: loggedIn,
    posts: posts
  });
});

app.listen(PORT, () => {
  console.log(`Server runnning on ${PORT}`);
});

var loggedIn = false;

app.post("/login", (req, res)=>{

    loggedIn = true;
    res.render("index.ejs", {
      loggedIn: loggedIn,
      posts: posts
    });
})
app.post("/logout", (req, res)=>{
    loggedIn = false;
    res.render("index.ejs", {
        loggedIn: loggedIn,
        posts: posts
      });
})

app.get("/addPost", (req,res)=>{
  
  res.render("add.ejs", {
    loggedIn: loggedIn,
    posts: posts
  });
})


app.post("/addPost", (req, res)=>{
  var title = req.body.title;
  var content = req.body.content;
  var data = {
    title: title,
    content: content
  }
  posts.push(data);
  res.render("index.ejs", {
    loggedIn: loggedIn,
    posts: posts
  })
});

app.post("/deletePost",(req, res)=>{
  const toBeDeleted = req.body.title;
  console.log(toBeDeleted);

  posts.forEach((value, index)=>{
    if (value["title"] == toBeDeleted){
      posts.splice(index, 1);
    }
  })
  res.render("index.ejs", {
    loggedIn: loggedIn,
    posts: posts
  })
})

