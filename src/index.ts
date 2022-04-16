import { buildSchema, execute } from 'graphql'
import { GraphQLClient } from 'graphql-request'
import { GetBlocksDocument, GetTransactionsDocument } from './generated.js'
export * from './generated.js'

type Options = ConstructorParameters<typeof GraphQLClient>[1]

export default (url: string, options?: Options) => {
	if (!url.includes('://')) { url = 'https://' + url }
	return new GraphQLClient(url, options)
}