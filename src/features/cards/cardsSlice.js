import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} }

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard(state, action) {
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
