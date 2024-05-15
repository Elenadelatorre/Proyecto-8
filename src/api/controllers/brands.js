const { deleteFile } = require('../../utils/deleteFile');
const Brand = require('../models/brands');

//GET todas las marcas:
const getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate('players');
    res.status(200).json(brands);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

//POST una marca
const postBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body);

    if (req.file) {
      newBrand.img = req.file.path;
    }

    const brandSaved = await newBrand.save();
    return res.status(200).json(brandSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

//PUT una marca
const putBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBrand = new Brand(req.body);
    newBrand._id = id;
    if (req.file) {
      newBrand.img = req.file.path;

      const oldBrand = await Brand.findById(id);
      deleteFile(oldBrand.img);
    }

    const brandUpdated = await Brand.findByIdAndUpdate(id, newBrand, {
      new: true
    });
    return res.status(200).json(brandUpdated);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

//DELETE una marca
const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const brandDeleted = await Brand.findByIdAndDelete(id);
    deleteFile(brandDeleted.img);
    return res.status(200).json(brandDeleted);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error en la solicitud');
  }
};

module.exports = { getBrands, postBrand, putBrand, deleteBrand };
