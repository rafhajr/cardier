import { Input } from '@/components/Form/Input'
import { Button, Flex, Image, Stack } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks'

type FormProps = {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const { handleSignIn, loading } = useAuth()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>()

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    handleSignIn(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        onSubmit={handleSubmit(onSubmit)}
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
            name="password"
            label="Senha"
            type="password"
          />
        </Stack>

        <Button
          isLoading={loading}
          type="submit"
          mt="6"
          colorScheme="orange"
          size="md"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies['@maral.token']) {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default SignIn
