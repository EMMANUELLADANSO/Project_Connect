const express = require('express');
const mongoose = require('mongoose');
const routes = require('../Project_Connect/routes/Routes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost/Project_connect")
.then(() => console.log("Connected to a database"))
.catch((err) => console.log(err));

app.use(routes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});