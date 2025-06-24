import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'

jest.mock('@web3-react/core', () => ({
  useWeb3React: () => ({
    activate: jest.fn(),
    deactivate: jest.fn(),
  }),
}))

describe('Home', () => {
  it('calls activate on connect click', () => {
    const { useWeb3React } = require('@web3-react/core')
    const activateMock = useWeb3React().activate
    render(<Home />)
    const btn = screen.getByRole('button', { name: /connect wallet/i })
    fireEvent.click(btn)
    expect(activateMock).toHaveBeenCalled()
  })
})
