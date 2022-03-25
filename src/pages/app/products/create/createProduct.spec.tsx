import { AppProvider } from '@/contexts/index'
import { api } from '@/services/api'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
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
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    ;(api.post as jest.Mock).mockReturnValueOnce({
      status: 201,
      data: {},
    })
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

    expect(useRouter).toHaveBeenCalled()
  })

  it('should be an error when creating a product', async () => {
    ;(api.post as jest.Mock).mockReturnValueOnce({
      status: 400,
      data: {},
    })
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

    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument())
  })
})
