import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        status: "no-Authenticated",
        user: null,
    },
    reducers: {
        onCheking: (state) => {
            state.isLoading = true;
        }
    }
});

export const { onCheking } = authSlice.actions;