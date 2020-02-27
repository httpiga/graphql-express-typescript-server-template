import gql from 'graphql-tag'

export const typeDef = gql`
  type User {
    id: ID!
    name: String!
    surname: String!
    posts: [Post]
  }

  extend type Query {
    User(id: String!): User
  }
`
