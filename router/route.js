const express = require('express');
const router = express.Router();
const coinController= require("../Controller/Blockcontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/assets-api", coinController.getcoin)
module.exports=router;
