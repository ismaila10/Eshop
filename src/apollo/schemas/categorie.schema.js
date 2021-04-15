import { gql } from "apollo-server-express";

module.exports = gql`
    type Categorie {
        id: ID!,
        title: String!,
        products: [Product]
    }
    extend type Query {
        categories:[Categorie!]!
        categorie(id:ID!): Categorie!
        feedCategories(filter: String): [Categorie]
    }
   
    extend type Mutation {
        createCategorie(title:String!, products:[ID]): Categorie!
        updateCategorie(id: ID!, title: String, products:[ID]): Categorie!
        deleteCategorie(id: ID!): Boolean      
    }
`