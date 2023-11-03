import { createAsyncThunk } from '@reduxjs/toolkit';


type AppAsyncThunkType = {
    state: any
    dispatch: any
    rejectValue: string
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<AppAsyncThunkType>();