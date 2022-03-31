import { AppProvider } from '@/contexts/index'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { DeleteProductModal } from '.'

jest.mock('@/services/api')

const renderComponent = () => {
  return render(
    <AppProvider>
      <DeleteProductModal isOpen onClose={() => {}} selectedProduct="uuid" />
    </AppProvider>
  )
}

describe('<PageWrapper />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should delete product', () => {
    const useMutationSpy = jest.spyOn(require('react-query'), 'useMutation')
    renderComponent()

    const button = screen.getByRole('button', {
      name: /excluir/i,
    })

    act(() => {
      fireEvent.click(button)
    })

    expect(useMutationSpy).toBeCalled()
  })

  it('should render error when delete product', async () => {
    const useMutationSpy = jest
      .spyOn(require('react-query'), 'useMutation')
      .mockReturnValue(() => Promise.reject(new Error('error')))

    renderComponent()

    const button = screen.getByRole('button', {
      name: /excluir/i,
    })

    act(() => {
      fireEvent.click(button)
    })

    screen.logTestingPlaygroundURL()
  })
})
