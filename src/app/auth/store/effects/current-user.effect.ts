import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, timeout } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from '../actions/current-user-actions';
import { GetMockUser } from 'src/app/mock/mock-user';
@Injectable()
export class CurrentUserEffect {
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
            const token = this.persistentService.get('accessToken');
            if (!token) {
                return of(getCurrentUserFailureAction());
            }
            return of(GetMockUser()).pipe(//this.authService.getCurrentUser()
                timeout(10000),
                map((currentUser: CurrentUserInterface) => getCurrentUserSuccessAction({ currentUser })),
                catchError(() => of(getCurrentUserFailureAction()))
            );
        })
    ));

    constructor(private actions$: Actions, private authService: AuthService, private persistentService: PersistentService) { }
}
