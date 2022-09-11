import { render, screen } from '@testing-library/react'
import ScoreBoard from './ScoreBoard'

describe('ScoreBoard component', () => {
  test('render "NEW GAME" button', () => {
    render(<ScoreBoard />)
    const outputElement = screen.getByText('new game')
    expect(outputElement).toBeInTheDocument()
  })
  // test('render users if request succeds', async () => {
  //   render(<ScoreBoard />)

  //   const listItemElements = await screen.findAllByRole('listitem')
  //   expect(listItemElements).not.toHaveLength(0)
  // })
})
