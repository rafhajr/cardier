import { AppProvider } from '@/contexts/index'
import { render, screen } from '@testing-library/react'
import UpdateProduct from './[id]'

const mockedProduct = {
  id: 'uuid',
  name: 'Camarao',
  quantity: 200,
  createdAt: new Date(),
  updatedAt: new Date(),
}

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

const renderComponent = () => {
  return render(
    <AppProvider>
      <UpdateProduct product={mockedProduct} />
    </AppProvider>
  )
}

describe('<UpdateProduct />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    screen.logTestingPlaygroundURL()

    expect(container).toMatchSnapshot()
  })
})
