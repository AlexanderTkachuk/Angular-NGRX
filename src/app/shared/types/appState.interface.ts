import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import { FeedStateInterface } from 'src/app/globalFeed/types/feed-state.interface';
import { TagsStateInterface } from 'src/app/tags/types/tagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagsStateInterface;
}
