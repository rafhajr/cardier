import {
  Button,
  Checkbox,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Product } from '@prisma/client'
import { RiPencilLine } from 'react-icons/ri'

type ProductsTableProps = {
  products?: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Table colorScheme="whiteAlpha" mb="4">
      <Thead>
        <Tr>
          <Th color="gray.300" width="8">
            <Checkbox colorScheme="orange" />
          </Th>
          <Th>Nome</Th>
          <Th>
            <Text align="center">Quantidade</Text>
          </Th>
          <Th width="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {products?.map((product) => (
          <Tr key={product.id}>
            <Td px={['4', '4', '6']}>
              <Checkbox colorScheme="orange" />
            </Td>
            <Td>
              <Text>{product.name}</Text>
            </Td>
            <Td>
              <Text align="center">{product.quantity}</Text>
            </Td>
            <Td p="0">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                color="white"
                colorScheme="cyan"
                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
              >
                {isWideScreen ? 'Editar' : ''}
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
