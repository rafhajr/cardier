import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
import { Sidebar } from './Sidebar'

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

describe('<Sidebar/>', () => {
  it('should be render correctly', () => {
    const { container } = render(
      <AppProvider>
        <Sidebar />
      </AppProvider>
    )
    expect(container).toMatchSnapshot()
  })
})
