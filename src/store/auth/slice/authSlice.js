import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        status: "checking",
        user: null,
        errorMessage: null,
    },
    reducers: {
        onCheking: (state) => {
            state.isLoading = true;
        },

        login: (state, { payload }) => {
            state.isLoading = false;
            state.status = "Authenticated";
            state.user = payload;
        },
        logout: (state, { payload }) => {
            state.isLoading = false;
            state.status = "No-Authenticated";
            state.user = null;
            state.errorMessage = payload;
        }
    }
});

export const { onCheking, login, logout } = authSlice.actions;