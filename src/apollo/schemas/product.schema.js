const {gql} = require('apollo-server-express');

module.exports = gql`
  type Product {
    id: ID!
    title: String
    price: Float!
    description: String
    categorie: Categorie
  }
  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }
  extend type Mutation {
    createProduct(title: String, price: Float, description: String, categorie: ID): Product,
    updateProduct(id:ID!,title: String, price: Float, description: String, categorie: ID): Product,
    deleteProduct(id:ID!): Product
  }
`;
