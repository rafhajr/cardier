import { Product } from '@prisma/client'
import {
  QueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query'
import { api } from '../api'

type ApiResponse = {
  products: Product[]
  totalProducts: number
}

async function getProducts(page?: number): Promise<ApiResponse> {
  const { data } = await api.get<ApiResponse>('api/products', {
    params: page,
  })

  return data
}

export function useProducts(
  page?: number,
  options?: UseQueryOptions<ApiResponse>
): UseQueryResult<ApiResponse> {
  return useQuery(['products', page], () => getProducts(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...(options as QueryOptions),
  })
}
