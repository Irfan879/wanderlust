const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET, I am posts")
})

router.post("/", (req, res) => {
    res.send("POST for show posts")
})

router.get("/:id", (req, res) => {
    res.send("Hi, I am post id root")
})

router.delete("/:id", (req, res) => {
    res.send("Hi, I am delete posts")
});

module.exports = router;