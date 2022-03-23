import { Input } from '@/components/Form/Input'
import { Button, Flex, Image, Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

export const SignIn: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        onSubmit={handleSubmit(() => {})}
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius="8"
      >
        <Image w="130px" mt="-5" mb="5" src="logo.png" alt="logo" mx="auto" />
        <Stack spacing="4">
          <Input
            errors={errors}
            register={register}
            name="email"
            label="E-mail"
            type="email"
            required
          />
          <Input
            errors={errors}
            register={register}
            required
            name="password"
            label="Senha"
            type="password"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="orange" size="md">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
