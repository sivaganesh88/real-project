import React from 'react'
import { useRouteError } from 'react-router'

export default function Checked() {
 
    const error = useRouteError()
    return (
    <div>
      <h1>{error.status}</h1>
    </div>
  )
}
