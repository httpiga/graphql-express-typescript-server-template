import gql from 'graphql-tag'
import { makeExecutableSchema } from 'graphql-tools'
import { typeDef as User } from './User/schema'
import { typeDef as Post } from './Post/schema'
import { typeDef as Comment } from './Comment/schema'
import { resolvers as userResolvers } from './User/resolvers'
import { resolvers as postResolver } from './Post/resolvers'
import { resolvers as commentResolvers } from './Comment/resolvers'
import { merge } from 'lodash'

const Query = gql`
  # Leave Query type empty, it will be extended by the other typeDefs
  type Query
`

export const schema = makeExecutableSchema({
  typeDefs: [Query, User, Post, Comment],
  resolvers: merge(userResolvers, postResolver, commentResolvers),
})
