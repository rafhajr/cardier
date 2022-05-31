import {
  Box,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  VStack
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
interface IPrint {
  type: string
  label: string
  disabled?: boolean
  printSelected: string
  setPrintSelected: (data: string) => void
  setModal: (data: boolean) => void
}

interface IPrints {
  printSelected: string
  setPrintSelected: (data: string) => void
}

export const Prints = ({ printSelected, setPrintSelected }: IPrints) => {
  const [modalDark, setModalDark] = useState(false)
  const [modalClear, setModalClear] = useState(false)
  const PrintButton = ({
    type,
    label,
    disabled,
    printSelected,
    setPrintSelected,
    setModal,
  }: IPrint) => {
    return (
      <Box display="flex" alignItems="center">
        <Button
          w="131px"
          h="40px"
          borderRadius="5px"
          border="1px"
          pr="20px"
          borderColor={type === printSelected ? '#A9A9A9' : '#1A1A1A'}
          disabled={disabled}
          backgroundColor={type === printSelected ? '#1A1A1A' : '#FFF'}
          color={type === printSelected ? '#FFF' : '#1A1A1A'}
          onClick={() => setPrintSelected(type)}
          _focus={{ boxShadow: 'none' }}
        >
          {label}
        </Button>
        <Box pl="10px" as="button" onClick={() => setModal(true)}>
          <AiOutlineInfoCircle size="15px" color="#A9A9A9" />
        </Box>
      </Box>
    )
  }

  return (
    <VStack pt={23}>
      <PrintButton
        type="dark"
        label="Escuro"
        printSelected={printSelected}
        setPrintSelected={setPrintSelected}
        setModal={setModalDark}
      />

      <PrintButton
        type="clear"
        label="Claro"
        printSelected={printSelected}
        setPrintSelected={setPrintSelected}
        setModal={setModalClear}
      />

      <Modal isOpen={modalDark} onClose={() => setModalDark(false)}>
        <ModalOverlay />
        <ModalContent >
          <Image src="/ClarityModal/dark.jpeg" borderRadius="10px" alt="dark"/>
        </ModalContent>
      </Modal>

      <Modal isOpen={modalClear} onClose={() => setModalClear(false)}>
        <ModalOverlay />
        <ModalContent >
          <Image src="/ClarityModal/clear.jpeg" borderRadius="10px" alt="clear"/>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
