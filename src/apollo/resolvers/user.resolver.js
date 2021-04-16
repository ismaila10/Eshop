const User = require('../../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
  Query: {
    users: () => {
      return User.find().populate('address');
    },
    user: (parent, args) => {
      console.log(args.id);
      return User.findById(args.id).populate('address');
    },
    feedUsers: (parent, args) => {
      console.log(args.filter);
      const regex = new RegExp(args.filter, 'i')
      const users = User.find({$or: [ {firstName: {$regex: regex}}, {email: {$regex: regex}}, {lastName: {$regex: regex}}]})
      return users.populate('address')
    }
  }, 
  Mutation: {
    updateUser:(parent, args) => {
      let hashedPassword = bcrypt.hashSync(args.password, 10);
      console.log(args.title);
      return User.findByIdAndUpdate(args.id, 
        {
          firstName :args.firstName, 
          lastName :args.lastName, 
          email: args.email,
          isAdmin: args.isAdmin,
          phone: args.phone,
          age: args.age,
          address: {
            streetName: args.streetName,
            postalCode: args.postalCode,
            city: "France",
            country: args.country
          }
        }
      );
    },
    deleteUser: (parent, {id}) => {
      return User.findByIdAndDelete(id)
    },
  }
};
