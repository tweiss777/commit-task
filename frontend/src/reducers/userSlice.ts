import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUser  } from "../types/user";

const initialUserState: NewUser = {
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const userSlice = createSlice({
    name: "user",

    initialState: initialUserState,
    reducers: {
        setUser(state, action: PayloadAction<NewUser>) {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword
    },
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
