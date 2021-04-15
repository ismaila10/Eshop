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
    feedOrders: (parent, args) => {
      console.log(args.filter);
      const regex = new RegExp(args.filter, 'i')
      const orders = Order.find({status: {$regex: regex}})
      return orders.populate('user').populate('products')
    }
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
