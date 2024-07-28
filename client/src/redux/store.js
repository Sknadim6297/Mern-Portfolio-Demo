import {configureStore} from '@reduxjs/toolkit';
import navSlice from './slices/navSlice';
import PageSlice from './slices/PageSlice';
import UserSlice from './slices/UserSlice';

const store= configureStore({
    reducer:{
        nav: navSlice, 
        page :PageSlice,
        user: UserSlice,
    }


})

export default store;