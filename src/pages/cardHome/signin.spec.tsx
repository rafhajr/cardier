import { AppProvider } from '@/contexts/index'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import SignIn, { getServerSideProps } from './index'

describe('<Signin />', () => {
  it('should render signin page correctly', () => {
    const { container } = render(
      <AppProvider>
        <SignIn />
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('should call signin function', async () => {
    render(
      <AppProvider>
        <SignIn />
      </AppProvider>
    )

    const email = 'lucassaagas@gmail.com'

    const emailInput: HTMLInputElement = screen.getByRole('textbox', {
      name: /e-mail senha/i,
    })

    const button = screen.getByRole('button', {
      name: /entrar/i,
    })

    act(() => {
      fireEvent.change(emailInput, { target: { value: email } })
    })

    await act(async () => {
      fireEvent.click(button)
    })

    expect(emailInput.value).toEqual(email)
  })

  it('should test server side props ', async () => {
    const response = await getServerSideProps({} as GetServerSidePropsContext)

    expect(response).toEqual(
      expect.objectContaining({
        props: {},
      })
    )
  })
})
