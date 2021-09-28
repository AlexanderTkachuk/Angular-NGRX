import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feed-state.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

export const feedFeatureSelector = createFeatureSelector<
    AppStateInterface,
    FeedStateInterface
>('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector,
    (authState: FeedStateInterface) => authState.isLoading
);
export const errorFeedSelector = createSelector(feedFeatureSelector,
    (authState: FeedStateInterface) => authState.error);
export const feedDataSelector = createSelector(feedFeatureSelector,
    (authState: FeedStateInterface) => authState.feed);
