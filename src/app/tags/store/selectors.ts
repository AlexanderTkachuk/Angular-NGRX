import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { TagsStateInterface } from '../types/tagsState.interface';

export const tagsFeatureSelector = createFeatureSelector<
    AppStateInterface,
    TagsStateInterface
>('tags');

export const isLoadingSelector = createSelector(tagsFeatureSelector,
    (authState: TagsStateInterface) => authState.isLoading
);
export const errorFeedSelector = createSelector(tagsFeatureSelector,
    (authState: TagsStateInterface) => authState.error);
export const tagsDataSelector = createSelector(tagsFeatureSelector,
    (authState: TagsStateInterface) => authState.tags);
