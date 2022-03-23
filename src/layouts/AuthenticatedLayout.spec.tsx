import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
import { AuthenticatedLayout } from './AuthenticatedLayout'

describe('<Signin />', () => {
  it('should render signin page correctly', () => {
    const { container } = render(
      <AppProvider>
        <AuthenticatedLayout>Page</AuthenticatedLayout>
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
