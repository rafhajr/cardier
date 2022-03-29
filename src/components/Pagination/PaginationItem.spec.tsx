import { AppProvider } from '@/contexts/index'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { PaginationItem } from './PaginationItem'

type PaginationItemProps = {
  isCurrent: boolean
}

const onPageChange = jest.fn()

const renderComponent = ({ isCurrent }: PaginationItemProps) => {
  return render(
    <AppProvider>
      <PaginationItem
        number={1}
        isCurrent={isCurrent}
        onPageChange={onPageChange}
      />
    </AppProvider>
  )
}

describe('<Pagination />', () => {
  it('should call onPageChange if isCurrent false', () => {
    renderComponent({ isCurrent: false })

    const button = screen.getByRole('button', {
      name: /1/i,
    })

    act(() => {
      fireEvent.click(button)
    })

    expect(onPageChange).toBeCalledWith(1)
  })

  it('should not call onPageChange if isCurrent true', () => {
    renderComponent({ isCurrent: true })

    const button = screen.getByRole('button', {
      name: /1/i,
    })

    act(() => {
      fireEvent.click(button)
    })

    expect(onPageChange).toBeCalled()
  })
})
