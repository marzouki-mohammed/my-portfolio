import { createSlice } from "@reduxjs/toolkit";

// types.ts
export interface MenuOpenState {
    value: boolean;
}
// État initial
const initialState: MenuOpenState = { value: false };
export const menuSlice = createSlice({
    name : "menuOpen",
    initialState,
    reducers : {
        open : (state) => {
            state.value = true;
        },
        close : (state) => {
            state.value = false;
        },
    }
});

export const {open , close } = menuSlice.actions;
export default menuSlice.reducer