const User = require('../../models/user.model');

module.exports = {
  Query: {
    users: () => {
      return User.find().populate('address');
    },
    user: (parent, args) => {
      console.log(args.id);
      return User.findById(args.id);
    },
    search: (parent, args) => {
      console.log(args.filter);
      const regex = new RegExp(args.filter, 'i')
      const users = User.find({$or: [ {firstName: {$regex: regex}}, {email: {$regex: regex}}]})
      return users
    }
  } 
};
