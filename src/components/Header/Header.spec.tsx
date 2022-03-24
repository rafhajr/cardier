import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
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

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
