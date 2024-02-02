import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { todoSlice } from "./modules";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todo: todoSlice.reducer,
    }
});