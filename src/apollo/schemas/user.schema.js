const {gql} = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    isAdmin: Boolean
    password: String
    phone: String
    age: Int
    address: Address 
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
    feedUsers(filter: String): [User]
  }
`;
