const express = require("express");
const contacts = require("../controller/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findALL)
    .post(contacts.create)
    .delete(contacts.deleteALL)

router.route("/")
    .get(contacts.findALLFavorite);
    

router.route("/")
    .get(contacts.findOne)
    .post(contacts.update)
    .delete(contacts.delete)

module.exports = router;