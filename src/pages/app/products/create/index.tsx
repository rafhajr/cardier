import { FormLayout } from '@/components/Form/FormLayout'
import { Input } from '@/components/Form/Input'
import { queryClient } from '@/lib/queryClient'
import { api } from '@/services/api'
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
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

type FormProps = {
  name: string
  quantity: number
}

export default function CreateProduct() {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>()

  const createProduct = useMutation(
    async (data: FormProps): Promise<void> => {
      await api.post('api/products/create', data)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products')
      },
    }
  )

  const onSubmit: SubmitHandler<FormProps> = useCallback(
    async (data: FormProps) => {
      try {
        await createProduct.mutateAsync(data)

        toast({
          title: 'Sucesso',
          description: 'Produto cadastrado com sucesso.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        Router.push('/app/products')
      } catch (err) {
        toast({
          title: 'Error',
          description: err?.response?.data?.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    },
    [createProduct, toast]
  )

  return (
    <FormLayout title="Criar Produto">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              required
              name="name"
              label="Nome"
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
            <Link href="/app/products" passHref>
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

CreateProduct.layout = AuthenticatedLayout
