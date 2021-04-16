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
  extend type Mutation {
    updateUser(id:ID!, firstName: String, lastName: String, email: String, isAdmin: Boolean, phone: String, age: Int, password: String, streetName: String, city: String, postalCode: Int, country: String): User
    deleteUser(id:ID!): User
  }
`;
