const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    foundation: {
      type: Number,
      trim: true,
      required: true
    },
    president: {
      type: String,
      trim: true,
      required: true
    },
    players: [
      { type: mongoose.Types.ObjectId, ref: 'players', required: false }
    ],
    img: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'brands'
  }
);

const Brand = mongoose.model('brands', brandSchema, 'brands');

module.exports = Brand;
