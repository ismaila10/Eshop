const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        lowercase: true
    },
    categorie:{type: Schema.Types.ObjectId, ref:'Categorie'},
    Image: String
},
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);