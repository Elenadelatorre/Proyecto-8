const cloudinary = require("cloudinary").v2;
const multer = require("multer"); 
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//Preparar Multer para que utilice el Storage de Cloudinary:

function configurarMulter(modelFolder) {
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: `Proyecto-8/${modelFolder}`,
      allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
   }
});

return multer({ storage: storage });
};
module.exports = {configurarMulter};