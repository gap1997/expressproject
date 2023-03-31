const asyncHandler = require("express-async-handler");
//@desc get all contact
//route GET /api/contacts
// @access public

// const async = require("hbs/lib/async");

const getContacts = async (req, res) => {
  res.status(200).json({ massage: "Get All contacts" });
};

//all contact are get
//@desc get all contact
//route GET /api/contacts
// @access public

const getContact = async (req, res) => {
  res.status(200).json({ massage: `Get contacts for ${req.params.id}` });
};

//@desc create new contact
//route POST /api/contacts
// @access public

const createContact = async (req, res) => {
  console.log("the request body is:", req.body);
  const { name, email, phoneNumber, address } = req.body;
  console.log(name);
  console.log(address);
  if (!name || !email || !phoneNumber || !address) {
    res.status(400);
    throw new Error("All Fields Are Mandatory !!!");
  }
  res.status(201).json({ massage: `Create Contacts ${req.params.id}` });
};
//@desc update contact
//route put /api/contacts/id
// @access public
const updateContact = async (req, res) => {
  res.status(201).json({ massage: `update contact ${req.params.id}` });
};

//@desc delete contact
//route delete /api/contacts/id
// @access public
const deleteContact = async (req, res) => {
  res.status(201).json({ massage: `delete contact ${req.params.id}` });
};
//@desc delete contacts
//route delete /api/contacts/
// @access public

const deleteContacts = async (req, res) => {
  res.status(201).json({ massage: "delete  all contacts" });
};

//@desc update contacts
//route put /api/contacts/
// @access public
const updateContacts = async (req, res) => {
  res.status(201).json({ massage: "update all contacts" });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  updateContacts,
  deleteContact,
  deleteContacts,
};
