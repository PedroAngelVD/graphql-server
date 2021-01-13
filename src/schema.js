import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Query {
    hello: String
    greet(name: String): String
    users: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): User
  }

  input UserInput {
    firstname: String!
    lastname: String!
    age: Int
  }

  type User {
    id: ID
    firstname: String!
    lastname: String!
    age: Int
  }

`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
