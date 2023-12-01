const { Router } = require("express");
const router = Router();
var cors = require("cors");

router.use(cors());

router.use("/agenda-management", require("../services/quotes"));
module.exports = router;
