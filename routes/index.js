const router = require("express").Router();
const fetch = require('node-fetch');
const mongojs = require("mongojs");


const db = require("../models");


router.get("/api/books", async({body}, res) => {
    const api = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    const response = await fetch(api);
    const data = await response.json();
    res.json(data);
}) 


module.exports = router;
