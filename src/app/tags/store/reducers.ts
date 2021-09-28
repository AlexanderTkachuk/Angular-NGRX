import { createReducer, on, Action } from '@ngrx/store';
import { TagsStateInterface } from '../types/tagsState.interface';
import { getTagsAction, getTagsSuccessAction, getTagsFailureAction } from './actions';

const initialState: TagsStateInterface = {
    isLoading: false,
    error: null,
    tags: null
};

const authReducer = createReducer(
    initialState,
    on(
        getTagsAction,
        (state): TagsStateInterface => ({
            ...state,
            isLoading: true,
            error: null,
            tags: null
        })
    ),
    on(
        getTagsSuccessAction,
        (state, action): TagsStateInterface => ({
            ...state,
            isLoading: false,
            error: null,
            tags: action.tags
        })
    ),
    on(
        getTagsFailureAction,
        (state, error): TagsStateInterface => ({
            ...state,
            isLoading: false,
            error: error.error,
            tags: null
        })
    )
);

export function tagsReducers(state: TagsStateInterface, action: Action) {
    return authReducer(state, action);
}
