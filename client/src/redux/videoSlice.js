import { createSlice } from '@reduxjs/toolkit';
//Module not found: Error: Can't resolve '@reduxjs/toolkit' in 'C:\Users\alsha\Downloads\youtube_clone\client\src\redux'??  This is because we haven't installed redux toolkit yet.  Run this command:  npm install @reduxjs/toolkit

const initialState = {
    currentVideo: null,
    loading: false,
    error: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
    fetchStart: (state) => {
        state.loading = true;
    },
    fetchSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = false;
    },
    fetchFailure: (state) => {
        state.loading = false;
        state.error = true;
    },
    },   
});

export const { fetchStart, fetchSuccess, fetchFailure } = videoSlice.actions;

export default videoSlice.reducer;