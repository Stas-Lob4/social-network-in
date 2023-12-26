import { createAsyncThunk } from "@reduxjs/toolkit"
import {BaseResponseType} from '../common/types/common.types';
import {AppDispatch, AppRootStateType} from '../app/store';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType
  dispatch: AppDispatch
  rejectValue: null | BaseResponseType
}>()
