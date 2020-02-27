import { Resolvers, Comment } from '../types'
import DataLoader from 'dataloader'

/**
 * Perform one single query to DB for all the requested IDs
 * @param postIds readonly array of Post Ids
 */
const batchCommentsByPostIds = async (postIds: ReadonlyArray<string>) => {
  /* Run one single query like
    SELECT * FROM comments WHERE id IN (postIds[0], postIds[1], postIds[2], ...) 
  in order to avoid multiple queries like 
    SELECT * FROM comments WHERE id=postIds[0]
    SELECT * FROM comments WHERE id=postIds[1]
    SELECT * FROM comments WHERE id=postIds[2]  */
  // Returned array must has the same lenght of postIds array
  return postIds.map(postId => fakeDB.filter(dbComment => postId == dbComment.post_id))
}
const commentsLoader = new DataLoader<string, Comment[]>(batchCommentsByPostIds)

export const resolvers: Resolvers = {
  Post: {
    // Resolve the Post.comments[] field
    comments: (parent, args, context, info) => commentsLoader.load(parent.id),
  },
}

const fakeDB = [
  {
    id: '0',
    writer_id: '2',
    post_id: '0',
    text: '',
    likes: 5,
  },
  {
    id: '1',
    writer_id: '1',
    post_id: '3',
    text: '',
    likes: 4,
  },
  {
    id: '2',
    writer_id: '3',
    post_id: '3',
    text: '',
    likes: 0,
  },
  {
    id: '3',
    writer_id: '2',
    post_id: '3',
    text: '',
    likes: 8,
  },
  {
    id: '4',
    writer_id: '1',
    post_id: '0',
    text: '',
    likes: 2,
  },
]
