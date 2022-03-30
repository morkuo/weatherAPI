const express = require("express");
const app = express();
const ejs = require("ejs");
const fetch = require ("node-fetch");
require("dotenv").config();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/:city", async (req, res)=>{
    let {city} = req.params;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.MYKEY}`;
    let d = await fetch(url);
    let djs = await d.json();
    res.render("weather.ejs", {djs});
});

app.listen(PORT, ()=>{
    console.log("server is running on port 3000");
});