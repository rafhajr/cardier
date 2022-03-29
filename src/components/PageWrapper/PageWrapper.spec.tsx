import { AppProvider } from '@/contexts/index'
import { render, screen } from '@testing-library/react'
import { PageWrapper } from './PageWrapper'

type PageWrapperProps = {
  isFetching?: boolean
}

const renderComponent = ({ isFetching }: PageWrapperProps) => {
  return render(
    <AppProvider>
      <PageWrapper
        isFetching={isFetching}
        title="Example"
        refetch={() => {}}
        registrationRoute="/example"
      />
    </AppProvider>
  )
}

describe('<PageWrapper />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent({
      isFetching: false,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render spinner when isFetching ', () => {
    renderComponent({ isFetching: true })

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument()
  })
})
