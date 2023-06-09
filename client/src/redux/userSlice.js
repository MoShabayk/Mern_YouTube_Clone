import { createSlice } from '@reduxjs/toolkit';
//Module not found: Error: Can't resolve '@reduxjs/toolkit' in 'C:\Users\alsha\Downloads\youtube_clone\client\src\redux'??  This is because we haven't installed redux toolkit yet.  Run this command:  npm install @reduxjs/toolkit

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    loginStart: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = false;
    },
    loginFailure: (state) => {
        state.loading = false;
        state.error = true;
    },
    logout: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
    },
    subscription : (state, action) => {
        if(state.currentUser.subscribedUsers.includes(action.payload)){
            state.currentUser.subscribedUsers.splice(
                state.currentUser.subscribedUsers.findIndex(
                    (channelId) => channelId === action.payload
                ),
                1
            );
        }else{
            state.currentUser.subscribedUsers.push(action.payload);
        }

    },  
        
    },
    
});


export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;