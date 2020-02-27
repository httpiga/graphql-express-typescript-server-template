import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema } from './src/schema'

const port = 4000

// Initialize Express server
const app = express()

// add GraphQL middleware at '/graphql' endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  }),
)

app.listen(port)
console.log('🚀  GraphQL server running on http://localhost:' + port)
