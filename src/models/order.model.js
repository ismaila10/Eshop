const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    amountTotal: Number,
    user:{type: Schema.Types.ObjectId, ref:'User'},
    products: [{
        type: Schema.Types.ObjectId, ref:'Product'
    }],
    status: String
},
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);