import React, { useState } from "react";
import { TreeNode } from '../../../api'
import Icons from '../../../assets/icons'
import styles from './FileExplorerNode.module.scss'

type FileExplorerProps = {
  node: TreeNode
  deleteNodeById: (id: string) => void
}

const renderIcon = (type: string, name: string, visible: boolean): React.ReactElement | undefined => {
  if (type === 'folder') {
    return visible ?  <Icons.ArrowDown /> : <Icons.ArrowRight />
  } else if (type === 'file') {
    if (name.endsWith('.css')) {
      return <Icons.CssFile />
    } else if (name.endsWith('.js')) {
      return <Icons.JsFile />
    } else if (name.endsWith('.svg')) {
      return <Icons.ImageFile />
    } else if (name.endsWith('.json')) {
      return <Icons.JsonFile />
    } else if (name.startsWith('.git')) {
      return <Icons.GitFile />
    } else if (name.startsWith('README')) {
      return <Icons.ReadmeFile />
    } else if (name.startsWith('yarn')) {
      return <Icons.YarnFile />
    }

    return <Icons.DefaultFile />
  }
}

const FileExplorerNode = ({ node, deleteNodeById }: FileExplorerProps): React.ReactElement => {
  const [visible, setVisible] = useState(false)

  let childrenNodes

  if (node.children && node.children.length > 0) {
    childrenNodes = node.children.map((child: TreeNode) => (
      <div className={styles.innerNode} key={child.id}>
        <FileExplorerNode node={child} deleteNodeById={deleteNodeById} />
      </div>
    ))
  }

  return (
    <div key={node.id}>
      <div className={styles.node} onClick={() => setVisible(!visible)}>
        <span className={styles.nodeName}>
          {renderIcon(node.type, node.name, visible)}
          {node.name}
        </span>
        <span className={styles.closeButton}
            onClick={(event) => {
            event.stopPropagation()
            deleteNodeById(node.id)
          }}
        >
          <Icons.X />
        </span>
      </div>

      {(node.children && node.children.length > 0) && (
        <div style={{display: visible ? 'block' : 'none'}}>
          {childrenNodes}
        </div>
      )}
    </div>
  )
}

export default FileExplorerNode