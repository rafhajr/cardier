import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Text,
} from '@chakra-ui/react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  required?: boolean
  errors?: { [x: string]: any }
  register: UseFormRegister<FieldValues>
}

export function Input({
  name,
  label,
  register,
  errors,
  required = false,
  ...rest
}: InputProps) {
  return (
    <FormControl>
      {label && (
        <FormLabel fontSize="sm" htmlFor="email">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={name}
        focusBorderColor="orange.500"
        bgColor="gray.900"
        variant="filled"
        isInvalid={errors && errors[name]}
        _hover={{ bgColor: 'gray.900' }}
        size="md"
        {...register(name, { required })}
        {...rest}
      />
      {errors && errors[name] && (
        <Text fontSize="sm" color="red.500">
          Campo obrigatório
        </Text>
      )}
    </FormControl>
  )
}
