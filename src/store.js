import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./redux/NumberSlice";
import DrinksSlice from "./redux/DrinksSlice";
import UserSlice from "./pages/CRUD/UserSlice";



export const store = configureStore({
    reducer: {
        number: NumberSlice,
        drinks: DrinksSlice,
        user: UserSlice
    }
})