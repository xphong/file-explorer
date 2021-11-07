import { render, screen, waitFor } from '@testing-library/react'
import FileExplorerNode from './FileExplorerNode'
import { TreeNode } from '../../../api'

const mockNode: TreeNode = {
  id: "a86d15e1-2ed0-4877-aa22-4721b6ca000d",
  type: "folder",
  name: "components",
  children: [
    {
      id: "cac67386-9bfe-414c-bc5f-1918fb4dbb41",
      type: "file",
      name: "Button.css",
    },
    {
      id: "e9e5cf12-4d63-44e3-85cf-876b7604e540",
      type: "file",
      name: "Button.js",
    },
  ],
}

describe('FileExplorerNode', () => {
  it('should display node names', async () => {
    render(<FileExplorerNode node={mockNode} deleteNodeById={() => {}} />)

    await waitFor(() => {
      expect(screen.getByText('components')).toBeInTheDocument
      expect(screen.getByText('Button.css')).toBeInTheDocument
      expect(screen.getByText('Button.js')).toBeInTheDocument
    })
  })
})