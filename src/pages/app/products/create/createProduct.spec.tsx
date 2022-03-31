import { AppProvider } from '@/contexts/index'
import { act, fireEvent, render, screen } from '@testing-library/react'
import CreateProduct from '.'

jest.mock('@/services/api')

const renderComponent = () => {
  return render(
    <AppProvider>
      <CreateProduct />
    </AppProvider>
  )
}

describe('<CreateProduct />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should create product', async () => {
    const useMutationSpy = jest.spyOn(require('react-query'), 'useMutation')

    renderComponent()

    const name = 'camarao'
    const quantity = '2'

    const nameInput = screen.getAllByRole('textbox')[0] as HTMLInputElement
    const quantityInput = screen.getAllByRole('textbox')[1] as HTMLInputElement

    act(() => {
      fireEvent.change(nameInput, { target: { value: name } })
      fireEvent.change(quantityInput, { target: { value: quantity } })
    })

    expect(nameInput.value).toEqual(name)
    expect(quantityInput.value).toEqual(quantity)

    const saveButton = screen.getByRole('button', {
      name: /salvar/i,
    })

    act(() => {
      fireEvent.click(saveButton)
    })

    expect(useMutationSpy).toHaveBeenCalled()
  })
})
