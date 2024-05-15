const {getBrands, postBrand, putBrand, deleteBrand} = require ("../controllers/brands");
const { isUser, isAdmin } = require('../../middlewares/auth');
const {uploadBrands} = require('../../middlewares/configurarMulter');
const brandsRouter = require("express").Router();

brandsRouter.get("/",[isUser], getBrands);
brandsRouter.post("/",[isUser],uploadBrands.single('img'), postBrand);
brandsRouter.put("/:id",[isAdmin], putBrand);
brandsRouter.delete("/:id",[isUser], deleteBrand); 

module.exports = brandsRouter;