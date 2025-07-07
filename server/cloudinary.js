const cloudinary = require ('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmigowfze',
    api_key: '527745295647839',
    api_secret:'ai5BvaFm9tszc4LnTqQtuZTFShk'
});

module.exports = cloudinary;