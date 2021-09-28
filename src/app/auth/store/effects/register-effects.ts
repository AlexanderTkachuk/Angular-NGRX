import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, map, catchError, timeout, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistentService } from 'src/app/shared/services/persistent.service';
import { registerAction, registerSuccessAction, registerFailureAction } from '../actions/register-actions';
@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        // switchMap(({ request }) => of(GetMockUser()).pipe(
        //     map((currentUser: CurrentUserInterface) => {
        //         this.persistentService.set('accessToken', currentUser.token);
        //         return registerSuccessAction({ currentUser });
        //     }),
        //     catchError((error: HttpErrorResponse) => error?.error?.errors ? of(registerFailureAction({ errors: error.error.errors })) : of(registerFailureAction({ errors: { 'Long loading': ['The request so long sending. Try later.'] } })))
        // ))
        switchMap(({ request }) => this.authService.register(request).pipe(
            timeout(10000),
            map((currentUser: CurrentUserInterface) => {
                this.persistentService.set('accessToken', currentUser.token);
                return registerSuccessAction({ currentUser });
            }),
            catchError((error: HttpErrorResponse) => error?.error?.errors ? of(registerFailureAction({ errors: error.error.errors })) : of(registerFailureAction({ errors: { 'Long loading': ['The request so long sending. Try later.'] } })))
        ))
    ));
    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => this.router.navigateByUrl('/home')),
    ), {dispatch: false});
    constructor(private actions$: Actions, private authService: AuthService, private persistentService: PersistentService, private router: Router) { }
}
