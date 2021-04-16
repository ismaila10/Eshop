const productResolver = require('./product.resolver');
const orderResolver = require('./order.resolver');
const categorieResolver = require('./categorie.resolver');
const userResolver = require('./user.resolver');

module.exports = [
    productResolver,
    orderResolver, 
    categorieResolver, 
    userResolver
]