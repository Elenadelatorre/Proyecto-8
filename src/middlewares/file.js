const cloudinary = require("cloudinary").v2;
const multer = require("multer"); 
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//Preparar Multer para que utilice el Storage de Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: 'Proyecto-8',
      allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
   }
});

const upload = multer({ storage: storage });

module.exports = upload;