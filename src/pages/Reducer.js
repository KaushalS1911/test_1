import React, { useReducer, useState } from 'react'

function Reducer() {

    const initialState = {
        number: 0,
        name: "",
        color: "",
        error: ""
    }

    function reducer(state,action){
        if(action.type === "INCREMENT"){
            return {...state, number: state.number + 1, name: "Admin"}
        }else if(action.type === "DECREMENT"){
            return {...state, number: state.number - 1, name: ""}
        }else{
            return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='container p-5 col-md-4'>
        <h2>Number: {state.number}</h2>
        <h2>Name: {state.name}</h2>
        <button className='btn btn-primary' onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button className='btn btn-danger mx-2' onClick={() => dispatch({type: "DECREMENT"})}>-</button>
    </div>
  )
}

export default Reducer