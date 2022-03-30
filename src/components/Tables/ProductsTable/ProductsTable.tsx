import {
  Button,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Product } from '@prisma/client'
import NextLink from 'next/link'
import { BiTrashAlt } from 'react-icons/bi'
import { RiPencilLine } from 'react-icons/ri'

type ProductsTableProps = {
  products?: Product[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table colorScheme="whiteAlpha" mb="4">
      <Thead>
        <Tr>
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
            <Td>
              <Text>{product.name}</Text>
            </Td>
            <Td>
              <Text align="center">{product.quantity}</Text>
            </Td>
            <Td p="0">
              <HStack>
                <NextLink href={`/app/products/update/${product.id}`} passHref>
                  <Button
                    cursor="pointer"
                    as="a"
                    size="sm"
                    fontSize="sm"
                    color="white"
                    colorScheme="orange"
                    pr="1"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  />
                </NextLink>
                <Button
                  cursor="pointer"
                  as="a"
                  size="sm"
                  fontSize="sm"
                  color="white"
                  colorScheme="red"
                  pr="1"
                  leftIcon={<Icon as={BiTrashAlt} fontSize="16" />}
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
