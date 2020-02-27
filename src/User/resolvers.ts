import { Resolvers, User } from '../types'
import { requestedFields } from '../../helpers/graphql'

export const resolvers: Resolvers = {
  Query: {
    User: (root, args, context, info) => {
      const fields = requestedFields(info)
      return fakeDB.find(dbUser => args.id == dbUser.id) || null
    },
  },
  Post: {
    // resolve the Post.writer field
    writer: (parent, args, context, info) => {
      return fakeDB.find(dbUser => parent.writer_id == dbUser.id) || null
    },
  },
  Comment: {
    // resolve the Comment.writer field
    writer: (parent, args, context, info) => {
      return fakeDB.find(dbUser => parent.writer_id == dbUser.id) || null
    },
  },
}

const fakeDB = [
  {
    id: '0',
    name: 'Aphex',
    surname: 'Twin',
  },
  {
    id: '1',
    name: 'Jon',
    surname: 'Hopkins',
  },
  {
    id: '2',
    name: 'Alessandro',
    surname: 'Cortini',
  },
  {
    id: '3',
    name: 'Nicolas',
    surname: 'Jaar',
  },
]
