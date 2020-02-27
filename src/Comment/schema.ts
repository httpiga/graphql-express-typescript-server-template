import gql from 'graphql-tag'

export const typeDef = gql`
  type Comment {
    id: ID!
    writer_id: ID!
    writer: User
    post: Post
    text: String
    likes: Int
  }
`
