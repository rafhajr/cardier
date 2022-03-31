import { AppProvider } from '@/contexts/index'
import { useProductById } from '@/services/hooks/useProductById'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import UpdateProduct, { getServerSideProps } from './[id]'

jest.mock('@/services/hooks/useProductById', () => ({
  useProductById: jest.fn(),
}))

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: 'example.com',
      query: '',
      asPath: 'example.com',
    }
  },
}))

jest.mock('@/services/api')

const renderComponent = () => {
  ;(useProductById as jest.Mock).mockImplementation(() => ({
    isLoading: false,
    data: {
      id: 'uuid',
      name: 'Camarao',
      quantity: 180,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }))
  return render(
    <AppProvider>
      <UpdateProduct />
    </AppProvider>
  )
}

describe('<UpdateProduct />', () => {
  it('should render correctly', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should update product', async () => {
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

  it('should test server side props ', async () => {
    const context = {
      query: { id: 'uuid ' } as ParsedUrlQuery,
    }
    const response = await getServerSideProps(
      context as GetServerSidePropsContext
    )

    expect(response).toBeDefined()
  })
})
