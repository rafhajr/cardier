import { AppProvider } from '@/contexts/index'
import { Text } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { ActiveLink } from './ActiveLink'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: 'example.com',
      query: '',
      asPath: 'example.com',
    }
  },
}))

describe('<ActiveLink />', () => {
  it('should be render correctly', () => {
    const { container } = render(
      <AppProvider>
        <ActiveLink href="example.com.br">
          <Text>Link</Text>
        </ActiveLink>
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('should be render active link', () => {
    render(
      <AppProvider>
        <ActiveLink shouldMatchExactHref href="example.com" as="example.com">
          <p>Link</p>
        </ActiveLink>
      </AppProvider>
    )

    expect(screen.getByText(/link/i)).toHaveAttribute('color', 'orange.500')
  })

  it('should be render active link with shouldMatchExactHref false', () => {
    render(
      <AppProvider>
        <ActiveLink
          shouldMatchExactHref={false}
          href="example.com"
          as="example.com"
        >
          <p>Link</p>
        </ActiveLink>
      </AppProvider>
    )

    expect(screen.getByText(/link/i)).toHaveAttribute('color', 'orange.500')
  })
})
