
const Categorie = require('../../models/categorie.model');

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
        // let checkTitle = Categorie.findOne(categor => categor.title === title)
        // if(checkTitle == -1 ){
        //     const newCategorie = new Categorie({
        //         title: title,
        //         products: products
        // })
        // }else {
        //     throw new Error('Title already exist')
        // }     
        return newCategorie.save();
    },
    deleteCategorie: (parent, {id}) => {
        return Categorie.findByIdAndDelete(id)
    },
    updateCategorie:(parent, args) => {
        const index = Categorie.findById(cat => cat.id === args.id)
        if(index < -1){
            if(args.title) index.title = args.title
            if(args.products) index.products = args.products
            return index
        }
    }
  },
};
