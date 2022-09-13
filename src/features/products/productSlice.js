import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    products: [],
    isLoading: true
}

export const getProductItems = createAsyncThunk(
    "cart/getProductItems", () => {
        return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error))
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [getProductItems.pending]: (state) => {
            state.isLoading = true
        },
        [getProductItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        [getProductItems.rejected]: (state, action) => {
            state.isLoading = false
        }
    },
})

export default productSlice.reducer