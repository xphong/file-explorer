import { useEffect, useState } from "react";
import api, { TreeNode } from '../api'

const useDirectoryTree = () => {
  const [directoryTree, setDirectoryTree] = useState<TreeNode | undefined>()

  useEffect(() => {
    const getDirectoryTree = async () => {
      const directoryTreeResponse = await api.getDirectoryTree()
      setDirectoryTree(directoryTreeResponse)
    }

    getDirectoryTree()
  }, [])

  const deleteNodeById = async (id: string) => {
    const newDirectoryTree = await api.deleteById(id)
    setDirectoryTree(newDirectoryTree)
  }

  return {
    directoryTree,
    deleteNodeById,
  }
}

export default useDirectoryTree