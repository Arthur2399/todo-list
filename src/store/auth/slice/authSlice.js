import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        status: "Authenticated",
        user: null,
        errorMessage: null,
    },
    reducers: {
        onCheking: (state) => {
            state.isLoading = true;
        },
        login: (state) => {
            state.isLoading = false;
            state.status = "Authenticated";
            state.user = {
                name: "Arthur Chavez",
            };
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