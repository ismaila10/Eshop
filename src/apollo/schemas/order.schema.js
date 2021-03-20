import { gql } from "apollo-server-express";

module.exports = gql`
    type Order {
        id: ID,
        amountTotal:Float,
        products: [Product]
        user: User
    }
    input OrderInput {
        amountTotal:Float, 
        products:[ID],
        user:ID
    }
    extend type Query {
        orders:[Order]
        order(id:ID): Order
    }
    extend type Mutation {
        createOrder(amountTotal:Float, products:[ID],user:ID): Order
        deleteOrder(id: ID!): Boolean!
    }
`