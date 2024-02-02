import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        list: [],
        errorMessage: null,
    },
    reducers: {
        onCheking: (state) => {
            state.isLoading = true;
        },
        onInsertItem: (state, { payload }) => {
            state.list = [...state.list, payload]
        },
        onDeleteItem: (state, { payload }) => {
            state.list = state.list.filter((item) => item.id != payload);
        }
    }
});

export const { onCheking, onInsertItem, onDeleteItem } = todoSlice.actions;