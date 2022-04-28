import { Input } from '@/components/Input'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCard } from 'src/hooks'
import { Typography } from '../Typography'

export const UserInformation = () => {
  const {
    isOpen,
    userEmail,
    userName,
    userWhats,
    setUserEmail,
    setUserName,
    setUserWhats,
    setIsOpen,
    orderCard,
    isLoading,
    isSuccess,
    setIsSuccess,
    reset,
  } = useCard()

  const [request, setRequest] = useState(false)

  const handleRequest = () => {
    if (!isLoading && !isSuccess) {
      setRequest(true)
      orderCard()
    }
  }

  const handleReset = () => {
    reset()
    handleClose()
  }

  const handleClose = () => {
    setRequest(false)
    setIsOpen(false)
    setIsSuccess(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={() => handleClose()}>
      <ModalOverlay />
      <ModalContent h="500px">
        <ModalHeader>Fazer pedido</ModalHeader>

        <ModalCloseButton />

        <ModalBody
          pb={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isLoading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="#272727"
              color="#E0BE74"
              width="100px"
              height="100px"
            />
          )}

          {!isLoading && !request && (
            <Box w="100%">
              <Box pt="10px">
                <Typography text="Nome Inteiro" type="Subtitle" />
                <Input
                  placeholder="Nome aqui"
                  value={userName}
                  setValue={setUserName}
                />
              </Box>
              <Box pt="32px">
                <Typography text="E-Mail" type="Subtitle" />
                <Input
                  placeholder="Email aqui"
                  value={userEmail}
                  setValue={setUserEmail}
                />
              </Box>
              <Box pt="29px">
                <Typography text="WhatsApp" type="Subtitle" />
                <Input
                  placeholder="WhatsApp aqui"
                  value={userWhats}
                  setValue={setUserWhats}
                />
              </Box>
            </Box>
          )}

          {!isLoading && isSuccess && request && (
            <Box
              pt="10px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text fontSize="26px"> Parabéns!!</Text>
              <Text fontSize="22px"> Seu pedido foi feito com sucesso.</Text>
              <Text fontSize="22px"> Entraremos em contato logo!</Text>
            </Box>
          )}

          {!isLoading && !isSuccess && request && (
            <Box
              pt="10px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Text fontSize="26px"> Ops!!</Text>
              <Text fontSize="22px"> Deu algo errado, tente novavemente!!</Text>
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          {!request && !isSuccess && (
            <>
              <Button
                isLoading={isLoading}
                backgroundColor={'#E0BE74'}
                color={'#272727'}
                mr={3}
                onClick={() => handleRequest()}
                disabled={!userEmail || !userName || !userWhats}
              >
                Fazer o pedido
              </Button>

              <Button
                onClick={() => handleClose()}
                backgroundColor={'#1A1A1A'}
                color={'#fff'}
                isLoading={isLoading}
              >
                Cancelar
              </Button>
            </>
          )}

          {request && isSuccess && (
            <>
              <Button
                isLoading={isLoading}
                backgroundColor={'#E0BE74'}
                color={'#272727'}
                mr={3}
                onClick={() => handleReset()}
              >
                Recomeçar do zero
              </Button>

              <Button
                onClick={() => handleClose()}
                backgroundColor={'#1A1A1A'}
                color={'#fff'}
                isLoading={isLoading}
              >
                Continuar editando
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
