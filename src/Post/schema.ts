import gql from 'graphql-tag'

export const typeDef = gql`
  type Post {
    id: ID!
    writer_id: ID!
    writer: User
    text: String
    comments: [Comment]
  }
`
