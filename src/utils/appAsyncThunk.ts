import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';


type AppAsyncThunkType = {
    state: RootState
    dispatch: AppDispatch
    rejectValue: string
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<AppAsyncThunkType>();