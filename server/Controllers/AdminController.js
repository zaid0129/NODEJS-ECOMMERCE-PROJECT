const multer = require('multer');
const adminModel = require('../Models/AdminModel');
const ProductModel = require('../Models/ProductModel');
const jwt=require('jsonwebtoken')
const cloudinary= require('../cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { response } = require('express');

// -----------------------------------------------------------------------------//

// -----------------------------MULTER STORAGE SETUP-----------------------------------//

const storage = new CloudinaryStorage({
  cloudinary : cloudinary,
  params : {
    folder : 'Projectuploads',
    format : async (req, file) => 'jpeg',
    public_id : async (req, file)=> Date.now() + '-' + file.originalname
  } 
});

const upload = multer({ storage : storage}).array('images', 10);


// -------------------------Admin Login SetUp-------------------------------//

const AdminLogin = async(req, res)=>{

   const  {adminId, password} = req.body;
    // res.send('okkk')

    const admin = await adminModel.findOne({adminId});

    if(!admin){
    return res.status(401).send({msg: "Invalid ID!!"})
    }

    if(admin.password !== password){
     return res.status(401).send({msg: "Invalid password!!"})
    }
    
   return res.status(200).send({ admin ,msg: "Login Successfully!!"})
}



 //----------------------------JWT Authentication-------------------------------------//

 const Auth = async (req, res)=>{
  const token = req.header("x-token");
  console.log(token);

  if (!token) return res.json(false);

  const verify = await jwt.verify(token, process.env.JWT);
  if (!verify) return res.json(false);
  console.log(verify);

  const user = await adminModel.findById(verify.id).select("password");
  res.send(user);

}



// -------------------------------Upload Product Images---------------------------------//

const saveProduct = async (req, res)=> {
  upload(req, res, async(err)=>{
    if (err) {
      return res 
      .status(500)
      .send({msg: "Error In Uploading Images", error: err.message})
    }
    try {
      const imageURL = req.files.map((file)=> file.path);
      // console.log(imageURL)
      const {name, description, price, category} = req.body;
      // console.log(req.body)

      const Product = new ProductModel ({
        name: name,
        description: description,
        price: price,
        category: category,
        images:imageURL,
        defaultimage:imageURL[0], 
      })

      await Product.save();
      res.status(200).send("Data Imported");

    } catch (error) {
      res.status(500).send("Error in Uploading" + error.message)
    }

  })

};

module.exports = {
  AdminLogin,
  saveProduct,
  Auth
};