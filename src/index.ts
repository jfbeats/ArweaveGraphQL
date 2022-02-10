import { getSdk } from './generated'
import { GraphQLClient } from 'graphql-request'
export * from './generated.js'

type Options = ConstructorParameters<typeof GraphQLClient>[1]

export default (url: string, options?: Options) => {
	if (!url.includes('://')) { url = 'https://' + url }
	return getSdk(new GraphQLClient(url, options))
}