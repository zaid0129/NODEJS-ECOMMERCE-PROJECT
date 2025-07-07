import { CloudinaryStorage } from "multer-storage-cloudinary";
const cloudinary = require("../cloudinary")
const multer = require ("multer");






const storage = new CloudinaryStorage({
  cloudinary : cloudinary,
  params : {
    folder : 'Projectuploads',
    format : async (req, file) => 'jpeg',
    public_id : async (req, file)=> Date.now() + '-' + file.originalname
  } 
});

const upload = multer({ storage : storage}).array('images', 10);

module.exports = upload;



