import React from 'react'

export default function Title({ title, featured }) {
  return (
    <h1 className={title}>
      <span>{featured}</span>
    </h1>
  )
}
