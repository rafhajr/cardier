import { Pagination } from '@/components/Pagination'
import { ProductsTable } from '@/components/Tables/ProductsTable/ProductsTable'
import { useProducts } from '@/services/hooks/useProducts'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  keyframes,
  Spinner,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export default function Products() {
  const [page, setPage] = useState(1)
  const { data, refetch, error, isLoading, isFetching } = useProducts(page)

  // const deleteUser = useMutation(
  //   async (id: number) => {
  //     const cookies = parseCookies();
  //     const response = await api.delete(`users/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${cookies["@dashgo.token"]}`
  //       }
  //     });

  //     return response.data;
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries("users");
  //     }
  //   }
  // );

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Produtos
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Heading>

        <Flex>
          <Tooltip label="Atualizar">
            <Button
              size="sm"
              fontSize="sm"
              bgColor="gray.700"
              cursor="pointer"
              onClick={() => refetch()}
            >
              <Icon
                as={RiRefreshLine}
                fontSize={20}
                animation={
                  !isLoading && isFetching ? `${spin} 1s infinite linear` : ''
                }
              />
            </Button>
          </Tooltip>
          <NextLink href="/app/products/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="orange"
              ml="4"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              cursor="pointer"
            >
              Cadastrar novo produto
            </Button>
          </NextLink>
        </Flex>
      </Flex>

      {isLoading && (
        <Flex justify="center">
          <Spinner />
        </Flex>
      )}

      {error && !isLoading && (
        <Flex justify="center">
          <Text>Falha ao obter dados dos produtos.</Text>
        </Flex>
      )}

      {data?.products.length && (
        <>
          <ProductsTable products={data?.products} />

          <Pagination
            registersPerPage={10}
            onPageChange={setPage}
            totalCountOfRegisters={data.totalProducts}
            currentPage={page}
          />
        </>
      )}
    </Box>
  )
}

Products.layout = AuthenticatedLayout
