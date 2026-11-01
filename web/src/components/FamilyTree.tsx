'use client'

import React from 'react'
import type { TreeNode } from '@/lib/familyTree'

interface FamilyTreeProps {
  // Top line of the tree, e.g. the khandan's ancestor from the book's index
  title: string
  subtitle?: string
  roots: TreeNode[]
  selectedId?: string | null
  onSelect: (node: TreeNode) => void
}

function PersonNode({
  node,
  selectedId,
  onSelect,
}: {
  node: TreeNode
  selectedId?: string | null
  onSelect: (node: TreeNode) => void
}) {
  const classes = [
    'ftree-node',
    node.gender === 'female' && 'is-female',
    node.recordId && 'is-owner',
    node.isPlaceholder && 'is-placeholder',
    selectedId === node.id && 'is-selected',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li>
      <button type="button" className={classes} onClick={() => onSelect(node)} data-node-id={node.id}>
        <span className="ftree-name">
          {node.name}
          {node.isDeceased && <span className="ftree-meta"> (مرحوم)</span>}
        </span>
        {node.spouse && (
          <span className="ftree-meta">
            {node.gender === 'female' ? `زوجہ ${node.spouse}` : `زوجہ: ${node.spouse}`}
          </span>
        )}
        {node.spouseMohalla && <span className="ftree-meta">{node.spouseMohalla}</span>}
        {node.notes && <span className="ftree-meta">({node.notes})</span>}
        {node.continuationPage !== undefined && (
          <span className="ftree-continue">صفحہ {node.continuationPage} پر جاری</span>
        )}
        {node.referencePage && <span className="ftree-meta">صفحہ {node.referencePage}</span>}
      </button>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child) => (
            <PersonNode key={child.id} node={child} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function FamilyTree({ title, subtitle, roots, selectedId, onSelect }: FamilyTreeProps) {
  return (
    <div className="ftree">
      <ul>
        <li>
          <div className="ftree-node is-root" role="heading" aria-level={3} data-node-id="__title">
            <span className="ftree-name">{title}</span>
            {subtitle && <span className="ftree-meta">{subtitle}</span>}
          </div>
          {roots.length > 0 && (
            <ul>
              {roots.map((root) => (
                <PersonNode key={root.id} node={root} selectedId={selectedId} onSelect={onSelect} />
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}
