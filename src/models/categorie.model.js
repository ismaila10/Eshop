const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    products: [{
        type: Schema.Types.ObjectId, ref:'Product'
    }]

},
    { timestamps: true }
);

module.exports = mongoose.model('Categorie', categorieSchema);