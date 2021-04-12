const {gql} = require('apollo-server-express');

module.exports = gql`
  type Address {
      country: String
      streetName: String
      city: String
      postalCode: Int
  }
`