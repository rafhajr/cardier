import { AppProvider } from '@/contexts/index'
import { useProducts } from '@/services/hooks/useProducts'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from '@testing-library/react-hooks'
import { GetServerSidePropsContext } from 'next'
import Products, { getServerSideProps } from '.'

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

jest.mock('@/services/hooks/useProducts', () => ({
  useProducts: jest.fn(),
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
      <Products />
    </AppProvider>
  )
}

describe('<Products/>', () => {
  it('should render correctly', () => {
    ;(useProducts as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: {
        products: products,
      },
    }))

    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should render error when return error', () => {
    ;(useProducts as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      error: true,
    }))
    renderComponent()

    expect(
      screen.getByText(/falha ao obter dados dos produtos\./i)
    ).toBeInTheDocument()
  })

  it('should render loading when isLoading', () => {
    ;(useProducts as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }))
    renderComponent()

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument()
  })

  it('should refetch data when click in refetch button', async () => {
    ;(useProducts as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      refetch: jest.fn(),
    }))

    renderComponent()

    const button = screen.getByRole('button')

    await act(async () => {
      fireEvent.click(button)
    })

    expect(useProducts).toHaveBeenCalled()
  })

  it('should test server side props ', async () => {
    const response = await getServerSideProps({} as GetServerSidePropsContext)

    expect(response).toBeDefined()
  })
})
