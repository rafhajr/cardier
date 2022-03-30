import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
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
})
