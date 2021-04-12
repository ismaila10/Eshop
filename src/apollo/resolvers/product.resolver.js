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
    },
    feed: (parent, args) => {
      console.log(args.filter);
      const regex = new RegExp(args.filter, 'i')
      const products = Product.find({$or: [ {title: {$regex: regex}}, {description: {$regex: regex}}]})
      return products
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
      console.log(validation)
      if (validation) {
        //console.log(validation)
        return (validation.error);
      }
      //Categorie.findOneAndUpdate()
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

// mutation{_
// 	createProduct(
//     title: "cable display", 
//     description: "qualité USB-C",
//     status: "disponible",
//     price: 45,
//     categorie: "605490854309f17adc40413e"
//   ){
//     id
//     title
//   }
// }
