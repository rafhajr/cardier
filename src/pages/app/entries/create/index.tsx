import { Input, Select } from '@/components/Form'
import { FormLayout } from '@/components/Form/FormLayout'
import { queryClient } from '@/lib/queryClient'
import { api } from '@/services/api'
import { useProducts } from '@/services/hooks/useProducts'
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  useToast,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import Router from 'next/router'
import { useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useAuth } from 'src/hooks'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

type FormProps = {
  productId: string
  quantity: number
}

export default function CreateEntry() {
  const toast = useToast()
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>()

  const { data: Products } = useProducts()
  const productOptions = useMemo(
    () =>
      Products?.products.map((product) => ({
        name: product.name,
        value: product.id,
      })),
    [Products?.products]
  )

  const createEntry = useMutation(
    async (data: FormProps): Promise<void> => {
      const dataWithUserId = {
        ...data,
        userId: user?.id,
      }
      await api.post('api/entries/create', dataWithUserId)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('entries')
      },
    }
  )

  const onSubmit: SubmitHandler<FormProps> = useCallback(
    async (data: FormProps) => {
      try {
        await createEntry.mutateAsync(data)

        toast({
          title: 'Sucesso',
          position: 'top',
          description: 'Entrada cadastrado com sucesso.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        Router.push('/app/entries')
      } catch (err) {
        toast({
          title: 'Error',
          position: 'top',
          description: err?.response?.data?.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    },
    [createEntry, toast]
  )

  return (
    <FormLayout title="Cadastrar entrada">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Select
              options={productOptions!}
              required
              name="productId"
              label="Produto"
              register={register}
              errors={errors}
            />
            <Input
              required
              name="quantity"
              label="Quantidade"
              register={register}
              errors={errors}
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href="/app/entries" passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" isLoading={isSubmitting} colorScheme="orange">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </FormLayout>
  )
}

CreateEntry.layout = AuthenticatedLayout
