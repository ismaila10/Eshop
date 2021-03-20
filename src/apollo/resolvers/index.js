const productResolver = require('./product.resolver');
const orderResolver = require('./order.resolver');
const categorieResolver = require('./categorie.resolver');

module.exports = [
    productResolver,orderResolver, categorieResolver
    //touts les resolvers
]