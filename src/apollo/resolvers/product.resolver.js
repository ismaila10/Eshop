const Product = require('../../models/product.model');
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
      const validation = productValidationSchema.validate(newProduct);
      if (validation.error) {
        return res.status(400).send(validation.error);
      }
      return newProduct.save();
    },
    deleteProduct: (parent, {id}) => {
      return Product.findByIdAndDelete(id)
    },
    updateProduct:(parent, args) => {
      return Product.findByIdAndUpdate(args.id, 
        {
          title :args.title, 
          price :args.price, 
          description: args.description,
          status: args.status,
          categorie: args.categorie
        }
      );
    }
  },
};
