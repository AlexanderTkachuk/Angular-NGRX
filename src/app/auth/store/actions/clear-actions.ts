import { createAction } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth/store/actionTypes';

export const clearAuthErrors = createAction(
    ActionTypes.CLEAR_AUTH_ERRORS);
export const logoutAction = createAction(
    ActionTypes.LOGOUT);
