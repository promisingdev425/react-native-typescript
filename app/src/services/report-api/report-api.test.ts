import {
  ServerError,
  Observable,
  ApolloClient,
  ApolloLink,
} from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'

import { ReportAPI } from './report-api'
import { makeReportAPICacheClient } from './cache'
import { makeGraphQLErrorLink } from '../graphql-utils'
import { createReportAPIClientMock } from './mocks'

describe('ReportAPI', () => {
  let onAuthFailure: () => void

  const build = (options = {}) => {
    const client = createReportAPIClientMock({
      errorLink: makeGraphQLErrorLink(onAuthFailure),
      cache: makeReportAPICacheClient(),
      debug: false,
      generatorOptions: options,
    })

    jest.spyOn(client, 'query')
    jest.spyOn(client, 'mutate')

    return new ReportAPI({ client, debug: false })
  }

  beforeEach(() => {
    onAuthFailure = jest.fn()
  })

  describe('getProperties', () => {
    it('should be able to get the list of properties available to the user.', async () => {
      const api = build({ propertyCount: 2 })
      const result = await api.getProperties()

      expect(api.client.query).toHaveBeenCalledTimes(1)

      expect(result.length).toEqual(2)
      expect(result[0]).toEqual({
        id: expect.any(String),
        name: expect.any(String),
        ownershipGroupId: expect.any(String),
      })
    })
  })
})
