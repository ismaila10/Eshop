const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: false,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    age: {
        type: Number
    },
    address: {
        postalCode: {
            type: Number
        },
        streetName: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        }
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);