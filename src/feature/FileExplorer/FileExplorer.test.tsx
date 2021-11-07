import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import FileExplorer from './FileExplorer'

describe('FileExplorer', () => {
  it('should display project name', async () => {
    render(<FileExplorer />)

    await waitFor(() => {
      expect(screen.getByText('my project')).toBeInTheDocument
    })
  })

  it('should show children nodes when clicking on parent', async () => {
    render(<FileExplorer />)

    await waitFor(() => {
      expect(screen.getByText('webpack.config.js')).not.toBeVisible()
      fireEvent.click(screen.getByText('config'))
      expect(screen.getByText('webpack.config.js')).toBeVisible()
    })
  })
})