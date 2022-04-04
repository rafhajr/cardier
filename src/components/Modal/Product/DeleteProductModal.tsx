import { queryClient } from '@/lib/queryClient'
import { api } from '@/services/api'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react'
import { MutableRefObject, useCallback, useRef } from 'react'
import { useMutation } from 'react-query'

interface DeleteProductModalProps {
  isOpen: boolean
  onClose: () => void
  selectedProduct: string
}

export function DeleteProductModal({
  isOpen,
  onClose,
  selectedProduct,
}: DeleteProductModalProps) {
  const cancelButtonRef = useRef() as MutableRefObject<HTMLButtonElement>
  const toast = useToast()

  const deleteProduct = useMutation(
    async (): Promise<void> => {
      await api.delete(`api/products/${selectedProduct}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products')
      },
    }
  )

  const handleDeleteProduct = useCallback(async () => {
    await deleteProduct.mutateAsync()

    toast({
      title: 'Sucesso',
      position: 'top',
      description: 'Produto excluido com sucesso.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

    onClose()
  }, [deleteProduct, onClose, toast])

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isCentered
      isOpen={isOpen}
      leastDestructiveRef={cancelButtonRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          bg="gray.800"
          borderColor="transparent"
          boxShadow="lg"
          color="white"
        >
          <AlertDialogCloseButton />
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Excluir Produto
          </AlertDialogHeader>

          <AlertDialogBody>
            Você tem certeza de que quer excluir o produto selecionado?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelButtonRef}
              colorScheme="whiteAlpha"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleDeleteProduct} ml={3}>
              Excluir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
