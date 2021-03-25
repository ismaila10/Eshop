
const Categorie = require('../../models/categorie.model');
const { filter } = require('../schemas');

module.exports = {
  Query: {
    categories: () => {
          return Categorie.find()
          .populate('products')
    },
    categorie: (parent, {id}) => {
      return Categorie.findById(id)
      .populate('products');
    },
  },
  Mutation: {
    createCategorie: (parent, {title, products}) => {
        const newCategorie = new Categorie({
            title: title,
            products: products
        })   
        return newCategorie.save();
    },
    deleteCategorie: (parent, {id}) => {
        return Categorie.findByIdAndDelete(id)
    },
    updateCategorie:(parent, args) => {
      return Categorie.findByIdAndUpdate(args.id, 
        {title :args.title, products: args.products}
      );
    }
  },
};
