import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, timeout } from 'rxjs/operators';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from './actions';
import { FeedService } from '../services/feed.service';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { GetArticle } from 'src/app/mock/mock-article';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
@Injectable()
export class GetFeedEffect {
    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({ url }) =>
        this.feedService.getFeed(url).pipe( // of(GetArticle() as any)
                timeout(10000),
                map((feed: GetFeedResponseInterface) => getFeedSuccessAction({ feed })),
                catchError(() => of(getFeedFailureAction({error: 'Error get feed'})))
            ))
    ));

    constructor(private actions$: Actions, private feedService: FeedService) { }
}
