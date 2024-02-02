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
        },
        onUpdateItem: (state, { payload }) => {
            let newArray = [];
            state.list.forEach((item) => {
                if (item.id == payload.id) {
                    newArray = [...newArray, payload]
                } else {
                    newArray = [...newArray, item]
                }
            });
            state.list = newArray
        }
    }
});

export const { onCheking, onInsertItem, onDeleteItem, onUpdateItem } = todoSlice.actions;