import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllDrinks = createAsyncThunk("Drinks/fetchAllDrinks", async () => {
   const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
   return response.data.drinks
})




export const DrinksSlice = createSlice({
    name: "Drinks",
    initialState: {
        drinks: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllDrinks.fulfilled, (state, action) => {
            state.drinks = action.payload
        })
    }
})

export const {} = DrinksSlice.actions

export default DrinksSlice.reducer