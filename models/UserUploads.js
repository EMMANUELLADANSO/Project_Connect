const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Uploads = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: Date,
        required: false,
        unique: true
    },
    imagePath:{
        type: String,
        required: false
    }
}, {timestamps: true} );

module.exports = mongoose.model('ImgUploads', Uploads);
