const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hi, I am user")
})

router.get("/:id", (req, res) => {
    res.send("GEt for show user")
})

router.post("/", (req, res) => {
    res.send("Hi, I am post root")
})

router.delete("/:id", (req, res) => {
    res.send("Hi, I am delete root")
});

module.exports = router;