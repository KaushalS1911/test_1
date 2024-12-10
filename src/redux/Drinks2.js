import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDrinks } from './DrinksSlice'
import Card from '../Card'

function Drinks2() {

    const dispatch = useDispatch()
    const {drinks} = useSelector((state) => state.drinks)

    useEffect(() => {
        dispatch(fetchAllDrinks())
    },[])

  return (
    <div>
        <h2>Drinks</h2>
        {
            drinks.map((item) => {
                return (<Card title={item.strDrink} img={item.strDrinkThumb} desc={item.strInstructions}/>)
            })
        }
    </div>
  )
}

export default Drinks2