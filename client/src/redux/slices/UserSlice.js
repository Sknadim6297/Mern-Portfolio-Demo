import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        projects: [],
        skills: [],
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
    },
});

export const { setProjects, setSkills } = userSlice.actions;
export default userSlice.reducer;


