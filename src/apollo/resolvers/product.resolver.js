const Product = require('../../models/product.model');
const mongoose = require('mongoose');
import productValidationSchema from "../../middlewares/validators/product.validation";

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
    },
    feedProducts: (parent, args) => {
      console.log(args.filter);
      const regex = new RegExp(args.filter, 'i')
      const products = Product.find({$or: [{title: {$regex: regex}}, {description: {$regex: regex}}]})
      return products.populate('categorie')
    },
    feedProductsByCategorie: (parent, args) => {
      console.log(args.filtered);
      const regex = mongoose.Types.ObjectId(args.filtered); 
      const products = Product.find({categorie: regex})
      return products.populate('categorie')
    }
  },
  Mutation: {
    createProduct: (parent, args) => {
      const newProduct = new Product({
        title: args.title,
        price: args.price,
        description: args.description,
        status: args.status,
        categorie: args.categorie
      });
      return newProduct.save();
    },
    deleteProduct: (parent, {id}) => {
      return Product.findByIdAndDelete(id)
    },
    updateProduct:(parent, args) => {
      console.log(args.title);
      return Product.findByIdAndUpdate(args.id, 
        {
          title :args.title, 
          price :args.price, 
          description: args.description,
          status: args.status,
        }
      );
    }
  },
};

