import { GetFeedResponseInterface } from './getFeedResponse.interface';

export interface FeedStateInterface {
    isLoading: boolean;
    error: string | null;
    feed: GetFeedResponseInterface | null;
}