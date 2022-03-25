import { AppProvider } from '@/contexts/index'
import { render } from '@testing-library/react'
import { FormLayout } from './FormLayout'

describe('<FormLayout />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <AppProvider>
        <FormLayout title="Form Example">
          <h1>Form</h1>
        </FormLayout>
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
