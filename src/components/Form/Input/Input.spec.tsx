import { Input } from '@/components/Form/Input'
import { render, screen } from '@testing-library/react'
import { AppProvider } from '../../../contexts/index'

const register = jest.fn()

describe('<Input/>', () => {
  it('should render input correctly', () => {
    const { container } = render(
      <AppProvider>
        <Input name="name" label="Nome" register={register} />
      </AppProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render error when input is required', () => {
    render(
      <AppProvider>
        <Input
          name="email"
          label="Nome"
          register={register}
          errors={{ email: {} }}
        />
      </AppProvider>
    )
    expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument()
  })
})
