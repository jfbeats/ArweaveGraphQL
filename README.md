# Arweave GraphQL

## Info

Typed GraphQL queries for Arweave

## Features

- Full typescript support for both queries and results
- No need to build gql string templates

## How to use
Install from NPM:

```
npm i arweave-graphql
```

Import, query, and access results:

```js
import arweaveGraphql from 'arweave-graphql'

const transactionsResult = await arweaveGraphql('arweave.net/graphql').getTransactions({ options })
const blocksResult = await arweaveGraphql('arweave.net/graphql').getBlocks({ options })

const transactionsArray = transactionsResult.transactions.edges.map(edge => edge.node)
```

Random examples:

```js
import arweaveGraphql, { SortOrder, TagOperator } from 'arweave-graphql'

arweaveGraphql('arweave.net/graphql').getTransactions({
	owners: ['TId0Wix2KFl1gArtAT6Do1CbWU_0wneGvS5X9BfW5PE'],
	block: { max: 900000 },
	tags: [
		{ name: 'App-Name', values: ['SmartWeaveAction'] },
		{ name: 'Service', values: ['ArWiki'] },
		{ name: 'Arwiki-Type', values: ['TransferTokens'], op: TagOperator.Neq },
	],
})

arweaveGraphql('arweave.net/graphql').getBlocks({
	height: { min: 800000 },
	sort: SortOrder.HeightAsc,
	after: 'CursorValueHereToKeepGoing',
	first: 100,
})
```