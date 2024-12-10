import React from 'react'
import { useLocation } from 'react-router-dom'

function Location() {

    const location = useLocation()
    console.log(location);

  return (
    <div>
        <h2>Location</h2>
    </div>
  )
}

export default Location