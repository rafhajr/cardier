import { Product } from '@prisma/client'
import {
  QueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { api } from '../api'

async function getProductById(id: string): Promise<Product> {
  const { data } = await api.get<Product>(`api/products/${id}`)

  return data
}

export function useProductById(
  id: string,
  options?: UseQueryOptions<Product>
): UseQueryResult<Product> {
  return useQuery(['products', id], () => getProductById(id), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...(options as QueryOptions),
  })
}
