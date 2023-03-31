const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  updateContacts,
} = require("../controllers/contactcontroller.js");
router.route("/").get(getContacts).post(createContact).put(updateContacts);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports = router;
