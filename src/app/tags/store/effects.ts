import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, timeout } from 'rxjs/operators';
import { getTagsAction, getTagsSuccessAction, getTagsFailureAction } from './actions';
import { TagsService } from '../services/tags.service';
@Injectable()
export class GetTagsEffect {
    getTags$ = createEffect(() => this.actions$.pipe(
        ofType(getTagsAction),
        switchMap(() =>
        this.tagsService.getTags().pipe(
                timeout(10000),
                map((tags: {tags: string[]}) => getTagsSuccessAction({tags: tags.tags })),
                catchError(() => of(getTagsFailureAction({error: 'Error fetch tags'})))
            ))
    ));

    constructor(private actions$: Actions, private tagsService: TagsService) { }
}
