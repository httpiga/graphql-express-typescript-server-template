import { GraphQLResolveInfo } from 'graphql'
import {
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info'

/**
 * Returns a simplified object that represents the requested GraphQL fields
 * @param info resolver's 4th parameter
 */
export const requestedFields = (info: GraphQLResolveInfo) => {
  const parsedResolveInfoFragment = parseResolveInfo(info) as ResolveTree
  const { fields } = simplifyParsedResolveInfoFragmentWithType(
    parsedResolveInfoFragment,
    info.returnType,
  )
  return fields as any
}
