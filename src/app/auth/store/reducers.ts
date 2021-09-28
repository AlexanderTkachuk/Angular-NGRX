import { createReducer, on, Action } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register-actions';
import { loginAction, loginSuccessAction, loginFailureAction } from './actions/login-actions';
import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from './actions/current-user-actions';
import { clearAuthErrors, logoutAction } from './actions/clear-actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: false,
  validationBackendErrors: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
      isLoggedIn: false,
      currentUser: null,
      validationBackendErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoggedIn: true,
      currentUser: action.currentUser,
      validationBackendErrors: null
    })
  ),
  on(
    registerFailureAction,
    (state, error): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      currentUser: null,
      validationBackendErrors: error.errors
    })
  ),

  // ========= LOG IN REDUCERS ===========
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      isLoggedIn: false,
      currentUser: null,
      validationBackendErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
      validationBackendErrors: null
    })
  ),
  on(
    loginFailureAction,
    (state, error): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      currentUser: null,
      validationBackendErrors: error.errors
    })
  ),
  // ======== GET CURRENT USER ==========
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  ),
  on(
    clearAuthErrors,
    (state): AuthStateInterface => ({
      ...state,
      validationBackendErrors: null
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      currentUser: null,
      isLoggedIn: false,
      validationBackendErrors: null
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
