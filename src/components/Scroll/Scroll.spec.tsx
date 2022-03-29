import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
import { Scroll } from '.'

describe('<PageWrapper />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AppProvider>
        <Scroll>
          <h1>ScrollComponent</h1>
        </Scroll>
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
