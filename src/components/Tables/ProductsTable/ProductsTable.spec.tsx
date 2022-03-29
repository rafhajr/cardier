import { AppProvider } from '@/contexts/index'
import { useBreakpointValue } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import { ProductsTable } from './ProductsTable'

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

const products = [
  {
    id: '123',
    name: 'John Doe',
    quantity: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const renderComponent = () => {
  return render(
    <AppProvider>
      <ProductsTable products={products} />
    </AppProvider>
  )
}

describe('<PageWrapper />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should hidden update button when mobile screen', () => {
    ;(useBreakpointValue as jest.Mock).mockReturnValue({
      base: false,
      lg: true,
    })
    renderComponent()

    expect(screen.getByText(/editar/i)).toBeInTheDocument()
  })
})
