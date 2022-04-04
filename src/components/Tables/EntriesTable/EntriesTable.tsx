import { EntriesProps } from '@/services/hooks/useEntries'
import { formatDate } from '@/utils/formatDate'
import { Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

type EntriesTableProps = {
  entries?: EntriesProps[]
}

export function EntriesTable({ entries }: EntriesTableProps) {
  return (
    <Table colorScheme="whiteAlpha" mb="4">
      {console.log(new Date('2021-10-10'))}
      <Thead>
        <Tr>
          <Th>Produto</Th>
          <Th>Qtd. anterior</Th>
          <Th>Entrada</Th>
          <Th>Estoque</Th>
          <Th>Responsável</Th>
          <Th>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        {entries?.map((entry) => (
          <Tr key={entry.id}>
            <Td>
              <Text>{entry.product.name}</Text>
            </Td>
            <Td>
              <Text>{entry.oldQuantity}</Text>
            </Td>
            <Td>
              <Text>{entry.quantity}</Text>
            </Td>
            <Td>
              <Text>{entry.newQuantity}</Text>
            </Td>
            <Td>
              <Text>{entry.createdBy.name}</Text>
            </Td>
            <Td>
              <Text>{formatDate(entry.updatedAt)}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
