# Arweave GraphQL

## Info

Typed GraphQL queries for Arweave

## Features

- Full typescript support for both queries and results
- No need to buld gql string templates

## How to use
Install from NPM:

```
npm i arweave-graphql
```

Import and query:

```js
import { query } from 'arweave-wallet-connector'

const result = await query('arweave.net/graphql').getTransactions({ options })
```