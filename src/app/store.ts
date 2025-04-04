import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./features/menuSlice";

export const store =configureStore({
    reducer : {
        [menuSlice.name] : menuSlice.reducer 
    },
});

// ✅ Définition des types globaux pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;