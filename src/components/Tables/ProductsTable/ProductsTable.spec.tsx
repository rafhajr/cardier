import { AppProvider } from '@/contexts/index'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from '@testing-library/react-hooks'
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

  it('should open delete modal', async () => {
    renderComponent()

    const deleteButton = screen.getByRole('button')

    act(() => {
      fireEvent.click(deleteButton)
    })

    await waitFor(() =>
      expect(screen.getByText('Excluir Produto')).toBeInTheDocument()
    )
  })

  it('should close delete modal', async () => {
    renderComponent()

    const deleteButton = screen.getByRole('button')

    act(() => {
      fireEvent.click(deleteButton)
    })

    const dialog = screen.getByRole('alertdialog', {
      name: /excluir produto/i,
    })

    const cancelButton = screen.getByRole('button', {
      name: /cancelar/i,
    })

    act(() => {
      fireEvent.click(cancelButton)
    })

    await waitFor(() => expect(dialog).not.toBeInTheDocument())
  })
})
