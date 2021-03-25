const Order = require('../../models/order.model');

module.exports = {
  Query: {
    orders: () => {
          return Order.find()
          .populate('user')
          .populate('products');       
    },
    order: (parent, args) => {
      return Order.findById(args.id)
        .populate('user')
        .populate('products');
    },
  },
  Mutation: {
    createOrder: (parent, args) => {
      const newOrder = new Order({
        amountTotal: args.amountTotal,
        status: args.status,
        user: args.user,
        products: args.products,
      });
      return newOrder.save();
    },
    deleteOrder: (parent, {id}) => {
      return Order.findByIdAndDelete(id)
    },
    updateOrder:(parent, args) => {
      return Order.findByIdAndUpdate(args.id, 
        {
          amountTotal :args.amountTotal, 
          status :args.status, 
          products: args.products
        }
      );
    }
  },
};
