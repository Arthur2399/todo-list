import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        status: "No-Authenticated",
        user: null,
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
            }
        }
    }
});

export const { onCheking, login } = authSlice.actions;