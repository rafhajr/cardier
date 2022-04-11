import { PageWrapper } from '@/components/PageWrapper'
import { Pagination } from '@/components/Pagination'
import { Scroll } from '@/components/Scroll'
import { EntriesTable } from '@/components/Tables/EntriesTable'
import { prisma } from '@/lib/prisma'
import { EntriesProps, useEntries } from '@/services/hooks/useEntries'
import { formatDate } from '@/utils/formatDate'
import { Flex, Spinner, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

type InitialEntriesProps = {
  initialEntries: {
    entries: EntriesProps[]
    totalEntries: number
  }
}

export default function Entries({ initialEntries }: InitialEntriesProps) {
  const [page, setPage] = useState(1)
  const { data, refetch, error, isLoading, isFetching } = useEntries(page, {
    initialData: initialEntries,
  })

  return (
    <PageWrapper
      refetch={() => refetch()}
      isFetching={isFetching}
      isLoading={isLoading}
      registrationRoute="entries/create"
      title="Entradas"
    >
      <Head>
        <title>Maral | Entradas</title>
      </Head>

      {isLoading && (
        <Flex justify="center">
          <Spinner />
        </Flex>
      )}

      {error && !isLoading && (
        <Flex justify="center">
          <Text>Falha ao obter dados das entradas.</Text>
        </Flex>
      )}

      {data?.entries.length && (
        <Scroll>
          <EntriesTable entries={data?.entries} />

          <Pagination
            registersPerPage={10}
            onPageChange={setPage}
            totalCountOfRegisters={data.totalEntries}
            currentPage={page}
          />
        </Scroll>
      )}
    </PageWrapper>
  )
}

Entries.layout = AuthenticatedLayout

export const getServerSideProps: GetServerSideProps = async () => {
  const entries = await prisma.entries.findMany({
    select: {
      id: true,
      oldQuantity: true,
      newQuantity: true,
      quantity: true,
      updatedAt: true,
      product: {
        select: {
          name: true,
        },
      },
      createdBy: {
        select: {
          name: true,
        },
      },
    },
  })
  const totalEntries = await prisma.entries.count()

  const formatedEntries = entries.map((entry) => ({
    ...entry,
    updatedAt: formatDate(entry.updatedAt),
  }))

  const initialEntries = {
    totalEntries,
    entries: formatedEntries,
  }

  return {
    props: {
      initialEntries,
    },
  }
}
