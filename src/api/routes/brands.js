const {getBrands, postBrand, putBrand, deleteBrand} = require ("../controllers/brands");
const { isUser, isAdmin } = require('../../middlewares/auth');
const brandsRouter = require("express").Router();

brandsRouter.get("/",[isUser], getBrands);
brandsRouter.post("/",[isAdmin], postBrand);
brandsRouter.put("/:id",[isAdmin], putBrand);
brandsRouter.delete("/:id",[isAdmin], deleteBrand); 

module.exports = brandsRouter;