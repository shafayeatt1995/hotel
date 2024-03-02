const express = require("express");
const router = express.Router();

router.get("/anik", (req, res) => {
  return res.json({ success: "marzia" });
});

module.exports = router;
