const express = require("express");
const router = express.Router();

router.get("/process/", async (req,res) => {
    function randomPayment() {
        var items = ["Successful", "Reject"];
        var item = items[Math.floor(Math.random() * items.length)];
        res.send(item);
      }
      
      setTimeout(randomPayment, 1500);
});

module.exports = router;