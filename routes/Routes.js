const express = require('express');
const multer = require('multer');
const ImgUploads = require('../models/UserUploads');

const upload = multer({dest: 'uploads/'});



const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to api');
})



router.post("/upload/", upload.single("myFile"), (req, res) => {
    console.log("Body: ", req.body);
    console.log("File: ", req.file);
    res.send("File successfully uploaded.");
});

module.exports = router;