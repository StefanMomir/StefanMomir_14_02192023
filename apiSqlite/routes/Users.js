const express = require("express");
const router = express.Router();
const {
  seqFind,
  seqListAll,
  seqCreate,
  seqUpdate,
} = require("../controllers/Users.js");

router.put("/user/seqfind", seqFind);
router.get("/user/seq", seqListAll);
router.post("/user/seqAdd", seqCreate);
router.put("/user/seqSet", seqUpdate);

module.exports = router;
