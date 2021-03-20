const Product = require('../../models/product.model');

module.exports = {
  Query: {
    products: () => {
      return Product.find()
        .populate('categorie');
    },
    product: (parent, args) => {
      console.log(args.id);
      return Product.findById(args.id)
      .populate('categorie');
    }
  },
  Mutation: {
    createProduct: (parent, args) => {
      const newProduct = new Product({
        title: args.title,
        price: args.price,
        description: args.description,
        categorie: args.categorie
      });
      return newProduct.save();
    },
    deleteProduct: (parent, {id}) => {
      return Product.findByIdAndDelete(id)
    },
  },
};
