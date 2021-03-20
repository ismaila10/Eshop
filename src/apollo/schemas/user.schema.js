const {gql} = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    isAdmin: Boolean
  }
`;
