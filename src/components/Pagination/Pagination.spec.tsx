import { AppProvider } from '@/contexts/index'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

type PaginationProps = {
  currentPage?: number
  totalCountOfRegisters: number
}

const renderComponent = ({
  currentPage,
  totalCountOfRegisters,
}: PaginationProps) => {
  return render(
    <AppProvider>
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        registersPerPage={10}
        currentPage={currentPage}
        onPageChange={() => {}}
      />
    </AppProvider>
  )
}

describe('<Pagination />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent({
      currentPage: 1,
      totalCountOfRegisters: 30,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with ellipses', () => {
    renderComponent({ currentPage: 15, totalCountOfRegisters: 100 })
    expect(screen.getByText(/\.\.\./i)).toBeInTheDocument()
  })

  it('should render with two ellipses', () => {
    renderComponent({ currentPage: 15, totalCountOfRegisters: 200 })

    expect(screen.getAllByText(/\.\.\./i)[1]).toBeInTheDocument()
  })
})
