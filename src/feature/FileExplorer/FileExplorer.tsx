import React, { useEffect, useState } from "react";
import useDirectoryTree from '../../hooks/useDirectoryTree'
import api, { TreeNode } from '../../api'
import FileExplorerNode from './FileExplorerNode/FileExplorerNode'
import styles from './FileExplorer.module.scss'

const FileExplorer = (): React.ReactElement => {
  const { directoryTree, deleteNodeById } = useDirectoryTree()

  return (
    <>
      {directoryTree ? (
        <div className={styles.container}>
          <header className={styles.header}>{directoryTree.name}</header>
          {(directoryTree.children && directoryTree.children.length > 0) && (
            <div className={styles.projectContainer}>
              {directoryTree.children.map((node: TreeNode) => (
                <FileExplorerNode key={node.id} node={node} deleteNodeById={deleteNodeById} />
              ))}
            </div>
          )}
        </div>
      ) : null}
     </>
  )
}

export default FileExplorer