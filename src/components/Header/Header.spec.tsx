import { AppProvider } from '@/contexts/index'
import { useBreakpointValue } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn(),
}))

const renderComponent = () => {
  return render(
    <AppProvider>
      <Header />
    </AppProvider>
  )
}

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should render mobile screen', () => {
    renderComponent()
    ;(useBreakpointValue as jest.Mock).mockReturnValue({
      base: false,
      lg: true,
    })

    expect(
      screen.getByRole('button', {
        name: /open navigation/i,
      })
    ).toBeInTheDocument()
  })

  it('should render mobile screen', () => {
    renderComponent()
    ;(useBreakpointValue as jest.Mock).mockReturnValue({
      base: true,
      lg: false,
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
