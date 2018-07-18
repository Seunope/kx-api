const { gql } = require('apollo-server');
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }
  
  type User {
      firstname: String
      lastname:String
      password:String
      phone:String
      account_number:String
      email:String
      address:String
      bvn:String
  }

  type Response {
      status: String
      code: String
      message: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: User
  }
  type Mutation {
    signup(firstname: String, lastname: String, password:String, email:String, address: String,phone:String,account_number:String, bvn:String  ): Response
    login(password:String!, email:String! ): Response


  }
`;
module.exports = typeDefs;