import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
import { SignIn } from './siginin'

describe('<Signin />', () => {
  it('should render signin page correctly', () => {
    const { container } = render(
      <AppProvider>
        <SignIn />
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
