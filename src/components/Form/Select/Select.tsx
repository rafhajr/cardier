import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  Text,
} from '@chakra-ui/react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface SelectProps extends ChakraSelectProps {
  name: string
  label?: string
  required?: boolean
  errors?: { [x: string]: any }
  register: UseFormRegister<FieldValues>
  options: Array<{
    name: string
    value: string
  }>
}

export function Select({
  name,
  label,
  register,
  errors,
  options,
  required = false,
  ...rest
}: SelectProps) {
  return (
    <FormControl>
      {label && (
        <FormLabel fontSize="sm" htmlFor="email">
          {label}
        </FormLabel>
      )}
      <ChakraSelect
        id={name}
        focusBorderColor="orange.500"
        bgColor="gray.900"
        variant="filled"
        isInvalid={errors && errors[name]}
        _hover={{ bgColor: 'gray.900' }}
        size="md"
        {...register(name, { required })}
        {...rest}
      >
        {options?.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </ChakraSelect>
      {errors && errors[name] && (
        <Text fontSize="sm" color="red.500">
          Campo obrigatório
        </Text>
      )}
    </FormControl>
  )
}
