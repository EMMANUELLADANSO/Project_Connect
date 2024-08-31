const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Uploads = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: Date,
        required: true,
        unique: true
    },
    imagePath:{
        type: String,
        required: false
    }
}, {timestamps: true} );

module.exports = mongoose.model('ImgUploads', Uploads);
