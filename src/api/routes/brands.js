const {getBrands, postBrand, putBrand, deleteBrand} = require ("../controllers/brands");
const { isUser, isAdmin } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const brandsRouter = require("express").Router();

brandsRouter.get("/",[isUser], getBrands);
brandsRouter.post("/",[isUser],upload.single('img'), postBrand);
brandsRouter.put("/:id",[isAdmin], putBrand);
brandsRouter.delete("/:id",[isAdmin], deleteBrand); 

module.exports = brandsRouter;