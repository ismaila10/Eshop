import { gql } from "apollo-server-express";

module.exports = gql`
    type Order {
        id: ID,
        amountTotal:Float,
        status: String
        products: [Product]
        user: User
    }
    extend type Query {
        orders:[Order]
        order(id:ID): Order
        feedOrders(filter: String): [Order]
        feedOrdersByUser(filtered: ID): [Order]
    }
    extend type Mutation {
        createOrder(amountTotal:Float, status: String, products:[ID],user:ID): Order
        deleteOrder(id: ID!): Order
        updateOrder(id: ID!, amountTotal:Float, status: String, products:[ID], user: ID): Order! 
    }
`