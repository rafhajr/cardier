import { FormLayout } from '@/components/Form/FormLayout'
import { Input } from '@/components/Form/Input'
import { prisma } from '@/lib/prisma'
import { queryClient } from '@/lib/queryClient'
import { api } from '@/services/api'
import { useProductById } from '@/services/hooks/useProductById'
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Product } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { AuthenticatedLayout } from 'src/layouts/AuthenticatedLayout'

type FormProps = {
  name: string
  quantity: number
}

type UpdateProductProps = {
  product?: Product
}

export default function UpdateProduct({ product }: UpdateProductProps) {
  const router = useRouter()
  const id = String(router.query.id)
  const { data: Product } = useProductById(id, { initialData: product })
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>()

  const updateProduct = useMutation(
    async (data: FormProps): Promise<void> => {
      await api.patch(`api/products/${id}`, data)
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
        await updateProduct.mutateAsync(data)

        toast({
          title: 'Sucesso',
          description: 'Produto atualizado com sucesso.',
          status: 'success',
          position: 'top',
          duration: 9000,
          isClosable: true,
        })

        Router.push('/app/products')
      } catch (err) {
        toast({
          title: 'Error',
          description: err?.response?.data?.message,
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        })
      }
    },
    [updateProduct, toast]
  )

  return (
    <FormLayout title="Editar Produto">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              defaultValue={Product?.name}
              required
              name="name"
              label="Nome"
              register={register}
              errors={errors}
            />
            <Input
              defaultValue={Product?.quantity}
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

UpdateProduct.layout = AuthenticatedLayout

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = String(ctx.query.id)

  const product = await prisma.product.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      quantity: true,
    },
  })

  return {
    props: {
      product,
    },
  }
}
