import { PageWrapper } from '@/components/PageWrapper'
import { Pagination } from '@/components/Pagination'
import { Scroll } from '@/components/Scroll'
import { ProductsTable } from '@/components/Tables/ProductsTable'
import { prisma } from '@/lib/prisma'
import { useProducts } from '@/services/hooks/useProducts'
import { Flex, Spinner, Text } from '@chakra-ui/react'
import { Product } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

type ProductsProps = {
  initialProducts?: {
    products: Product[]
    totalProducts: number
  }
}
export default function Products({ initialProducts }: ProductsProps) {
  const [page, setPage] = useState(1)
  const { data, refetch, error, isLoading, isFetching } = useProducts(page, {
    initialData: initialProducts,
  })

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
    <PageWrapper
      refetch={() => refetch()}
      isFetching={isFetching}
      isLoading={isLoading}
      registrationRoute="/app/products/create"
      title="Cadastro de Produtos"
    >
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
        <Scroll>
          <ProductsTable products={data?.products} />

          <Pagination
            registersPerPage={10}
            onPageChange={setPage}
            totalCountOfRegisters={data.totalProducts}
            currentPage={page}
          />
        </Scroll>
      )}
    </PageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await prisma.product.findMany({})
  const totalProducts = await prisma.product.count()

  const formatedProducts = products.map((product) => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
  }))

  const initialProducts = {
    totalProducts: totalProducts,
    products: formatedProducts,
  }

  return {
    props: {
      initialProducts,
    },
  }
}

Products.layout = AuthenticatedLayout
