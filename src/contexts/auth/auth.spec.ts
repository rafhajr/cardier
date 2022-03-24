import { api } from '@/services/api'
import { act, screen, waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useAuth } from 'src/hooks'
import { AuthContextProvider } from './auth'

jest.mock('next/router')
jest.mock('@/services/api')

const payload = {
  data: {
    token: 'fake-token',
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
  },
}

describe('AuthContext()', () => {
  it('should call  handleSignIn', async () => {
    ;(api.post as jest.Mock).mockReturnValueOnce(payload)

    const { result } = renderHook(useAuth, {
      wrapper: AuthContextProvider,
    })
    const handleSignInSpy = jest.spyOn(result.current, 'handleSignIn')

    const email = 'lucassaagas@gmail.com'
    const password = '123456'

    await act(async () => result.current.handleSignIn({ email, password }))

    expect(handleSignInSpy).toBeCalledWith({ email, password })
  })

  it('should call error in handleSignIn', async () => {
    ;(api.post as jest.Mock).mockReturnValueOnce({})

    const { result } = renderHook(useAuth, {
      wrapper: AuthContextProvider,
    })
    const handleSignInSpy = jest.spyOn(result.current, 'handleSignIn')

    const email = 'lucassaagas@gmail.com'
    const password = '123456'

    await act(async () => result.current.handleSignIn({ email, password }))

    expect(handleSignInSpy).toBeCalledWith({ email, password })
    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument())
  })

  it('should call handleSignOut', async () => {
    const { result } = renderHook(useAuth, {
      wrapper: AuthContextProvider,
    })
    const handleSignInSpy = jest.spyOn(result.current, 'handleSignOut')

    await act(async () => result.current.handleSignOut())

    expect(handleSignInSpy).toBeCalledTimes(1)
  })
})
