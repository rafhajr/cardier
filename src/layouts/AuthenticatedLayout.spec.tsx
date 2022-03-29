import { render } from '@testing-library/react'
import { AppProvider } from '../contexts'
import { AuthenticatedLayout } from './AuthenticatedLayout'

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

describe('<AuthenticatedLayout />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AppProvider>
        <AuthenticatedLayout>
          <h1>Layout</h1>
        </AuthenticatedLayout>
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
