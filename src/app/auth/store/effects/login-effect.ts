import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, timeout, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { loginAction, loginSuccessAction, loginFailureAction } from '../actions/login-actions';
@Injectable()
export class LoginEffect {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        // switchMap(({ request }) => of(GetMockUser()).pipe(
        //     map((currentUser: CurrentUserInterface) => {
        //         this.persistentService.set('accessToken', currentUser.token);
        //         return loginSuccessAction({ currentUser });
        //     }),
        //     catchError((error: HttpErrorResponse) => error?.error?.errors ? of(loginFailureAction({ errors: error.error.errors })) : of(loginFailureAction({ errors: { 'Long loading': ['The request so long sending. Try later.'] } })))
        // )),
        switchMap(({ request }) => this.authService.login(request).pipe(
            timeout(10000),
            map((currentUser: CurrentUserInterface) => {
                this.persistentService.set('accessToken', currentUser.token);
                return loginSuccessAction({ currentUser });
            }),
            catchError((error: HttpErrorResponse) => error?.error?.errors ? of(loginFailureAction({ errors: error.error.errors })) : of(loginFailureAction({ errors: { 'Long loading': ['The request so long sending. Try later.'] } })))
        ))
    ));
    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/home'))
    ), { dispatch: false });
    constructor(private actions$: Actions, private authService: AuthService, private persistentService: PersistentService, private router: Router) { }
}
