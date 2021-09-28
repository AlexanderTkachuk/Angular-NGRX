import { createReducer, on, Action } from '@ngrx/store';
import { FeedStateInterface } from '../types/feed-state.interface';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from './actions';

const initialState: FeedStateInterface = {
    isLoading: false,
    error: null,
    feed: null
};

const authReducer = createReducer(
    initialState,
    on(
        getFeedAction,
        (state): FeedStateInterface => ({
            ...state,
            isLoading: true,
            error: null,
            feed: null
        })
    ),
    on(
        getFeedSuccessAction,
        (state, action): FeedStateInterface => ({
            ...state,
            isLoading: false,
            error: null,
            feed: action.feed
        })
    ),
    on(
        getFeedFailureAction,
        (state, error): FeedStateInterface => ({
            ...state,
            isLoading: false,
            error: error.error,
            feed: null
        })
    )
);

export function feedReducers(state: FeedStateInterface, action: Action) {
    return authReducer(state, action);
}