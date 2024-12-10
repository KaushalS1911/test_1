import React, { useContext } from 'react'
import { userContext } from '../../App'

function Comp3() {

   const {name, email} = useContext(userContext)

  return (
    <div className='container p-5 col-md-6'>
        <h2>My name is {name}</h2>
        <h2>My Email is {email}</h2>
    </div>
  )
}

export default Comp3