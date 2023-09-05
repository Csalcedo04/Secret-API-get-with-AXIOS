// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";
app.use(express.static("public"));

app.get("/", async (req, res) =>{
    try{
        const result = await axios.get(API_URL);
        res.render("index.ejs", { user: result.data.username, secret:result.data.secret });
        
    }catch(error){ 
        res.status(404).send(error.message)
    }
    res.render("index.ejs")
})

app.listen(port, ()=>{console.log(`listen port ${port}`)})