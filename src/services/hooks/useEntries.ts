import {
  QueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { api } from '../api'

export type EntriesProps = {
  id: string
  oldQuantity: number
  newQuantity: number
  quantity: number
  updatedAt: Date
  product: {
    name: string
  }
  createdBy: {
    name: string
  }
}

type ApiResponse = {
  entries: EntriesProps[]
  totalEntries: number
}

async function getEntries(page: number): Promise<ApiResponse> {
  const { data } = await api.get<ApiResponse>('api/entries', {
    params: page,
  })

  return data
}

export function useEntries(
  page: number,
  options?: UseQueryOptions<ApiResponse>
): UseQueryResult<ApiResponse> {
  return useQuery(['entries', page], () => getEntries(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...(options as QueryOptions),
  })
}
