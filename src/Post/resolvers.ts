import { Resolvers, Post } from '../types'
import DataLoader from 'dataloader'

export const resolvers: Resolvers = {
  User: {
    // Resolve the User.posts[] field
    posts: (parent, args, context, info) => {
      return fakeDB.filter(dbPost => parent.id == dbPost.writer_id)
    },
  },
}

const fakeDB = [
  {
    id: '0',
    writer_id: '0',
    text: 'Hello there!',
  },
  {
    id: '1',
    writer_id: '0',
    text: 'Out now my last album!',
  },
  {
    id: '2',
    writer_id: '1',
    text: 'Tickets for 2020 tour are available now!',
  },
  {
    id: '3',
    writer_id: '2',
    text: '@ studio rn, updates soon...',
  },
  {
    id: '4',
    writer_id: '2',
    text: 'Just chillin',
  },
]
